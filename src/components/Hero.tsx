import styles from './Hero.module.css'

const YOUTUBE_ID = 'Ps_jLrPQS7A' // reemplazá esto

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.videoWrapper}>
        <iframe
          className={styles.video}
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        <div className={styles.videoOverlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Videógrafa</p>
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

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.line} />
      </div>

    </section>
  )
}