import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import './footerCover.scss'

const FooterCover = () => {
    return (
        <div className="cover-container">
            <div className="sections">
                <p className="heading">About</p>
                <span className="parent">
                    <span className="child">About Nerdify</span>
                    <span className="child">Press</span>
                    <span className="child">Our blog</span>
                    <span className="child">Join our team</span>
                    <span className="child">Contact us</span>
                    <span className="child">Invite friends</span>
                    <span className="child">Gifts</span>
                </span>
            </div>

            <div className="sections">
                <p className="heading">Support</p>
                <span className="parent">
                    <span className="child">Help/FAQ</span>
                    <span className="child">Access</span>
                    <span className="child">Purchase help</span>
                    <span className="child">AdChoice</span>
                    <span className="child">Publishers</span>
                </span>
            </div>

            <div className="sections">
                <p className="heading">Legal</p>
                <span className="parent">
                    <span className="child">Terms</span>
                    <span className="child">Privace</span>
                    <span className="child">Copyright</span>
                    <span className="child">Cookie preferences</span>
                </span>
            </div>

            <div className="sections">
                <p className="heading">Social</p>
                <span className="parent">
                    <span className="child social"><Facebook/>Facebook</span>
                    <span className="child social"><Instagram/>Instagram</span>
                    <span className="child social"><Pinterest/>Pintrest</span>
                    <span className="child social"><Twitter/>Twitter</span>
                </span>
            </div>

            <div className="app-section">
                <p className="heading">Get our free apps</p>
                
                    <img src="https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/appstore_white_en.f11cfc14.svg" alt="" />
                    <img src="https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/playstore_en.52ebe950.svg" alt="" />
                
            </div>
            
        </div>
    )
}

export default FooterCover
