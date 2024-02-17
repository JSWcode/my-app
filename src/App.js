import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* star rating component
      <StarRating noOfStars={10} /> */}

      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"2"}
        page={"50"}
      />
    </div>
  );
}

export default App;
