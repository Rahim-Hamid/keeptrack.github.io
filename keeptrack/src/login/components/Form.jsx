import logoIcon from '../img/logo.png'

import styles from '../styles/login.module.css'

function Form() {
    return (
        <>

        <main className={styles.formwrap}>

            <div className={styles.formcontainer}>

                <div className={styles.toptxt}>
                    <img className={styles.formlogo} src={logoIcon} alt='company logo, four arrows pointing outwards with eight smaller lines in the square formed by the arrows'/>
                    <h1>KeepTrack</h1>
                </div>

                <h2 className={styles.signtxt}>Sign In</h2>

                <form className={styles.inputform}>

                    <input className={styles.inputfield} placeholder="Username or email" type="text"></input>
                    <input className={styles.inputfield}  placeholder="Password" type="text"></input>

                </form>

                <h3 className={styles.signuptxt}>Don't have an account? <span class={styles.signlink}>Sign Up!</span></h3>
                <h4 className={styles.guesttxt}>Sign in as guest</h4>

            </div>

        </main>

        </>
    )
}

export default Form