import React from "react";

const linkedin = ('   Linkedin   ');
const instagram = ('   Instagram   '); 
const x = ('   X   ');
const googleScholar = ('    Google Scholar  ');


function Footer() {
    return (
        <div className="footer">
            <a class="social-icon" href="https://www.linkedin.com/in/sherrimcastillo/ ">|{linkedin}</a>
            <a class="social-icon" href="https://www.instagram.com/sherri.michelle.castillo/">|{instagram}|</a>
            <a class="social-icon" href="https://twitter.com/sherrimcastillo?lang=en>">|{x}|</a>
            <a class="social-icon" href="https://scholar.google.com/citations?hl=en&user=WolZsuYAAAAJ">|{googleScholar}|</a>
        </div>

    );
}

export default Footer;