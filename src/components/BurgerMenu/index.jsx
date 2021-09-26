import React from "react";
import  './index.css';


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
    
    const showMenuClass = this.state.inShown === true ? "menu-shown" : "menu-hidden"

    return (
      <div>
        <div 
        onClick={() => this.switchState()}
        className="burger">
        
        </div>
        <div className={showMenuClass}>Text</div>


      </div>
    );
  }
}

export default BurgerMenu;
