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
          {this.state.showMessage1 && <p>Izuku has dreamt of being a hero all his 
              life—a lofty goal for anyone, but especially challenging for a kid 
              with no superpowers. That’s right, in a world where eighty percent 
              of the population has some kind of super-powered “quirk,” Izuku was 
              unlucky enough to be born completely normal. But that’s not enough 
              to stop him from enrolling in one of the world’s most prestigious 
              hero academies.</p>}
          <button onClick={this.onButtonClickHandler}>Details</button>
          
          {this.state.showMessage2 && <p>Tohru Honda thought her life was headed for 
              misfortune when a family tragedy left her living in a tent. When her 
              small home is discovered by the mysterious Soma clan, she suddenly finds 
              herself living with Yuki, Kyo, and Shigure Soma. But she quickly learns 
              their family has a bizarre secret of their own: when hugged by the opposite 
              sex, they turn into the animals of the Zodiac!</p>}
          <button onClick={this.onButtonClickHandler2}>Details</button>

          {this.state.showMessage3 && <p>A youth begins a quest to fight demons and save 
              his sister after finding his family slaughtered and his sister turned into a demon.</p>}
          <button onClick={this.onButtonClickHandler3}>Details</button>

          {this.state.showMessage4 && <p>Set in 2011, Florida, Jolyne Cujoh, daughter of Jotaro, 
              is wrongfully accused of a crime she didn't commit and sent to a maximum security 
              prison. While imprisoned, she struggles within a longstanding plot agreed between 
              dead villain DIO and ideologue Enrico Pucci.</p>}
          <button onClick={this.onButtonClickHandler4}>Details</button>
        </div>
      );
    }
  }

export default AnimeDetails;