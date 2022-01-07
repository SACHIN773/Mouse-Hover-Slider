import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center"}}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
         
          <Item><img src='https://th.bing.com/th/id/R.1a2c5503f737f415d4d6d869ca1cd346?rik=xjGQ9BQv67ODdg&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f07%2fsamantha-hd-wallpapers-10.jpg&ehk=vjQaufjJFpbrNYbVonydrslRmTtn8xpdj7O4QsAX%2f2Q%3d&risl=&pid=ImgRaw&r=0'/></Item>
          <Item><img src="https://www.bing.com/th?id=OIP.ZsmgmwyDj10_-ZBM8vj3RQHaEo&w=150&h=96&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" /></Item>
          <Item><img src="https://th.bing.com/th/id/OIP.JsTQSj8riet0BGL9_awoIQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" /></Item>
          <Item><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/6134492789001.jpg" /></Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
         
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
