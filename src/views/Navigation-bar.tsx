import styles from "../scss/Home.module.scss"
import {Link, useNavigate} from "react-router-dom";

function NavigationBar() {
 const navigate = useNavigate()

    function nextPage(){
        navigate(+1)
    }

    function previousPage(){
        navigate(-1)
    }

    return (
        <div className={styles.navigationBar}>
            <nav className="navbar">

                    {/*<button className="nav-item" onClick={ ()=> previousPage()}>*/}
                    {/*    <img src="/assets/arrow-left.png" alt="arrow-left"/>*/}
                    {/*</button>*/}
                <p></p>

                    <Link className="nav-link " to={"/"} > Accueil </Link>

                    {/*<button  className="nav-item" onClick={()=> nextPage()}>*/}
                    {/*    <img src="/assets/arrow-right.png" alt="arrow-left"/>*/}
                    {/*</button>*/}
<p></p>

            </nav>


        </div>
    )
}

export default NavigationBar