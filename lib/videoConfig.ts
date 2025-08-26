import videoConfig from "@/config/videos.config.json"

export interface VideoConfig {
  id: string
  src: string
  overlay: number
  duration?: number
}

export interface VideoRole {
  src: string
  overlay: number
  poster: string
  type: string
}

export function getVideo(role: string): VideoConfig {
  const roleConfig = videoConfig.roles[role as keyof typeof videoConfig.roles]

  if (!roleConfig) {
    console.warn(`Video role "${role}" not found, using defaults`)
    return {
      id: role,
      src: videoConfig.sequence[0]?.src || "",
      overlay: videoConfig.defaults.overlay,
      duration: 25,
    }
  }

  return {
    id: role,
    src: roleConfig.src,
    overlay: roleConfig.overlay || videoConfig.defaults.overlay,
    duration: 25,
  }
}

export function getVideoConfig(videoKey: string): VideoConfig | null {
  const roleConfig = videoConfig.roles[videoKey as keyof typeof videoConfig.roles]

  if (!roleConfig) {
    console.warn(`Video key "${videoKey}" not found`)
    return null
  }

  return {
    id: videoKey,
    src: roleConfig.src,
    overlay: roleConfig.overlay || videoConfig.defaults.overlay,
    duration: 25,
  }
}

export function getVideoSequence(): VideoConfig[] {
  return videoConfig.sequence || []
}

export function getVideoByRole(role: string): VideoRole | null {
  return videoConfig.roles[role as keyof typeof videoConfig.roles] || null
}

export function getAllRoles(): string[] {
  return Object.keys(videoConfig.roles)
}

export function getVideoDefaults() {
  return videoConfig.defaults
}
