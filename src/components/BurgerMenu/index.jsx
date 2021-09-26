import React from "react";
import "./index.css";

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inShown: false,
    };
  }

  switchState = () => {
    this.setState((prevState) => {
      return { inShown: !prevState.inShown };
    });
  };

  render() {
    const showMenuClass =
      this.state.inShown === true ? "menu-shown" : "menu-hidden";

    return (
      <div>
        <nav className="nav"> 
          <div onClick={() => this.switchState()}
        className="BurgerMenu_container" >
            <i></i>
            <i></i>
            <i></i>
          </div>
       
         
        </nav>
        <div className={showMenuClass}>Text</div>
      </div>
    );
  }
}

export default BurgerMenu;
