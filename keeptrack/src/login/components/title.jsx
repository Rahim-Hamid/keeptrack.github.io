import styles from '../styles/login.module.css'

function Title() {
    return (
        <>
        <header className={styles.header}>
            
            <div className={styles.titlecont}>
                <h1 className={styles.titletxt}>Keep Aware</h1>
                <h1 className={styles.titletxt}>Keep Organized</h1>
            </div>
        </header>
        </>
    )
}

export default Title