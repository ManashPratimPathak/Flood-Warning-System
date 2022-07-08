import logo from "../../assests/images/logoS.png"
import pic1 from "../../assests/images/tsunami.jpg"
import './intro.css'
const Intro = () => {

  return (
    <div className="landing">
      <div className="container-1">
        <img src={pic1}></img>
      </div>
      <div className="container-2">
        <h1>Flood Early Warning System</h1>
        <p>Flood Early Warning System (FLEWS) is a system by which flood induced hazards can be minimized and prevented.</p>
        <a href="/secondPage"><button className="button-page1" >Let's Proceed</button></a>

      </div>
    </div>
  )
}

export default Intro