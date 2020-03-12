// import React from "react";
// import { Spring } from "react-spring/renderprops";

// export default function Component1() {
//   return (
//     <Spring
//       from={{ opacity: 0, marginTop: -500 }}
//       to={{ opacity: 1, marginTop: 0 }}
//     >
//       {props => (
//         <div style={props}>
//           <div style={c1Style}>
//             <h1>Block 1</h1>
//             {/* <input type="checkbox" onChange={this.props.toggle2} />  */}
//           </div>
//         </div>
//       )}
//     </Spring>
//   );
// }

// const c1Style = {
//   background: "gray",
//   color: "white",
//   padding: "1.5rem"
// };

import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Component1 extends Component {

  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c1Style}>
              <h1>Checkbox 1</h1>
              <input type="checkbox" onChange={this.props.toggle2} />
            </div>
          </div>
        )}       
      </Spring>
    );
  }
}

const c1Style = {
  background: "gray",
  color: "white",
  padding: "1.5rem"
};

export default Component1;