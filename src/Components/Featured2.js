import React from 'react'
import "../App.css"
import m2 from "../img/m2.jpg"
import feat1 from "../img/feat1.jpg"
import feat2 from "../img/feat2.jpg"
import feat3 from "../img/feat3.jpg"
import feat4 from "../img/feat4.jpg"





export default function Featured2() {
    return (
        <div>
            <section>
                <div className="container">

                    <hr class="w-auto mx auto pt-1" />
                    <div class="container-fluid"></div>
                    <h1 class="text-center pt-5">Make Your Self</h1>
                    <p class="text-center">Commit to yourself every single day with @Ritual</p>
                    <hr class="w-auto mx auto pt-5" />
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-12 mb-4">
                            <img src={feat1} className="img-fluid" />
                        </div>
                        <div class="col-lg-3 col-md-2 col-12 mb-4">
                            <img src={feat2} class="img-fluid" />
                        </div>
                        <div class="col-lg-3 col-md-2 col-12 mb-4">
                            <img src={feat3} class="img-fluid" />
                        </div>
                        <div class="col-lg-3 col-md-2 col-12 mb-4">
                            <img src={feat4} class="img-fluid" />
                        </div>

                    </div>
                </div>
            </section>
            <hr class="w-auto mx auto pt-1" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Subscribe for updates, </h3>
                            <h3>exclusive promotions,</h3><h3>e and more.</h3>
                    </div>
                    <div className="col-md-6">
                        <div class="bbb-wrapper fl-wrap">
                            <div class="subcribe-form fl-wrap">
                                <form id="subscribe" novalidate="true">
                                    <input class="enteremail" name="EMAIL" id="subscribe-email" placeholder="Email" spellcheck="false" type="text" /> <button type="submit" id="subscribe-button" class="subscribe-button color-bg"> Subscribe</button> <label for="subscribe-email" class="subscribe-message"></label> </form>
                            </div>
                        </div>
                        <div className="soc text-center">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-pinterest"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-youtube"></a>
                        </div>

                    </div>
                </div>
            </div>
            <hr class="w-auto mx auto pt-1" style={{color:'#142B6F;'}} />


        </div>
    )
}
