"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { PerformanceDebugOverlay } from "./performance-debug-overlay"
import { WebGLFallback } from "./webgl-fallback"

export type EffectPreset = "auto" | "performance" | "balanced" | "quality"

interface WebGLBackgroundProps {
  preset?: EffectPreset
  showDebug?: boolean
}

interface PerformanceMetrics {
  fps: number
  frameTime: number
  memoryUsage: number
  gpuMemory: number
  renderCalls: number
}

interface BenchmarkResult {
  averageFps: number
  minFps: number
  maxFps: number
  frameTimeVariance: number
  memoryPeak: number
  score: number
  recommendation: EffectPreset
}

export function WebGLBackground({ preset = "auto", showDebug = false }: WebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glRef = useRef<WebGLRenderingContext | null>(null)
  const animationFrameRef = useRef<number>()
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)
  const [performanceMode, setPerformanceMode] = useState<"high" | "medium" | "low">("medium")
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    frameTime: 16.67,
    memoryUsage: 0,
    gpuMemory: 0,
    renderCalls: 0,
  })
  const [benchmarkResult, setBenchmarkResult] = useState<BenchmarkResult | null>(null)
  const [isBenchmarking, setIsBenchmarking] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Performance tracking
  const fpsHistory = useRef<number[]>([])
  const frameTimeHistory = useRef<number[]>([])
  const lastFrameTime = useRef(performance.now())
  const frameCount = useRef(0)

  // Device and browser detection
  const detectDeviceCapabilities = useCallback(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")

      if (!gl) return { score: 0, tier: "low" as const, renderer: "Unknown", vendor: "Unknown" }

      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info")
      const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "Unknown" : "Unknown"
      const vendor = debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || "Unknown" : "Unknown"

      // Browser scoring
      const userAgent = navigator.userAgent
      let browserScore = 1.0
      if (userAgent.includes("Chrome")) browserScore = 1.2
      else if (userAgent.includes("Firefox")) browserScore = 1.1
      else if (userAgent.includes("Safari")) browserScore = 0.9
      else if (userAgent.includes("Edge")) browserScore = 1.0

      // Device scoring
      let deviceScore = 1.0
      const rendererStr = String(renderer).toLowerCase()
      if (rendererStr.includes("nvidia") || rendererStr.includes("amd") || rendererStr.includes("intel")) {
        if (rendererStr.includes("rtx") || rendererStr.includes("rx")) deviceScore = 1.5
        else if (rendererStr.includes("gtx") || rendererStr.includes("radeon")) deviceScore = 1.3
        else deviceScore = 1.1
      }

      // Mobile detection with enhanced checks
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      const isTablet = /iPad|Android(?=.*Mobile)/i.test(userAgent)
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

      if (isMobile) deviceScore *= 0.5
      else if (isTablet) deviceScore *= 0.7
      else if (isTouchDevice) deviceScore *= 0.8

      const totalScore = browserScore * deviceScore
      const tier = totalScore >= 1.4 ? "high" : totalScore >= 1.0 ? "medium" : "low"

      return {
        score: totalScore,
        tier,
        renderer: String(renderer),
        vendor: String(vendor),
        isMobile,
        isTablet,
        isTouchDevice,
      }
    } catch (error) {
      console.warn("Device capability detection failed:", error)
      return {
        score: 0,
        tier: "low" as const,
        renderer: "Unknown",
        vendor: "Unknown",
        isMobile: false,
        isTablet: false,
        isTouchDevice: false,
      }
    }
  }, [])

  // Cross-browser compatibility test
  const testBrowserCompatibility = useCallback(() => {
    const results = {
      webgl: false,
      webgl2: false,
      extensions: [] as string[],
      maxTextureSize: 0,
      maxViewportDims: [0, 0] as [number, number],
      browser: "Unknown",
      version: "Unknown",
    }

    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      const gl2 = canvas.getContext("webgl2")

      results.webgl = !!gl
      results.webgl2 = !!gl2

      if (gl) {
        results.extensions = gl.getSupportedExtensions() || []
        results.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
        results.maxViewportDims = gl.getParameter(gl.MAX_VIEWPORT_DIMS)
      }

      // Browser detection
      const userAgent = navigator.userAgent
      if (userAgent.includes("Chrome")) {
        results.browser = "Chrome"
        const match = userAgent.match(/Chrome\/(\d+)/)
        results.version = match ? match[1] : "Unknown"
      } else if (userAgent.includes("Firefox")) {
        results.browser = "Firefox"
        const match = userAgent.match(/Firefox\/(\d+)/)
        results.version = match ? match[1] : "Unknown"
      } else if (userAgent.includes("Safari")) {
        results.browser = "Safari"
        const match = userAgent.match(/Version\/(\d+)/)
        results.version = match ? match[1] : "Unknown"
      } else if (userAgent.includes("Edge")) {
        results.browser = "Edge"
        const match = userAgent.match(/Edge\/(\d+)/)
        results.version = match ? match[1] : "Unknown"
      }

      console.log("Browser Compatibility Test Results:", results)
      return results
    } catch (error) {
      console.error("Browser compatibility test failed:", error)
      return results
    }
  }, [])

  // Performance benchmarking
  const runBenchmark = useCallback(async () => {
    if (!glRef.current || isBenchmarking) return

    console.log("Starting WebGL performance benchmark...")
    setIsBenchmarking(true)
    const benchmarkDuration = 5000 // 5 seconds
    const startTime = performance.now()
    const fpsData: number[] = []
    const frameTimeData: number[] = []
    let lastTime = startTime
    let frameCounter = 0

    const benchmarkFrame = () => {
      const currentTime = performance.now()
      const deltaTime = currentTime - lastTime
      const fps = 1000 / deltaTime

      fpsData.push(fps)
      frameTimeData.push(deltaTime)
      frameCounter++
      lastTime = currentTime

      if (currentTime - startTime < benchmarkDuration) {
        requestAnimationFrame(benchmarkFrame)
      } else {
        // Calculate benchmark results
        const averageFps = fpsData.reduce((a, b) => a + b, 0) / fpsData.length
        const minFps = Math.min(...fpsData)
        const maxFps = Math.max(...fpsData)

        const avgFrameTime = frameTimeData.reduce((a, b) => a + b, 0) / frameTimeData.length
        const frameTimeVariance =
          frameTimeData.reduce((sum, time) => sum + Math.pow(time - avgFrameTime, 2), 0) / frameTimeData.length

        const memoryInfo = (performance as any).memory
        const memoryPeak = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0

        // Calculate performance score
        let score = 0
        if (averageFps >= 55) score += 40
        else if (averageFps >= 40) score += 30
        else if (averageFps >= 25) score += 20
        else score += 10

        if (minFps >= 30) score += 20
        else if (minFps >= 20) score += 15
        else if (minFps >= 15) score += 10
        else score += 5

        if (frameTimeVariance < 50) score += 20
        else if (frameTimeVariance < 100) score += 15
        else if (frameTimeVariance < 200) score += 10
        else score += 5

        if (memoryPeak < 50) score += 20
        else if (memoryPeak < 100) score += 15
        else if (memoryPeak < 200) score += 10
        else score += 5

        // Recommend preset based on score
        let recommendation: EffectPreset = "performance"
        if (score >= 80) recommendation = "quality"
        else if (score >= 60) recommendation = "balanced"
        else recommendation = "performance"

        const result: BenchmarkResult = {
          averageFps,
          minFps,
          maxFps,
          frameTimeVariance,
          memoryPeak,
          score,
          recommendation,
        }

        setBenchmarkResult(result)
        setIsBenchmarking(false)

        console.log("Benchmark completed:", result)

        // Send analytics
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", "webgl_benchmark_complete", {
            average_fps: Math.round(averageFps),
            min_fps: Math.round(minFps),
            max_fps: Math.round(maxFps),
            performance_score: score,
            recommended_preset: recommendation,
            device_tier: detectDeviceCapabilities().tier,
          })
        }
      }
    }

    requestAnimationFrame(benchmarkFrame)
  }, [detectDeviceCapabilities, isBenchmarking])

  // Initialize WebGL
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    console.log("Initializing WebGL...")

    try {
      // Run compatibility tests
      const compatibilityResults = testBrowserCompatibility()

      if (!compatibilityResults.webgl) {
        console.warn("WebGL not supported")
        setIsWebGLSupported(false)
        return
      }

      // Try to get WebGL context with various options
      let gl: WebGLRenderingContext | null = null

      const contextOptions = {
        alpha: true,
        antialias: false, // Disable for better mobile compatibility
        depth: false,
        stencil: false,
        preserveDrawingBuffer: false,
        powerPreference: "default" as WebGLPowerPreference,
        failIfMajorPerformanceCaveat: false,
      }

      // Try different context names
      gl = canvas.getContext("webgl", contextOptions) as WebGLRenderingContext
      if (!gl) {
        gl = canvas.getContext("experimental-webgl", contextOptions) as WebGLRenderingContext
      }

      if (!gl) {
        console.warn("Failed to get WebGL context")
        setIsWebGLSupported(false)
        return
      }

      glRef.current = gl
      console.log("WebGL context created successfully")

      // Set up canvas with mobile-optimized sizing
      const updateCanvasSize = () => {
        const capabilities = detectDeviceCapabilities()
        // Use lower DPR on mobile for better performance
        const dpr = capabilities.isMobile
          ? Math.min(window.devicePixelRatio || 1, 1.5)
          : Math.min(window.devicePixelRatio || 1, 2)
        const rect = canvas.getBoundingClientRect()

        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`

        gl.viewport(0, 0, canvas.width, canvas.height)
        console.log(`Canvas resized: ${canvas.width}x${canvas.height} (DPR: ${dpr})`)
      }

      updateCanvasSize()
      window.addEventListener("resize", updateCanvasSize)

      // Detect device capabilities and set initial performance mode
      const capabilities = detectDeviceCapabilities()
      setPerformanceMode(capabilities.tier)
      console.log("Device capabilities:", capabilities)

      // Mobile-optimized vertex shader
      const vertexShaderSource = `
        precision mediump float;
        attribute vec2 a_position;
        varying vec2 v_uv;
        void main() {
          v_uv = a_position * 0.5 + 0.5;
          gl_Position = vec4(a_position, 0.0, 1.0);
        }
      `

      // Mobile-optimized fragment shader with reduced complexity
      const fragmentShaderSource = capabilities.isMobile
        ? `
        precision lowp float;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_intensity;
        varying vec2 v_uv;

        void main() {
          vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
          
          // Simple mobile-optimized pattern
          float time = u_time * 0.3;
          float d = length(uv);
          
          // Basic ripple effect
          float ripple = sin(d * 6.0 - time * 2.0) * 0.5 + 0.5;
          
          // Simple color gradient
          vec3 color = vec3(0.2 + ripple * 0.3, 0.4 + ripple * 0.2, 0.8 - ripple * 0.2);
          color *= u_intensity * 0.8;
          
          // Mouse interaction (simplified for mobile)
          vec2 mouseUV = u_mouse / u_resolution.xy;
          float mouseDist = distance(v_uv, mouseUV);
          float mouseEffect = smoothstep(0.4, 0.0, mouseDist);
          color += mouseEffect * 0.15;
          
          gl_FragColor = vec4(color, 0.08);
        }
      `
        : `
        precision mediump float;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_intensity;
        varying vec2 v_uv;

        void main() {
          vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
          vec2 uv0 = uv;
          vec3 finalColor = vec3(0.0);
          
          // Desktop version with more complex effects
          float time = u_time * 0.5;
          float d = length(uv);
          float angle = atan(uv.y, uv.x);
          
          // Create ripple effect
          float ripple = sin(d * 10.0 - time * 3.0) * 0.5 + 0.5;
          
          // Color based on position and time
          vec3 color1 = vec3(0.2, 0.4, 0.8);
          vec3 color2 = vec3(0.8, 0.2, 0.6);
          vec3 color3 = vec3(0.4, 0.8, 0.2);
          
          float mixer1 = sin(angle + time) * 0.5 + 0.5;
          float mixer2 = sin(d * 5.0 + time * 2.0) * 0.5 + 0.5;
          
          finalColor = mix(color1, color2, mixer1);
          finalColor = mix(finalColor, color3, mixer2);
          finalColor *= ripple * u_intensity;
          
          // Mouse interaction
          vec2 mouseUV = u_mouse / u_resolution.xy;
          float mouseDist = distance(v_uv, mouseUV);
          float mouseEffect = smoothstep(0.3, 0.0, mouseDist);
          finalColor += mouseEffect * 0.2;
          
          gl_FragColor = vec4(finalColor, 0.1);
        }
      `

      // Create and compile shaders with enhanced error handling
      const createShader = (type: number, source: string): WebGLShader | null => {
        const shader = gl.createShader(type)
        if (!shader) {
          console.error("Failed to create shader object")
          return null
        }

        gl.shaderSource(shader, source)
        gl.compileShader(shader)

        const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
        if (!compiled) {
          const error = gl.getShaderInfoLog(shader)
          const shaderType = type === gl.VERTEX_SHADER ? "vertex" : "fragment"
          console.error(`${shaderType} shader compilation failed:`, error)
          console.error(`${shaderType} shader source:`, source)
          gl.deleteShader(shader)
          return null
        }

        console.log(`${type === gl.VERTEX_SHADER ? "Vertex" : "Fragment"} shader compiled successfully`)
        return shader
      }

      const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
      const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)

      if (!vertexShader || !fragmentShader) {
        console.error("Failed to compile shaders")
        setIsWebGLSupported(false)
        return
      }

      // Create and link program
      const program = gl.createProgram()
      if (!program) {
        console.error("Failed to create shader program")
        setIsWebGLSupported(false)
        return
      }

      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)

      const linked = gl.getProgramParameter(program, gl.LINK_STATUS)
      if (!linked) {
        const error = gl.getProgramInfoLog(program)
        console.error("Shader program linking failed:", error)
        gl.deleteProgram(program)
        setIsWebGLSupported(false)
        return
      }

      console.log("Shader program linked successfully")

      // Use the program
      gl.useProgram(program) // Moved this line to ensure it's not conditionally called

      // Set up geometry (full-screen quad)
      const positions = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0])

      const positionBuffer = gl.createBuffer()
      if (!positionBuffer) {
        console.error("Failed to create position buffer")
        setIsWebGLSupported(false)
        return
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

      const positionLocation = gl.getAttribLocation(program, "a_position")
      if (positionLocation === -1) {
        console.error("Failed to get position attribute location")
        setIsWebGLSupported(false)
        return
      }

      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      // Get uniform locations
      const timeLocation = gl.getUniformLocation(program, "u_time")
      const resolutionLocation = gl.getUniformLocation(program, "u_resolution")
      const mouseLocation = gl.getUniformLocation(program, "u_mouse")
      const intensityLocation = gl.getUniformLocation(program, "u_intensity")

      console.log("Uniform locations:", { timeLocation, resolutionLocation, mouseLocation, intensityLocation })

      // Mouse/touch tracking with mobile support
      let mouseX = 0
      let mouseY = 0

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        mouseX = e.clientX - rect.left
        mouseY = rect.height - (e.clientY - rect.top)
      }

      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault()
        const rect = canvas.getBoundingClientRect()
        const touch = e.touches[0]
        if (touch) {
          mouseX = touch.clientX - rect.left
          mouseY = rect.height - (touch.clientY - rect.top)
        }
      }

      const handleTouchStart = (e: TouchEvent) => {
        const rect = canvas.getBoundingClientRect()
        const touch = e.touches[0]
        if (touch) {
          mouseX = touch.clientX - rect.left
          mouseY = rect.height - (touch.clientY - rect.top)
        }
      }

      // Add event listeners with passive options for better mobile performance
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
      canvas.addEventListener("touchstart", handleTouchStart, { passive: true })

      // Get preset settings with mobile optimization
      const getPresetSettings = (currentPreset: EffectPreset) => {
        const deviceCapabilities = detectDeviceCapabilities()

        if (currentPreset === "auto") {
          if (deviceCapabilities.isMobile) {
            currentPreset = "performance" // Always use performance mode on mobile
          } else {
            currentPreset =
              deviceCapabilities.tier === "high"
                ? "quality"
                : deviceCapabilities.tier === "medium"
                  ? "balanced"
                  : "performance"
          }
        }

        // Mobile gets reduced intensity
        const mobileMultiplier = deviceCapabilities.isMobile ? 0.7 : 1.0

        switch (currentPreset) {
          case "quality":
            return { intensity: 0.8 * mobileMultiplier }
          case "balanced":
            return { intensity: 0.6 * mobileMultiplier }
          case "performance":
            return { intensity: 0.4 * mobileMultiplier }
          default:
            return { intensity: 0.6 * mobileMultiplier }
        }
      }

      // Animation loop with mobile optimization
      const animate = (currentTime: number) => {
        if (!gl || !canvas) return

        // Performance tracking
        const deltaTime = currentTime - lastFrameTime.current
        const fps = 1000 / deltaTime

        fpsHistory.current.push(fps)
        frameTimeHistory.current.push(deltaTime)

        if (fpsHistory.current.length > 60) {
          fpsHistory.current.shift()
          frameTimeHistory.current.shift()
        }

        const avgFps = fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length
        const avgFrameTime = frameTimeHistory.current.reduce((a, b) => a + b, 0) / frameTimeHistory.current.length

        // Update metrics
        const memoryInfo = (performance as any).memory
        setMetrics({
          fps: Math.round(avgFps),
          frameTime: avgFrameTime,
          memoryUsage: memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024) : 0,
          gpuMemory: 0, // WebGL doesn't provide GPU memory info
          renderCalls: frameCount.current,
        })

        frameCount.current++
        lastFrameTime.current = currentTime

        // Render
        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)

        const settings = getPresetSettings(preset)

        // Set uniforms
        if (timeLocation) gl.uniform1f(timeLocation, currentTime * 0.001)
        if (resolutionLocation) gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
        if (mouseLocation) {
          const dpr = capabilities.isMobile
            ? Math.min(window.devicePixelRatio || 1, 1.5)
            : Math.min(window.devicePixelRatio || 1, 2)
          gl.uniform2f(mouseLocation, mouseX * dpr, mouseY * dpr)
        }
        if (intensityLocation) gl.uniform1f(intensityLocation, settings.intensity)

        // Draw
        gl.drawArrays(gl.TRIANGLES, 0, 6)

        animationFrameRef.current = requestAnimationFrame(animate)
      }

      // Start animation
      animationFrameRef.current = requestAnimationFrame(animate)
      setIsInitialized(true)
      console.log("WebGL animation started")

      // Send analytics for WebGL initialization
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "webgl_initialized", {
          device_tier: capabilities.tier,
          renderer: capabilities.renderer,
          vendor: capabilities.vendor,
          preset: preset,
          is_mobile: capabilities.isMobile,
          is_tablet: capabilities.isTablet,
          browser: compatibilityResults.browser,
          browser_version: compatibilityResults.version,
        })
      }

      return () => {
        console.log("Cleaning up WebGL resources")
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("touchmove", handleTouchMove)
        canvas.removeEventListener("touchstart", handleTouchStart)
        window.removeEventListener("resize", updateCanvasSize)
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        if (gl && program) {
          gl.deleteProgram(program)
        }
        if (gl && vertexShader) {
          gl.deleteShader(vertexShader)
        }
        if (gl && fragmentShader) {
          gl.deleteShader(fragmentShader)
        }
      }
    } catch (error) {
      console.error("WebGL initialization error:", error)
      setIsWebGLSupported(false)

      // Send error analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "webgl_error", {
          error_message: error instanceof Error ? error.message : "Unknown error",
          user_agent: navigator.userAgent,
        })
      }
    }
  }, [preset, detectDeviceCapabilities, testBrowserCompatibility])

  // Auto-run benchmark on initialization (for testing)
  useEffect(() => {
    if (isInitialized && !benchmarkResult && showDebug) {
      const timer = setTimeout(() => {
        runBenchmark()
      }, 2000) // Wait 2 seconds after initialization
      return () => clearTimeout(timer)
    }
  }, [isInitialized, benchmarkResult, showDebug, runBenchmark])

  // Debug info for overlay
  const debugInfo = {
    fps: metrics.fps,
    performanceMode,
    effectIntensity: getEffectIntensity(),
    colorRadius: 0,
    magnifyRadius: 0,
    browserInfo: getBrowserInfo(),
    gpuInfo: getGPUInfo(),
  }

  function getEffectIntensity() {
    const settings = getPresetSettings(preset)
    return settings.intensity
  }

  function getPresetSettings(currentPreset: EffectPreset) {
    const capabilities = detectDeviceCapabilities()

    if (currentPreset === "auto") {
      if (capabilities.isMobile) {
        currentPreset = "performance"
      } else {
        currentPreset =
          capabilities.tier === "high" ? "quality" : capabilities.tier === "medium" ? "balanced" : "performance"
      }
    }

    const mobileMultiplier = capabilities.isMobile ? 0.7 : 1.0

    switch (currentPreset) {
      case "quality":
        return { intensity: 0.8 * mobileMultiplier }
      case "balanced":
        return { intensity: 0.6 * mobileMultiplier }
      case "performance":
        return { intensity: 0.4 * mobileMultiplier }
      default:
        return { intensity: 0.6 * mobileMultiplier }
    }
  }

  function getBrowserInfo() {
    const userAgent = navigator.userAgent
    if (userAgent.includes("Chrome")) return "Chrome"
    if (userAgent.includes("Firefox")) return "Firefox"
    if (userAgent.includes("Safari")) return "Safari"
    if (userAgent.includes("Edge")) return "Edge"
    return "Unknown"
  }

  function getGPUInfo() {
    if (!glRef.current) return "Unknown"
    try {
      const debugInfo = glRef.current.getExtension("WEBGL_debug_renderer_info")
      return debugInfo ? String(glRef.current.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)) : "Unknown"
    } catch (error) {
      return "Unknown"
    }
  }

  if (!isWebGLSupported) {
    return <WebGLFallback />
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: "transparent" }}
        data-testid="webgl-canvas"
      />
      {showDebug && <PerformanceDebugOverlay debugInfo={debugInfo} />}
      {isBenchmarking && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
          <div className="text-white mb-2">Running Performance Benchmark...</div>
          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
          </div>
        </div>
      )}
      {benchmarkResult && showDebug && (
        <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-xs text-gray-300 min-w-[250px]">
          <div className="text-gray-100 font-semibold mb-2">Benchmark Results</div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Score:</span>
              <span className="text-green-400">{benchmarkResult.score}/100</span>
            </div>
            <div className="flex justify-between">
              <span>Avg FPS:</span>
              <span>{Math.round(benchmarkResult.averageFps)}</span>
            </div>
            <div className="flex justify-between">
              <span>Min FPS:</span>
              <span>{Math.round(benchmarkResult.minFps)}</span>
            </div>
            <div className="flex justify-between">
              <span>Recommended:</span>
              <span className="text-blue-400">{benchmarkResult.recommendation}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
