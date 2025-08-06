import styles from '../styles/main.module.css'

export default function Main() {
    return(
        <>
        <div className={styles.gridcontainer}>
            <div className={styles.buttoncontainer}>
                <button className={styles.viewbutton}>View</button>
            </div>

            <div className={styles.countgrid}>
            
            <div className={styles.griditem}><p>Placeholder</p></div>
            <div className={styles.griditem}><p>Placeholder</p></div>
            <div className={styles.griditem}><p>Placeholder</p></div>

            <div className={styles.griditem}><p>Placeholder</p></div>
            <div className={styles.griditem}><p>Placeholder</p></div>
            <div className={styles.griditem}><p>Placeholder</p></div>

            <div className={styles.griditem}><p>Placeholder</p></div>
            <div className={styles.griditem}><p>Placeholder</p></div>
            <div className={styles.griditem}><p>Placeholder</p></div>

            <div className={styles.griditem}><p>Placeholder</p></div>
            <div className={styles.griditem}><p>Placeholder</p></div>
            <div className={styles.griditem}><p>Placeholder</p></div>


            </div>
            

        </div>
        </>
    )
}