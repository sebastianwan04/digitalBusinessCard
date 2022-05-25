import React from "react"
import profilePicture from "../images/profile.jpg"
import emailIcon from "../images/mail.png"
import linkedInIcon from "../images/linkedin.png"

export default function Header() {
    return (
        <header>
            <div className="profile__image">
                <img src={profilePicture} alt="profile picture of owner" />
            </div>
            <h1 className="profile__title">Sebastian Wantulok</h1>
            <h4 className="profile__job">Frontend Developer</h4>
            <a className="profile__link">wantulok.info.pl</a>
            <div className="profile__buttons">
                <button type="button" className="button__email">
                    <img src={emailIcon} alt="" />
                    Email
                </button>
                <button type="button" className="button__linkedin">
                    <img src={linkedInIcon} alt="" />
                    LinkedIn
                </button>
            </div>
        </header>
    )
}