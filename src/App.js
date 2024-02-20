import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QrCodeGenerator from "./qr-code-generator";

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
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}

      {/* Tree view component/menu UI component / recursive navagation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* Qr code generator */}
      <QrCodeGenerator/>
    </div>
  );
}

export default App;
