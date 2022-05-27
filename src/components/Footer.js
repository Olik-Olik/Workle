import React from "react";
import Trash from "../util/trash.svg";
import '../index.css';


function Footer() {
    return(
        <div className="links">
            <div className="links_pagination">mndsfja</div>
           < img alt="Мусорка" src={Trash} className="footer_trash"/>
        </div>
    )
}
export default Footer;