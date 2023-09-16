import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Review_post from './Pages/Review_post.js';
import Review_view from './Pages/Review_view.js';
import ListTourist_dest from './Pages/ListTourist_dest.js';
import City from './Pages/City.js';
import Restaurant from './Pages/Restaurant.js';
import Desert from './Pages/Desert.js';
import './Stylesheets/index.css';
import { createBrowserHistory } from 'history'
import { withRouter } from 'react-router-dom'
import {browserHistory, IndexRoute} from 'react-router';
import rajasthan from './Images/Raj.jpg';
import thali from './Images/thali.jpg';
import places from './Images/places.jpg';
import jaipur from './Images/jaipur.jpg';
import desert from './Images/desert.jpg';
import review1 from './Images/review1.jpg'
import review2 from './Images/review2.jpg';
import 'semantic-ui-css/semantic.min.css';



     
function Index() {
  return (
    <>
	<div class="container">
      
	  <img src={rajasthan} alt="rajasthan_img" />
	  <button class="btn0">Experience the best of Rajasthan with Rajasthan Tourism.</button>
      </div>
	  
	  <h1>Discover</h1>
	  <div class="myGallery">
	  
	  <img class="img1"src={places}/>
	  <a href="http://localhost:3000/ListTourist_dest/">
	  <button class="btn1" >Rajasthan is known for its historical hills, forts and palaces. View top tourist destinations in Rajasthan <span>&#10148;</span></button>
	       </a>
		   
		<a href="http://localhost:3000/City/">
	  <button class="btn2">From the pink city of Jaipur to the golden city of Jaisalmer. View best cities in Rajathan <span>&#10148;</span></button>
	  </a>
	  <img class="img2"src={jaipur}/>
	  
	  <img class="img1"src={thali}/>
	  <a href="http://localhost:3000/Restaurant/">
	  <button class="btn1">A traditional Rajasthani thali depicts a brilliant play of gourmet preparations on a plate of epic proportions. View best restaurants in Rajasthan <span>&#10148;</span></button>
	  </a>
	  
	  <a href="http://localhost:3000/Desert/">
	  <button class="btn2" >With most of the Great Thar Desert in Rajasthan, enjoy the magnificence and glory of the deserts in Rajasthan. View deserts in Rajasthan <span>&#10148;</span></button>
	  </a>
	  <img class="img2"src={desert}/>
	  
	  </div>
	  <br/>
	  <br/>
	  <footer>
	  
  <p class="p1">Rajasthan Tourism</p>
  
  <p class="p2">Contact:www.rajasthan-tourism.com</p>
 
</footer>
    </>
  );
}

function Review(){
	return (
    <>
	  <br/>
	  <br/>
	  <div class="myGallery">
	  
	  <img class="img1"src={review1}/>
	  <a href="http://localhost:3000/Review/Review_view/" >
	  <button class="btn1" > View all reviews<span>&#10148;</span></button>
	       </a>
		   
		<a href="http://localhost:3000/Review/Review_post/">
	  <button class="btn2">Let others know what you feel! Post a review<span>&#10148;</span></button>
	  </a>
	  <img class="img2"src={review2}/>
	  
	  
	  
	  </div>
	  <br/>
	  <br/>
	  
    </>
  );
  
}

function Blogs() {
  return (
    <div class="blogs">
      <br/>
	  <br/>
        <button class="btn">Click on image to view</button>
		<br/>
		<br/>
          <a href="https://blog.untravel.com/jaipur/"target="_blank">
                  <img src ='https://blog.untravel.com/wp-content/uploads/2017/04/Main-33.jpg'width = '360' /></a> 
          <a href="https://www.placesinpixel.com/udaipur-travel-blog/"target="_blank">
                   <img src = 'https://www.placesinpixel.com/wp-content/uploads/2020/08/udaipur-7.jpg.webp'width = '380'/></a>
          <a href="https://www.ditchthemap.com/travel-blog/2016/5/17/3-days-in-jodhpur-india"target="_blank">
                   <img src = 'https://images.squarespace-cdn.com/content/v1/54930d4ae4b018401d7b66f4/1463670223679-G8TFEI1WNIUVJWY6KN1D/ke17ZwdGBToddI8pDm48kL4WrIntsHuCODFzGytxs8sUqsxRUqqbr1mOJYKfIPR7bPjVvospn8apiEHRoKkKBknWHhZyuVpUiz0uGBREglhCRW4BPu10St3TBAUQYVKcDFhsUqNievQZtlsURZiXM_bnLpjqFUOt58on1gqsAjvlKpjN2t246kwHNK7Vzz4p/image-asset.jpeg?format=500w'width = '350'align = 'right' /></a><p></p>
          <a href="https://traveltriangle.com/blog/hill-stations-in-rajasthan/"target="_blank">
                   <img src = 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Rajasthan-cover_19th-Dec.jpg' width = '350'/></a>
          <a href="https://traveltriangle.com/blog/shopping-in-bikaner/"target="_blank">
                   <img src = 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Cover-Image-of-shopping-in-Bikaner.jpg' width = '370'/></a>
          <a href="https://www.makemytrip.com/blog/rajasthan-quick-travel-guide"target="_blank">
                   <img src = 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/travel-to-rajasthan-amber-fort.jpg' width = '350'align = 'right'/></a><p></p>
          <a href="http://www.padhaaro.com/blog/rustic-rajasthan/"target="_blank">
                   <img src = 'http://www.padhaaro.com/blog/wp-content/uploads/2013/11/Mehrangarh-Fort-in-Jodhpur.jpg' width = '340'/></a>
          <a href="https://www.rajasthanblog.org/bhangarh-fort-story/"target="_blank">
                   <img src = 'https://www.rajasthanblog.org/wp-content/uploads/2020/09/bhangarh-palace.png' width = '380'/></a>
          <a href="https://blog.savaari.com/explore-golden-sands-jaisalmer-2019/"target="_blank">
                   <img src = 'https://upload.wikimedia.org/wikipedia/commons/2/28/Jaisalmer_Amar_Sagar.jpg' width = '360'align = 'right'/></a><p></p>
          <a href="http://www.rawlanarlai.com/blog/famous-luxury-train-tours-to-rajasthan/"target="_blank">
                   <img src = 'http://www.rawlanarlai.com/blog/wp-content/uploads/2020/02/palace-on-wheels-journey.jpg' width = '350'/></a>
          <a href="https://www.adventurenation.com/blog/rajasthan-ways-to-travel-and-things-to-explore/"target="_blank">
                   <img src = 'https://www.adventurenation.com/blog/wp-content/uploads/2015/09/965267_648337685179948_211582625_o-Copy.jpg' width = '400'/></a>
          <a href="https://blog.untravel.com/ideal-itinerary-rajasthan/"target="_blank">
                   <img src = 'https://blog.untravel.com/wp-content/uploads/2017/11/Rajasthani-cuisine.jpg' width = '310'align = 'right'/></a><p></p>
          <div className= "content">
      </div>
    </div>
  );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "#282c34" };
  }

  changeColor = color => {
    this.setState({ color });
  };

  render() {
    return (
      <div style={{ background: this.state.color }} id="main">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/ListTourist_dest/'
					>
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs/"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Review/'>
                    Reviews
                  </Link>
				  </li>
				  
				   <Link to = "/Review/Review_post/"></Link>
        <Link to = "/Review/Review_view/"></Link>
        
				  
                
				<Link
                    to='/City/'
                  >
				   </Link>
				   <Link
                    to='/Restaurant/'
                  >
				   </Link>
				   <Link
                    to='/Desert/'
                  >
				   </Link>
              </ul>
			 
            </nav>
			
            <Route path="/" exact component={Index} />
            <Route path="/ListTourist_dest/" component={ListTourist_dest} />
			<Route path="/Restaurant/" component={Restaurant} />
			<Route path="/City/" component={City} />
			<Route path="/Desert/" component={Desert} />
            <Route path="/blogs/" component={Blogs} />
			<Route path="/Review/" component={Review}/>
			<Route path="/Review/Review_post/" component={Review_post} />
			<Route path="/Review/Review_view/" component={Review_view} />
			
          </div>
		  
        </Router>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));