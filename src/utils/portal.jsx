import { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  el = document.createElement("div");

  componentWillMount() {
    this.scrollYBefore = window.scrollY;
    this.scrollXBefore = window.scrollX;
  }

  componentDidMount() {
    document.body.appendChild(this.el);
    document.body.classList.add("is-modal");
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
    document.body.classList.remove("is-modal");
    window.scrollTo(this.scrollXBefore, this.scrollYBefore);
  }

  render() {
    const { children } = this.props;
    this.el.className = "background-wrapper";
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
