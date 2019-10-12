import React, { Component }  from 'react';
import './header-style.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Fade from 'react-reveal/Fade';

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'visible',
            isDeployed: true,
        }
      }
    
    listenScrollEvent = e => {
        if (window.scrollY > 80) {
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
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        const { visibility, isDeployed } = this.state;
        return(
            <header className={isDeployed ? "header-wrapper deployed" : "header-wrapper collapsed"}>
                <nav className="navbar">
                    <ul className="menu-main left-menu" style={{marginLeft: 15 + '%'}}>
                        <li className="left-item"><a href="">Лента</a></li>
                        <li className="left-item"><a href="">Генератор</a></li>
                        <li className="left-item"><a href="">Сотрудничество</a></li>
                    </ul>   

                    <a className="logo-link" href="#">
                        <img className="logo-img" src="/images/logo-min.jpg"/>
                    </a>

                    <ul className="menu-main right-menu">
                        <li className="left-item"><a href="">Work</a></li>
                        <li className="left-item"><a href="">About</a></li>
                        <li className="left-item"><a href="">Story</a></li>
                    </ul>
                </nav>

                <Fade top appear={false} when={isDeployed} duration={500}>
                    <div className="geo" style={{visibility: visibility}}>

                    </div>
                </Fade>
            </header>
        );
    }
}
export default Header;