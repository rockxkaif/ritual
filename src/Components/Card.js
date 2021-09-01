import React from 'react'
import c3 from "../img/c3.jpg"
import m2 from "../img/m2.jpg"
import a1 from "../img/a1.jpg"
import c2 from "../img/c2.jpg"






export default function Card() {
    return (
        <div>
            <div className="container x-5">
            <div className="row p-4">
                <div class="card" style={{width:'15rem',marginLeft:'33px'}}>
               
                    <img src ={c3 }className="img-fluid" style={{height:'170px',width:'270'}} />
                        <div class="card-body">
                            <p class="card-text"style={{color:'#142b6f'}}>Shop Multivitamin</p>
                        </div>
                </div>
                <div class="card " style={{width:'15rem',marginLeft:'15px'}}>
             
                    <img src ={a1 }className="img-fluid"style={{height:'170px',width:'270'}} />
                        <div class="card-body">
                            <p class="card-text"style={{color:'#142b6f'}}>Shop Multivitamin</p>
                        </div>
                </div><div class="card" style={{width:'15rem',marginLeft:'15px'}}>
                  
                    <img src ={m2 }className="img-fluid" style={{height:'170px',width:'270'}}/>
                        <div class="card-body">
                            <p class="card-text"style={{color:'#142b6f'}}>Shop Multivitamin</p>
                        </div>
                </div><div class="card" style={{width:'15rem',marginLeft:'20px'}}>
                   
                    <img src ={c2 }className="img-fluid" style={{height:'170px',width:'270'}} />
                        <div class="card-body">
                            <p class="card-text"style={{color:'#142b6f'}}>Shop Multivitamin</p>
                        </div>
                </div>
          </div>
            </div>
           
        </div>
            )
}
