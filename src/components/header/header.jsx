import React, { Component, Fragment }  from 'react';
import './header-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'visible',
            isDeployed: true,
            isHover: false
        }
      }
    
    listenScrollEvent = e => {
        if (window.scrollY > 40) {
            this.setState({
                visibility: 'hidden',
                isDeployed: false
             })
        } else {
            this.setState({
                visibility: 'visible',
                isDeployed: true
            })
        }
    }

    listenHoverIcon = () => {
        this.setState(( { isHover }) => ({
            isHover: !isHover
        }));
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        const { visibility, isDeployed, isHover } = this.state;
        return(
            <Fragment>
                <header className="header-wrapper">
                    <nav className="navbar">
                        <Link to='/' className="logo-link">
                            <img className="logo-img" src="/images/logo-min.jpg"/>
                        </Link>

                        <ul className="menu-main">
                            <li className="left-item"><NavLink exact to='/'>Генератор</NavLink></li>
                            <li className="left-item"><NavLink to='/kok'>Каталог</NavLink></li>
                            <li className="left-item"><NavLink to='/feed'>Лента</NavLink></li>
                            <li className="left-item"><NavLink to='/collaboration'>Сотрудничество</NavLink></li>
                            <li className="left-item"><Link to='/'>Войти</Link></li>
                        </ul>   
                    </nav>
                </header>
        
                <Fade top appear={false} when={isDeployed} duration={200}>
                    <div className="geo-bar"  style={{visibility: visibility}}>
                        <div className="city-select cursor-pointer" 
                            onMouseOver={this.listenHoverIcon}
                            onMouseOut={this.listenHoverIcon}>

                            <FontAwesomeIcon icon={isHover ? faMapMarkerAlt : faMapMarker} className="location-icon"/>
                            <span className="city-name">Тюмень</span>
                        </div>
                    </div>
                </Fade>
            </Fragment>
        );
    }
}
export default Header;