import React from "react"
import profilePicture from "../images/profile.jpg"
import emailIcon from "../images/Mail.png"
import linkedInIcon from "../images/linkedin.png"

export default function Header() {
    return (
        <header>
        <div className="profile--image">
            <img src={profilePicture} alt="" />
        </div>
        <h1 className="profile--title">Sebastian Wantulok</h1>
        <h4 className="profile--job">Frontend Developer</h4>
        <p>wantulok.info.pl</p>
        <div className="profile--buttons">
            <button type="button">
                <img src={emailIcon} alt="" />
                Email
            </button>
            <button type="button">
                <img src={linkedInIcon} alt="" />
                LinkedIn
            </button>
        </div>
        </header>
    )
}