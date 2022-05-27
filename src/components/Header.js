import React from "react";
import Profile_foto from '../util/Profile_foto.svg';
import Photo from '../util/Photo.svg';
import '../index.css';

function Header() {
    function getRandomInt(data) {
        return Math.floor(Math.random() * data);
    }

    let price = 60000;
    console.log(getRandomInt(price));

    return (
        <div className="profile_cover">
            <div className="header">
                <div className="element">
                <div className="foto_name_email">
                    <img className="profile_photo" src={Profile_foto} alt="Profile"/>
                    <div className="name_email">
                        <p className="profile_name">Jason Mowry</p>
                        <p className="profile_email">@jason_mowry_photo</p>

                    </div>
                </div>
                <img alt="Фото" className="header_foto" src={Photo}/>
                <div className="price_minus_plus">
                    <div className="minus_plus">
                        <p className="minus">-</p>
                        <p className="plus">+</p>
                    </div>
                    <p className="price">{getRandomInt(price) +` ` + `руб`}</p>
                  {/*  <p className="price">29900 руб</p>*/}
                </div>
                </div>

                <div className="element">
                <div className="foto_name_email">
                    <img className="profile_photo" src={Profile_foto} alt="Profile"/>
                    <div className="name_email">
                        <p className="profile_name">Jason Mowry</p>
                        <p className="profile_email">@jason_mowry_photo</p>

                    </div>
                </div>
                <img alt="Фото" className="header_foto" src={Photo}/>
                <div className="price_minus_plus">
                    <div className="minus_plus">
                        <p className="minus">-</p>
                        <p className="plus">+</p>

                    </div>
                   {/* <p className="price">29900 руб</p>*/}
                    <p className="price">{getRandomInt(price) +` ` + `руб`}</p>
                </div>
                </div>

                    <div className="element">
                <div className="foto_name_email">
                    <img className="profile_photo" src={Profile_foto} alt="Profile"/>
                    <div className="name_email">
                        <p className="profile_name">Jason Mowry</p>
                        <p className="profile_email">@jason_mowry_photo</p>

                    </div>
                </div>
                <img alt="Фото" className="header_foto" src={Photo}/>
                <div className="price_minus_plus">
                    <div className="minus_plus">
                        <p className="minus">-</p>
                        <p className="plus">+</p>
                    </div>
                    <p className="price">{getRandomInt(price) +` ` + `руб`}</p>
                </div>
                 </div>

                <div className="element">
                <div className="foto_name_email">
                    <img className="profile_photo" src={Profile_foto} alt="Profile"/>
                    <div className="name_email">
                        <p className="profile_name">Jason Mowry</p>
                        <p className="profile_email">@jason_mowry_photo</p>

                    </div>
                </div>
                <img alt="Фото" className="header_foto" src={Photo}/>
                <div className="price_minus_plus">
                    <div className="minus_plus">
                        <p className="minus">-</p>
                        <p className="plus">+</p>
                    </div>
                    <p className="price">{getRandomInt(price) +` ` + `руб`}</p>
                </div>
                </div>

            </div>
            </div>
    );
}

export default Header;