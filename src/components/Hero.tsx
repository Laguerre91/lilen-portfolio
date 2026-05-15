import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const YOUTUBE_ID = 'Ps_jLrPQS7A'

export default function Hero() {
  const videoSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!videoSectionRef.current) return
      const scrollY = window.scrollY
      videoSectionRef.current.style.transform = `translateY(-${scrollY}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.hero}>

      {/* Texto fijo detrás */}
      <div className={styles.textBlock}>
        <p className={styles.eyebrow}>Realizadora Audiovisual</p>
        <h1 className={styles.title}>
          Lilen<br />
          <em>Barberis</em>
        </h1>
        <p className={styles.subtitle}>
          Publicidades, clips musicales y contenido de marca
          que conecta con las personas.
        </p>
        <a href="#projects" className={styles.cta}>
          Ver proyectos
        </a>
      </div>

      {/* Video que sube y tapa el texto al hacer scroll */}
      <div className={styles.videoSection} ref={videoSectionRef}>
        <iframe
          className={styles.video}
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.line} />
      </div>

    </section>
  )
}