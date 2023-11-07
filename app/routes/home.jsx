import { Link } from "@remix-run/react";
import Modal from 'react-modal';
import { useState } from "react";
import Shop from "./shop";


export default function Home ({setMiniBrowser}) {

    return (
        <div className="Home">
                <video className="homeVideo" autoPlay loop muted>
                    <source src='https://i.imgur.com/2jLwS41.mp4' type="video/mp4"/>
                </video>
            <div className="body">
                <body>
                    {/* <Link to="/shop" className="shop"> */}
                        <img src="https://i.imgur.com/i9KgFOX.gif"/>
                        <button className="buttonShop" >
                            Shop
                        </button>
                    {/* </Link> */}
                    <Link to="/cart" className="cart">
                    <img src="https://i.imgur.com/xDgYL4R.gif"/>
                        <button className="buttonCart">
                            Cart
                        </button>
                    </Link>
                    <Link to="/about" className="about">
                    <img src="https://i.imgur.com/Mm0P4CS.gif"/>
                        <button className="buttonAbout">
                            About
                        </button>
                    </Link>
                </body>
            </div>
            <footer>
                <div className="footer">
                    <button className="buttonFooter">
                        Start
                    </button>
                </div>
            </footer>
        </div>
    )
}