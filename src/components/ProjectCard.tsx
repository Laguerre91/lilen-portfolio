import type { Project } from '../types'
import { getYoutubeThumbnail, getYoutubeId } from '../lib/youtube'
import styles from './ProjectCard.module.css'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const thumbnail = project.thumbnail_url
    ?? (project.video_url ? getYoutubeThumbnail(project.video_url) : null)

  const youtubeId = project.video_url ? getYoutubeId(project.video_url) : null
  const watchUrl = youtubeId
    ? `https://www.youtube.com/watch?v=${youtubeId}`
    : project.video_url ?? '#'

  return (
    <article className={styles.card}>
      <div className={styles.thumbnail}>
        {thumbnail ? (
          <img src={thumbnail} alt={project.title} />
        ) : (
          <div className={styles.placeholder} />
        )}
        <div className={styles.overlay}>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.playBtn}
          >
            Ver proyecto →
          </a>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.meta}>
          {project.category && (
            <span className={styles.category}>{project.category.name}</span>
          )}
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}
      </div>
    </article>
  )
}