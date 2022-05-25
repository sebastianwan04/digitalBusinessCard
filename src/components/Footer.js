import React from "react"
import iconFacebook from "../images/Facebook Icon.png"
import iconTwitter from "../images/Twitter Icon.png"
import iconGitHub from "../images/GitHub Icon.png"
import iconInstagram from "../images/Instagram Icon.png"

export default function Footer() {
    return (
        <footer className="footer--icons">
            <img src={iconTwitter} alt="" />
            <img src={iconFacebook} alt="" />
            <img src={iconInstagram} alt="" />
            <img src={iconGitHub} alt="" />
        </footer>
    )
}
