import { useState } from 'react'
import { useProjects, useCategories } from '../hooks/useProjects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | undefined>(undefined)
  const { projects, loading } = useProjects(activeSlug)
  const { categories } = useCategories()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <p className={styles.eyebrow}>Trabajo</p>
          <h2 className={styles.title}>Proyectos</h2>
        </div>

        <div className={styles.filters}>
          <button
            className={`${styles.filter} ${!activeSlug ? styles.active : ''}`}
            onClick={() => setActiveSlug(undefined)}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.filter} ${activeSlug === cat.slug ? styles.active : ''}`}
              onClick={() => setActiveSlug(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className={styles.loading}>Cargando...</div>
        ) : (
          <div className={styles.grid}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}