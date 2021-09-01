import React from 'react'
import "../App.css"

import logo from "../img/logo.jpg"
import c22 from "../img/c22.jpg"
import c221 from "../img/c221.jpg"
import map from "../img/map.jpg"




export default function Card2() {
    return (
        <>
        <div className="container-fluid">


       
            <div className="containers">
                <h3 style={{ textAlign: 'center' }} >Daily essentials with good intentions — for living life or creating it.</h3>
                <img src={logo} style={{ width: '45rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            </div>
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={c221} className="img-fluid"style={{height:'570px',width:'570px'}} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="containerss">
                        <h2>We're not about</h2>
                        <h2>pseudoscience and half-</h2>
                        <h2>truths</h2>
                        <h6>From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.</h6>
                        </div>                     
                    </div>

                </div>
            </div>
            <div className="container-fluid">
                <div className="row mb-5">
              
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="containerss">
                        <h2>You deserve traceability</h2>           
                        <h6>We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.</h6>
                        <h3>Meet Our Ingredients</h3>
                        <h3>Our Clinical Study</h3>
                        </div>                     
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={map} className="img-fluid" style={{height:'570px',width:'570px'}} />
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}
