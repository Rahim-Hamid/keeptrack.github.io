import logopic from '../img/logo.png'

function Footer() {
    return(
        <>
        <footer>
            <div>
                <img src={logopic} alt='company logo, four arrows pointing outwards with eight smaller lines in the square formed by the arrows'/>
                <h3>About</h3>
                <h3>Contact</h3>
            </div>

            <div>
                <h3>© KeepTrack</h3>
                <h3>Privacy Policy</h3>
                <h3>placeholder@placeholder.org</h3>
            </div>

        </footer>
        </>
    )
}

export default Footer