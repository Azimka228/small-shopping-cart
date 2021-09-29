import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="TopFooter">
        <div className="Footer_wrapper">
          <div className="Footer_row">
            <div className="Footer_column">
              <div className="Footer_column_title">MENU</div>
              <div className="Footer_column_links">
                <ul>
                  <li>teasers</li>
                  <li>specialty wraps</li>
                  <li>salads</li>
                  <li>boomburgers</li>
                  <li>pizzas & flatbreads</li>
                  <li>homemade skillets</li>
                  <li>redefining light</li>
                  <li>manakeesh</li>
                  <li>travel box</li>
                  <li>kids meal</li>
                  <li>desserts</li>
                  <li>side orders</li>
                  <li>beverages</li>
                </ul>
              </div>
            </div>
            <div className="Footer_column">
              <div className="Footer_column_title">ACCOUNT</div>
              <div className="Footer_column_links">
                <ul>
                  <li>login</li>
                  <li>register</li>
                  <li>my bag</li>

                </ul>
              </div>
            </div>
            <div className="Footer_column">
              <div className="Footer_column_title">ACCOUNT</div>
              <div className="Footer_column_links">
                <ul>
                  <li>facebook</li>
                  <li>twitter</li>
                  <li>instagram</li>
                  <li>linkedin</li>
                  <li>snapchat</li>
                </ul>
              </div>
            </div>
            <div className="Footer_column">
              <div className="Footer_column_title">APPS</div>
              <div className="Footer_column_links">
                <ul>
                  <li className="google-play"><a className="googleApp"></a></li>
                  <li className="appStore"><a className="AppstoreApp"></a></li>
                  <li>terms and conditions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Footer_bot">
            <div className="Footer_wrapper">
              <div className="byKoein">
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
