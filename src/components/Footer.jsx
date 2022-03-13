import React from "react";
import "./css/footer.css";
import {
  GrFacebookOption,
  GrLinkedinOption,
  GrTwitter,
  GrInstagram,
} from "react-icons/gr";

function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_top_left">
          <p className="logo">Klarna.</p>
          <select name="" id="" className="selector">
            <option value="au">Australia</option>
            <option value="at">Austria</option>
            <option value="be">Belgium (nl)</option>
            <option value="fr-be">Belgium (fr)</option>
            <option value="dk">Denmark</option>
            <option value="fi">Finland</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="it">Italy</option>
            <option value="ie">Ireland</option>
            <option value="nl">Netherlands</option>
            <option value="no">Norway</option>
            <option value="nz">New Zealand</option>
            <option value="pl">Poland</option>
            <option value="es">Spain </option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland (de)</option>
            <option value="en-ch">Switzerland (en)</option>
            <option value="fr-ch">Switzerland (fr)</option>
            <option value="it-ch">Switzerland (it)</option>
            <option value="uk">United Kingdom</option>
            <option value="us">United States</option>
            <option value="international">International</option>
            <option value="ca">Canada</option>
            <option value="UnitedStates">United States</option>
          </select>
          <div className="iconbox">
            <GrFacebookOption className="icon" />
            <GrLinkedinOption className="icon" />
            <GrTwitter className="icon" />
            <GrInstagram className="icon" />
          </div>
        </div>
        <div className="footer_top_mid1">
          <ul className="list1">
            <li>
              <b>Klarna</b>
            </li>
            <li>About us</li>
            <li>Careers</li>
            <li>Legal</li>
            <li>Press</li>
            <li>Extra O Blog</li>
            <li>Privacy</li>
            <li>Email connect</li>
            <li>Sustainablity</li>
          </ul>
        </div>
        <div className="footer_top_mid2">
          <ul className="list1">
            <li>
              <b>Customer</b>
            </li>
            <li>Buy Now Pay Later</li>
            <li>Contact Via App</li>
            <li>Customer Services</li>
            <li>Klarna Store</li>
            <li>Shopping App</li>
            <li>Rewards Club</li>
            <li>Buyer Protection Policy</li>
            <li>Feedback and Complains</li>
            <li>Shopping inspiration</li>
          </ul>
        </div>
        <div className="footer_top_right">
          <ul className="list1">
            <li>
              <b>Business</b>
            </li>
            <li>Sell with karna</li>
            <li>Payment Methods</li>
            <li>Platform and partner</li>
            <li>Partner Program</li>
            <li>Business Login</li>
            <li>Business Support</li>
            <li>Operational Status</li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <p>
            Monthly financing through Klarna is issued by WebBank, member FDIC.
            Copyright © 2005-2022 Klarna Inc. NMLS #1353190, 629 N. High Street,
            Third Floor, Columbus, OH 43215. Other CA resident loans made or
            arranged pursuant to a California Finance Lenders Law license.
          </p>
        </div>

        <ul className="footer_bottom_right">
          <li>Legal</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
