import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import './header-style.scss';

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'visible',
            isDeployed: true,
            isHover: false
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
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

    render() {
        const { visibility, isDeployed, isHover } = this.state;
        const { login } = this.props;
        
        return(
            <>
                <header className="header-wrapper">
                    <nav className="navbar">
                        <Link to='/' className="logo-link">
                            <img src="/images/logo-min.jpg" alt="logo"/>
                        </Link>

                        <ul className="menu-main">
                            <li><NavLink exact to='/'>Генератор</NavLink></li>
                            <li><NavLink to='/places'>Места</NavLink></li>
                            <li><NavLink to='/feed'>Лента</NavLink></li>
                            <li><NavLink to='/collaboration'>Сотрудничество</NavLink></li>
                            <li>
                                {
                                    login.isAuth ? 
                                        <NavLink to='/user'>Тимур</NavLink> 
                                        :
                                        <Link to='?login=true'>Войти</Link>
                                }
                            </li>
                        </ul>   
                    </nav>
                </header>
        
                <Fade top appear={false} when={isDeployed} duration={200}>
                    <div className="geo-bar"  style={{visibility: visibility}}>
                        <div className="city-select" 
                            onMouseOver={this.listenHoverIcon}
                            onMouseOut={this.listenHoverIcon}>

                            <FontAwesomeIcon icon={isHover ? faMapMarkerAlt : faMapMarker} className="location-icon"/>
                            <span className="city-name">Тюмень</span>
                        </div>
                    </div>
                </Fade>
            </>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login
});

export default connect(mapStateToProps)(Header);