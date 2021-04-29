import React from "react";
import ReactDOM from "react-dom";


class Details extends React.Component {
    state = {
      showMessage1: false,
      showMessage2: false,
      showMessage3: false,
      showMessage4: false
    };
    onButtonClickHandler = () => {
      this.setState({ showMessage1: !this.state.showMessage1 });
    };
    onButtonClickHandler2 = () => {
      this.setState({ showMessage2: !this.state.showMessage2 });
    };
    onButtonClickHandler3 = () => {
      this.setState({ showMessage3: !this.state.showMessage3 });
    };
    onButtonClickHandler4 = () => {
      this.setState({ showMessage4: !this.state.showMessage4 });
    };
  
    render() {
      return (
        <div className="App">
          {this.state.showMessage1 && <p>Second Stage: Arizona Desert Crossing 
              (2nd. STAGE アリゾナ砂漠越え Sekondo Sutēji Arizona Sabaku Goe) is 
              the third volume of Steel Ball Run and the eighty-third volume of 
              the JoJo's Bizarre Adventure manga. It covers The Desert Born 
              Outlaws story arc.</p>}
          <button onClick={this.onButtonClickHandler}>Details</button>
          
          {this.state.showMessage2 && <p>Test 2</p>}
          <button onClick={this.onButtonClickHandler2}>Details</button>

          {this.state.showMessage3 && <p>TEst 3</p>}
          <button onClick={this.onButtonClickHandler3}>Details</button>

          {this.state.showMessage4 && <p>TEst 4</p>}
          <button onClick={this.onButtonClickHandler4}>Details</button>
        </div>
      );
    }
  }

export default Details;