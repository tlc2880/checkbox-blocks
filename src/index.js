import React from "react";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring/renderprops";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";

import "./styles.css";

class App extends React.Component {
  state = {
    showComponent3: false,    
    showComponent4: false,
    varBG: "green"
  };

toggle1 = e => {
  this.setState({ varBG : "green" });  
  this.setState({ showComponent3: !this.state.showComponent3});
  this.setState({ showComponent4: !this.state.showComponent4});  
}

toggle2 = e => {
  this.setState({ varBG : "yellow" });
  this.setState({ showComponent4: !this.state.showComponent4 });
  this.setState({ showComponent3: !this.state.showComponent3});
}

render() {
  return (
    <div className="App">
      <Component1 toggle2={this.toggle2}/>  
      <Component2 toggle1={this.toggle1}/>
      <Transition
        native
        items={this.state.showComponent3}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
            <animated.div style={props}>
              <Component3 /> 
              <Component4 />
            </animated.div>
          ))
        }
      </Transition>
    </div>
  );
}
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
