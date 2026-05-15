import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Project, Category } from '../types'

export function useProjects(categorySlug?: string) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true)

      let query = supabase
        .from('projects')
        .select(`
          *,
          category:categories(*)
        `)
        .eq('published', true)
        .order('order_index', { ascending: true })

      if (categorySlug) {
        query = query.eq('categories.slug', categorySlug)
      }

      const { data, error } = await query

      if (error) {
        setError(error.message)
      } else {
        setProjects(data as Project[])
      }

      setLoading(false)
    }

    fetchProjects()
  }, [categorySlug])

  return { projects, loading, error }
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await supabase
        .from('categories')
        .select('*')
        .order('order_index', { ascending: true })

      if (data) setCategories(data)
      setLoading(false)
    }

    fetchCategories()
  }, [])

  return { categories, loading }
}