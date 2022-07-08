import "./final.css";
import React, { useEffect, useState } from "react";
import assamPic from "../../assests/images/Assam.jpg";
import { useParams } from 'react-router-dom';
import Loader from "../shared/Loader";
import image99 from "../../assests/images/99.png"
import image100 from "../../assests/images/100.png"
import image101 from "../../assests/images/101.png"
import image102 from "../../assests/images/102.png"

const image = {
  99: image99,
  100: image100,
  101: image101,
  102: image102
}

function Final() {

  const { id } = useParams();
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)
  useEffect(() => {
    const date = id.split[0]

    axios.post('/user', {
      date: '1',
    })
      .then(function (response) {
        console.log(response);
        setState(() => {
          setloading = false
        })
      })
      .catch(function (error) {
        console.log(error);
        setState(() => {
          setloading = false
          seterror = true
        })
      });
  }, [])

  return (
    loading ? <Loader /> : <div style={{ height: "100vh", overflowY: "scroll" }}>
      <div className="resultPage-div">
        <div
          className="container-r-2"
          style={{ position: "relative", flexDirection: "column" }}
        >
          <h5 style={{ position: "relative", bottom: "5px" }}>Map</h5>
          <div className="image-wrapper">
            <img className="resultMap" src={error ? assamPic : assamPic}></img>
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
        <div className="container-rr-1" style={{ width: "95%" }}>
          <div className="data-div" style={{ display: "flex", width: "100%", justifyContent: "space-evenly", marginBottom: "40px" }}>
            <h5>Water-level: {error ? "Something went wrong" : "Its working"}</h5>
            <h5>Date: {id}</h5>
            <h5>Location: Chenimari</h5>
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
