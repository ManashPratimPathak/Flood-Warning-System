import pic1 from "../../assests/images/tsunami.jpg"
import './second.css'
import assamPic from "../../assests/images/Assam.jpg"
import Dropdown from "./Dropdown/DropDown"
const Second = () => {

  return (
    <div className="resultPage-div">
      <div className="container-r-1">
        {/* <h3 className="result-details"> Place : Chenimari</h3>
        <h3 className="result-details"> Water Level: 80m</h3> */}
        <Dropdown />
      </div>
      <div className="container-r-2">
        <h3 style={{ 'textAlign': 'center' }}>Assam</h3>
        <div className="image-wrapper">
          <img className="resultMap" src={assamPic}></img>
        </div>
      </div>
    </div>
  )
}

export default Second;