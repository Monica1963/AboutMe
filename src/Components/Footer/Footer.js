import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (  
        <footer className="justify-content-around ">
           
       
            <a className="redes" href="https://www.facebook.com/monicaliliana.albiaque" target="_blank">
                    <i className="fab fa-facebook-square  fa-2x"></i>
                </a>

                <a className="redes" href="" tar>
                    <i className="fab fa-instagram fa-2x"></i>
                </a> 

                <p>  © 2021 </p>

                <a className="redes" href="https://www.linkedin.com/in/monica-liliana-albiaque">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>

                <a className="redes" href="https://github.com/AlbiaqueMonica/" target="_blank">
                    <i className="fab fa-github fa-2x"></i>
                </a>
               
        </footer>
    );
}
 
export default Footer;