import React from "react";
import ReactDOM from "react-dom";


class AnimeDetails extends React.Component {
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
        <div>
          {this.state.showMessage1 && <p>t1</p>}
          <button onClick={this.onButtonClickHandler}>Details</button>
          
          {this.state.showMessage2 && <p>t2</p>}
          <button onClick={this.onButtonClickHandler2}>Details</button>

          {this.state.showMessage3 && <p>t3</p>}
          <button onClick={this.onButtonClickHandler3}>Details</button>

          {this.state.showMessage4 && <p>t4.</p>}
          <button onClick={this.onButtonClickHandler4}>Details</button>
        </div>
      );
    }
  }

export default AnimeDetails;