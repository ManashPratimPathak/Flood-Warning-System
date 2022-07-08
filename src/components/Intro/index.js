import logo from "../../assests/images/logo.png"
import pic1 from "../../assests/images/tsunami.jpg"
import './intro.css'
const Intro = () => {

  return (
    <div className="landing">
        <div className="container-1">
          <img src={pic1}></img>
        </div>
        <div className="container-2">
        <h1>Flood Prediction System</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis rem aliquid totam quas est, commodi necessitatibus ad corrupti consectetur possimus repellendus at.</p>
        <a href="/secondPage"><button className="button-page1" >Let's Proceed</button></a>
        
        </div>
    </div>
  )
}

export default Intro