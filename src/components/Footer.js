import React from 'react'

export default function Footer() {
    return (
        <>
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Movie<span>Dic</span></h3>
                <p className="footer-company-name">José Blasco & Carlos Curtido&reg; 2020</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>IronHack Barcelona</span>Spain</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>667000000</p>
                </div>

                <div>
                    <i classNameName="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">MovieDic@j&c.com</a></p>
                </div>

            </div>

            <div className="footer-right">
                <div className="footer-icons">
                    <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a href="https://www.github.com/" target="_blank"><i className="fa fa-github"></i></a>
                </div>
            </div>
        </footer>
        </>
    )
}