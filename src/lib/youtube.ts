export function getYoutubeId(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

export function getYoutubeThumbnail(url: string): string | null {
  const id = getYoutubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null
}

export function getYoutubeEmbed(url: string): string | null {
  const id = getYoutubeId(url)
  return id ? `https://www.youtube.com/embed/${id}` : null
}