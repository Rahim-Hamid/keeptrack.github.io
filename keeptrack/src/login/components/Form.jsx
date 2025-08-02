import logoIcon from '../img/logo.png'

import styles from '../styles/login.module.css'

function Form() {
    return (
        <>
        
        <main className={styles.formwrap}>

        <div className={styles.formcontainer}>

            <div>
                <img src={logoIcon} alt='company logo, four arrows pointing outwards with eight smaller lines in the square formed by the arrows'/>
                <h1>KeepTrack</h1>
            </div>

            <h2>Sign In</h2>

            <form>

                <input type="text" id="fname" name="fname"></input>
                <input type="text" id="fname" name="fname"></input>

            </form>

            <h3>Don't have an account? <span>Sign Up!</span></h3>
            <h4>Sign in as guest</h4>

        </div>
        </main>

        </>
    )
}

export default Form