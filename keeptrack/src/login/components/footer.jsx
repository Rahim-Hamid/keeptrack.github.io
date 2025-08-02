import logopic from '../img/logo.png'
import styles from '../styles/login.module.css'

function Footer() {
    return(
        <>
        <footer>
            <div className={styles.foot}>

                <div className={styles.footalign}>
                    <img className={styles.footlogo} src={logopic} alt='company logo, four arrows pointing outwards with eight smaller lines in the square formed by the arrows'/>
                    <h3>© KeepTrack</h3>
                </div>

                <div className={styles.footalign}>
                    <h3 className={styles.foottop}>About</h3>
                    <h3>Privacy Policy</h3>
                </div>

                <div className={styles.footalign}>
                    <h3 className={styles.foottop}>Contact</h3>
                    <h3>placeholder@placeholder.org</h3>
                </div>
            </div>

        </footer>
        </>
    )
}

export default Footer