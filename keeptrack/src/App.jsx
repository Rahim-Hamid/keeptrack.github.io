import { useState } from "react";
import Sidebar from '../src/dashboard/components/Sidebar'
import Main from '../src/dashboard/components/Main'
import styles from '../src/dashboard/styles/dashboard.module.css'

export default function App() {

    return (
        <>
        <div className={styles.main}>
        <Sidebar/>
        <Main/>
        
        </div>
        </>
    )

        
    
}