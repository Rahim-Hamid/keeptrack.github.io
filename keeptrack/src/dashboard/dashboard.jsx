import Sidebar from './components/Sidebar'
import Main from './components/Main'
import styles from './styles/dashboard.module.css'


export default function Dashboard() {
    return (
        <>
        <div className={styles.main}>
        <Sidebar />
        <Main />
        </div>
        </>
    )
}