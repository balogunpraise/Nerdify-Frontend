import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <div className="footer">
            <ul className="left">
                <li className="footer-link">Books</li>
                <li className="footer-link">Audio books</li>
                <li className="footer-link">Magazines</li>
                <li className="footer-link">Podcasts</li>
                <li className="footer-link">Sheet Music</li>
            </ul>
            <p>Copyright &#169; 2021 Nerdify</p>
        </div>
    )
}

export default Footer
