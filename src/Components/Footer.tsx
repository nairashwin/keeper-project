import React from "react";

function Footer() {
    let currentDate: Date;
    let currentYear: number;
    currentDate = new Date();
    currentYear = currentDate.getFullYear()

    return (
        <footer>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;