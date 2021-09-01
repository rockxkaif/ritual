import React from 'react'
import m1 from "../img/m1.jpg"
import m2 from "../img/m2.jpg"
import m4 from "../img/m4.jpg"
import m5 from "../img/m5.jpg"

import c221 from "../img/c221.jpg"


export default function Featured() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Featured Products</h1>
                    </div>
        
                </div>
                <div>
                </div>
                <div className="containersss">
                    <div className="row mt-3">
                        <div class="box" style={{ width: '16rem', marginLeft: '20px' }}>
                        </div>
                        <div class="box2 " style={{ width: '16rem', marginLeft: '20px' }}>
                        </div><div class="box3" style={{ width: '16rem', marginLeft: '20px' }}>
                        </div><div class="box4" style={{ width: '16rem', marginLeft: '20px' }}>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div class="box11" style={{ width: '16rem', marginLeft: '20px' }}>
                            <h4 className="text-muted">Essential for Women</h4>
                            <h4>Multivitamin 18+</h4>
                            <p className="text-muted">The clinical-backed multivitamin, reimagined for women 18+.</p>

                        </div>
                        <div class="box211 " style={{ width: '16rem', marginLeft: '20px' }}>
                            <h4 className="text-muted">Essential for Women</h4>
                            <h4>Prenatal Multivitamin</h4>
                            <p className="text-muted">The prenatal multivitamin for thinking, trying, and when it's time.</p>

                        </div><div class="box311" style={{ width: '16rem', marginLeft: '20px' }}>
                            <h4 className="text-muted">Essential for Women</h4>
                            <h4>Daily Shake 18+</h4>
                            <p className="text-muted">The reimagined plant-based protein for adults.</p>
                        </div><div class="box411" style={{ width: '16rem', marginLeft: '20px' }}>
                            <h4 className="text-muted">Essential for Women</h4>
                            <h4>Multivitamin 18+</h4>
                            <p className="text-muted">Formaulated for men 18-49 to help fill nutrient gaps in their diet</p>

                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid mt-5">
                <div className="row mb-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={m5} className="img-fluid" style={{height:'570px',width:'570px'}} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="containerss">
                            <h2>Clean and simple, delivered</h2>
                            <h6>Easy-to-start. Easy-to-cancel. Our team of scientists and nutritional experts are on a mission to turn your new healthy habit into a Ritual.</h6>
                            <h6>Free shipping</h6>
                            <h6>Control your delivery date</h6>
                            <h6>Free and easy cancellation</h6>
                            <h6>30-day money back guarantee</h6>


                        </div>
                    </div>


                </div>
            </div>
        </div>




    )
}
