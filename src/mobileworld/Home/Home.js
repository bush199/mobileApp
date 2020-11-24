import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light bg-secondary">
                <span class="navbar-brand mb-0 h1">Mobile's World</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
            <h1 id="home">Welcome to Mobile Shopping</h1>
            <p id="hpara">Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on Flipkart. Whether you’re looking for waterdrop notch screens, a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs.</p>
           <div className="card" style={{width: "23rem"}}>
                <img src="01_Redmi Note 9.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"fuchsia"}} class="card-text"><b>Redmi Note 9Pr o</b><br/>website: WWW.redmi.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="02_Iphone max pro.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"blue"}} class="card-text"><b>iPhone 11 Max Pro</b><br/>website: WWW.apple.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="03_Oppo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"crimson"}} class="card-text"><b>Oppo f 15 Pro</b><br/>website: WWW.oppo.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="04_Vivo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"darkblue"}} class="card-text"><b>Vivo v11 Pro</b><br/>website: WWW.vivo.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="05_samsung s10.jpeg" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p style={{color:"grey"}} class="card-text"><b>Samsung s10</b><br/>website: WWW.samsung.com </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="06_oneplus.jpeg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"red"}} class="card-text"><b>OnePlus Nord</b> <br/> website: WWW.oneplus.com</p>
            </div>
            </div>
        </div>
    )
}
