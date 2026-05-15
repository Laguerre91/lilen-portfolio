export type Project = {
    id: string
    title: string
    description: string | null
    category: string | null
    video_url: string | null
    thumbnail_url: string | null
    tags: string[] 
    published: boolean
    order_index: number
    created_at: string
    updated_at: string
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  message: string
  read: boolean
  created_at: string
}

export type ContactFormData = Pick<ContactMessage, 'name' | 'email' | 'message'>