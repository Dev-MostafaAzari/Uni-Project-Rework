import React from 'react';
import mainImg from "../assets/6.jpg";
import "../styles/MainPage.css"


function MainPage(){
    return(
        <div className="mainPageContent">
            <div className="mainImgDiv">
                <img id="mainImg" src={mainImg} alt="mainImg"/>
                <div className="textMainImg">
                    <h3 className="Img-h3">Shopping Site</h3>
                    <p>This website was created by<a href="https://github.com/Dev-MostafaAzari">MostafaAzari</a></p>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
