import videoConfig from "@/config/videos.config.json"

export interface VideoConfig {
  src: string
  type: string
  overlay: number
  poster: string
}

export interface VideoSequenceItem {
  id: string
  src: string
  overlay: number
  duration: number
}

export function getVideo(role: string): VideoConfig {
  const roleConfig = videoConfig.roles[role as keyof typeof videoConfig.roles]

  if (!roleConfig) {
    console.warn(`Video role "${role}" not found, using defaults`)
    return {
      src: "",
      type: "video/mp4",
      overlay: videoConfig.defaults.overlay,
      poster: videoConfig.defaults.poster,
    }
  }

  return {
    src: roleConfig.src,
    type: roleConfig.type || "video/mp4",
    overlay: roleConfig.overlay || videoConfig.defaults.overlay,
    poster: roleConfig.poster || videoConfig.defaults.poster,
  }
}

export function getVideoConfig(videoKey: string): VideoConfig | null {
  const roleConfig = videoConfig.roles[videoKey as keyof typeof videoConfig.roles]

  if (!roleConfig) {
    console.warn(`Video key "${videoKey}" not found`)
    return null
  }

  return {
    src: roleConfig.src,
    type: roleConfig.type || "video/mp4",
    overlay: roleConfig.overlay || videoConfig.defaults.overlay,
    poster: roleConfig.poster || videoConfig.defaults.poster,
  }
}

export function getVideoSequence(): VideoSequenceItem[] {
  return [
    {
      id: "dark-illusion",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-illusion.webm-UoUddLZHa5k6IIrTq85aL0CcFqzkz1.mov",
      overlay: 40,
      duration: 10,
    },
    {
      id: "illusion-flow",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/illusion-flow.webm-8oQgKYegVgnqf89fO4NNBje7bbarKJ.mp4",
      overlay: 35,
      duration: 8,
    },
    {
      id: "metallic-stripes",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metallic-stripes.webm-Api5SSbAvoXIz340N879rXbmthpJbv.mp4",
      overlay: 45,
      duration: 12,
    },
    {
      id: "geometric-bg",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/geometric-bg.webm-LZw9KZZ9hRVwLeY4ujRPeirZ53vBZx.mp4",
      overlay: 40,
      duration: 15,
    },
  ]
}

export function getAllRoles(): string[] {
  return Object.keys(videoConfig.roles)
}

export function getDefaultConfig() {
  return videoConfig.defaults
}
