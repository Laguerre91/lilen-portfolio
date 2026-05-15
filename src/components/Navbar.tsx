import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar(){
    return (
        <nav className={styles.nav}>
            <Link to='/' className={styles.logo}>
                Lilen Barberis
            </Link>
            <ul className={styles.links}>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    )
}