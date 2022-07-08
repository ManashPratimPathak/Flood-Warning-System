import "./final.css";
import React from "react";
import assamPic from "../../assests/images/Assam.jpg";

function Final() {
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <div className="resultPage-div">
        <div
          className="container-r-2"
          style={{ position: "relative", flexDirection: "column" }}
        >
          <h5 style={{position: "relative", bottom: "5px"}}>Map</h5>
          <div className="image-wrapper">
            <img className="resultMap" src={assamPic}></img>
          </div>
          <a href="#Result">
            <button className="btn-data">Detail</button>
          </a>
          <a href="/Maps">
            <button className="btn-map">Generate Map</button>
          </a>
        </div>
      </div>

      <div id="Result" className="resultPage-div-f">
        <div className="container-rr-1" style={{width: "95%"}}>
          <div className="data-div" style={{display: "flex", width: "100%", justifyContent: "space-evenly", marginBottom: "40px"}}>
            <h5>Water-level:</h5>
            <h5>Date: </h5>
            <h5>Location:</h5>
          </div>
          <div>
          <h5>Mitigation</h5>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            recusandae modi eveniet animi distinctio natus at quidem architecto
            molestias nobis dolores doloremque, corporis similique,
            reprehenderit nam praesentium possimus esse iure accusamus labore
            ducimus libero eius quas? Iusto eos animi repudiandae adipisci hic
            quia? Distinctio obcaecati sunt accusamus odit reiciendis maxime
            quaerat accusantium eveniet consequuntur. Repellendus doloribus
            velit in. Totam, labore!
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Final;
