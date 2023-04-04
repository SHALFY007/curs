import './Main.css'
import Weather from '../Weather/Weather'
import Navigation from '../Navigation/Navigation'

function Main() {

    return (
        <main className="main-part">
            <div className="main-container">
                <Weather />
                <Navigation />
                <div className="main-decoration">
                    <img className='main-decoration-img' src="./img/main-screen.gif" alt="" />
                </div>
            </div>
        </main>
    )
}

export default Main