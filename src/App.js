import logo from './logo.svg';
import './App.css';
import Headers from './component/Headers';
import Slider from './component/Slider';
import Dtail from './component/Dtail';
import Products from './component/Products';
import Find from './component/Find';
import Sign from './component/Sign';
import Info from './component/Info';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <>
  <div className="hero_area">
    {/* header section strats */}
    <Headers></Headers>
    {/* end header section */}
    {/* slider section */}
   <Slider></Slider>
    {/* end slider section */}
  </div>
  {/* detail section */}
  <Dtail></Dtail>
  {/* end detail section */}
  {/* products section */}
  <Products></Products>
  {/* end products section */}
  {/* find section */}
  <section className="find_section layout_padding-bottom">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-8 offset-md-2">
          <div className="find_container">
            <div className="row">
              <div className="col-sm-6">
                <div className="find_container-img">
                  <img src="images/find-img.png" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <h3>
                  Find Everything <br />
                  From A to Z
                </h3>
                <p>Shop Back to school</p>
              </div>
            </div>
          </div>
          <div className="shop_container">
            <div className="row">
              <div className="col-sm-6">
                <p>Shoes</p>
                <h3>Shop by catagories</h3>
                <div>
                  <a href=""> View More </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="shoe_img-box">
                  <img src="images/shoes.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="find_img-box">
            <img src="images/find-hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end find section */}
  {/* client section */}
 <Find></Find>
  {/* end client section */}
  {/* sign section */}
  <Sign></Sign>
  {/* end sign section */}
  {/* info section */}
  <Info></Info>
  {/* end info section */}
  {/* footer section */}
<Footer></Footer>
  {/* footer section */}
</>

    </div>
  );
}

export default App;
