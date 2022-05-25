import React from "react"
import iconFacebook from "../images/facebook_icon.png"
import iconTwitter from "../images/twitter_icon.png"
import iconGitHub from "../images/github_icon.png"
import iconInstagram from "../images/instagram_icon.png"

export default function Footer() {
    return (
        <footer className="footer__icons">
            <img src={iconTwitter} alt="twitter icon" />
            <img src={iconFacebook} alt="facebook icon" />
            <img src={iconInstagram} alt="instagram icon" />
            <img src={iconGitHub} alt="github icon" />
        </footer>
    )
}
