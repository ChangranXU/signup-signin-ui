import "./NavigationBar.css";
import title_icon from '../../image/logo_trans.png';
import IconUser from '../../image/user.png';

const NavigationBar = () => {
    return(
        <nav>
            <a href="/"><img src={title_icon} width = "255px" alt="logo"></img></a>
            <div>
                <span>
                    Welcome, <span> Guest </span>
                </span>
                <div className="iconuser"> <img src={IconUser} width="35px" alt="user"/></div>
            </div>
        </nav>
    )
}

export default NavigationBar;