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
        <div>
          {this.state.showMessage1 && <p>Second Stage: Arizona Desert Crossing 
              (2nd. STAGE アリゾナ砂漠越え Sekondo Sutēji Arizona Sabaku Goe) is 
              the third volume of Steel Ball Run and the eighty-third volume of 
              the JoJo's Bizarre Adventure manga. It covers The Desert Born 
              Outlaws story arc.</p>}
          <button onClick={this.onButtonClickHandler}>Details</button>
          
          {this.state.showMessage2 && <p>In Taisho-era Japan, Kamado Tanjiro is a 
              kindhearted boy who makes a living selling charcoal. But his peaceful 
              life is shattered when a demon slaughters his entire family. His 
              little sister Nezuko is the only survivor, but she has been transformed 
              into a demon herself! Tanjiro sets out on a dangerous journey to find a 
              way to return his sister to normal and destroy the demon who ruined his life.
              Learning to slay demons won't be easy, and Tanjiro barely knows where to start. 
              The surprise appearance of another boy named Giyu, who seems to know what's 
              going on, might provide some answers...but only if Tanjiro can stop Giyu 
              from killing his sister first!</p>}
          <button onClick={this.onButtonClickHandler2}>Details</button>

          {this.state.showMessage3 && <p>Shoyo Hinata is out to prove that in volleyball 
              you don't need to be tall to fly! Ever since he saw the legendary player 
              known as “the Little Giant” compete at the national volleyball finals, 
              Shoyo Hinata has been aiming to be the best volleyball player ever! 
              Who says you need to be tall to play volleyball when you can jump 
              higher than anyone else? After graduating high school, Hinata books 
              it all the way to Brazil to learn how to play beach volleyball and 
              improve his control and strength. While there, his efforts earn him 
              the moniker “Ninja Shoyo,” and one day he’s approached by another player 
              named Heitor, who is desperate to win his next match and keep his sponsors. 
              Will Hinata’s skills be enough to help his new partner?</p>}
          <button onClick={this.onButtonClickHandler3}>Details</button>

          {this.state.showMessage4 && <p>Narumi Momose has had it rough: Every boyfriend 
              she's had dumped her once they found out she was an otaku, so she's gone 
              to great lengths to hide it. When a chance meeting at her new job with 
              childhood friend, fellow otaku, and now coworker Hirotaka Nifuji almost 
              gets her secret outed at work, she comes up with a plan to make sure he 
              never speaks up. But he comes up with a counter-proposal: Why doesn't she 
              just date him instead? In love, there are no save points.</p>}
          <button onClick={this.onButtonClickHandler4}>Details</button>
        </div>
      );
    }
  }

export default Details;