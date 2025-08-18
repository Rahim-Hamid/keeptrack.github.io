import styles from '../styles/sidebar.module.css'
import logo from '../img/logo.png'
import createicon from '../img/create.png'
import foldericon from '../img/folder.png'
import viewicon from '../img/view.png'
import staricon from '../img/staricon.png'
import markericon from '../img/markericon.png'
import starfoldicon from '../img/starfoldicon.png'
import abouticon from '../img/abouticon.png'
import settingsicon from '../img/settingsicon.png'

export default function Sidebar() {
    return (
        <>

        <div className={styles.sidecontainer}>
            

            <img className={styles.logoimg} src={logo} alt='company logo'/>

            <div className={styles.txtcontainer}>

                <div className={styles.topcontainer}>

                    <div className={styles.imgtxt}>
                        <img className={styles.createicon} src={createicon} alt='plus icon to create new countdowns'/>
                        <h4>Create New Countdown</h4>
                    </div>


                    <div className={styles.imgtxt}>
                        <img className={styles.viewicon} src={viewicon} alt = 'eye icon to view saved countdowns'/>
                        <h4>View Saved Countdowns</h4>
                    </div>

                    <div className={styles.imgtxt}>
                        <img className={styles.foldericon} src={foldericon} alt='folder icon to see saved folders'/>
                        <h4>Browse Saved Folders</h4>
                    </div>

                </div>

                <div className={styles.middlecontainer}>
                    <div className={styles.imgtxt}>
                        <img className={styles.staricon} src={staricon} alt ='star icon to view starred countdowns'/>
                        <h4>View Starred</h4>
                        </div>

                            <div className={styles.addcontainer}>
                                <div className={styles.samplecontainer}>
                                    <div className={styles.sampleimg}>
                                        <img className={styles.markericon} src={markericon}/>
                                        <h4>Egg Expiry</h4>  
                                    </div>
                                    <p>4 Days, 10 Hours, 30 Minutes</p>
                                </div>

                                <div className={styles.samplecontainer}>
                                <div className={styles.sampleimg}>
                                    <img className={styles.markericon} src={markericon}/>
                                    <h4>Birthday Party</h4>
                                    
                                </div>
                                <p>10 Days, 7 Hours, 02 Minutes</p>
                                </div>

                                <h5>View More...</h5>

                            </div>
                    

                    <div className={styles.imgtxt}>
                        <img className={styles.starfoldicon} src={starfoldicon} alt='star folder icon to view starred folders'/>
                        <h4>Starred Folders</h4>
                    </div>

                            <div className={styles.folderdiv}>

                                <div className={styles.foldertxt}>
                                <img src={foldericon} alt='folder icon to see saved folders'/>
                                <h4>School</h4>
                                </div>

                                <div className={styles.foldertxt}>
                                <img src={foldericon} alt='folder icon to see saved folders'/>
                                <h4>Applications</h4>
                                </div>

                                <div className={styles.foldertxt}>
                                <img src={foldericon} alt='folder icon to see saved folders'/>
                                <h4>Social</h4>
                                </div>


                            </div>

                    
                </div>

                <div className={styles.bottomcontainer}>

                    <div className={styles.sptxt}>
                    <img className={styles.abouticon} src={abouticon} alt='About Icon'/>
                    <h4>About</h4>
                    </div>

                    <div className={styles.sptxt}>
                    <img className={styles.settingsicon} src={settingsicon} alt='Settings Icon'/>
                    <h4>Settings</h4>
                    </div>

                </div>

            
            </div>
            </div>
            </>
        
    )
}