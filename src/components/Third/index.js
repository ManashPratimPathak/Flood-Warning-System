import React from "react";
import assamPic from "../../assests/images/Assam.jpg"
import "./third.css"

function Third() {
    const today = new Date();
    var date = today.getDate();
    return (<div>
        <div className="resultPage-div">
            <div className="container-rr-1">
                <h5>Dates</h5>
                <a href="/finalPage"><button className="date-btn">{date}</button></a>
                <a href="/finalPage"><button className="date-btn">{date + 1}</button></a>
                <a href="/finalPage"><button className="date-btn">{date + 2}</button></a>
            </div>
            <div className="container-r-2">
                <div className="image-wrapper">
                    <img className="resultMap" src={assamPic}></img>
                </div>
            </div>
        </div>
    </div>);
}

export default Third;