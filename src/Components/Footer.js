import React from "react";

const Footer = () => {
  const Card = [
    {
      id: 1,
      image: require("../Images/visa-card-electron-logo-png-27.png"),
    },
    {
      id: 2,
      image: require("../Images/visa-card-electron-logo-png-27.png"),
    },
    {
      id: 3,
      image: require("../Images/visa-card-electron-logo-png-27.png"),
    },
    {
      id: 4,
      image: require("../Images/visa-card-electron-logo-png-27.png"),
    },
  ];
  return (
    <div className='footer_section'>
      <div className='container'>
        <div className='row'>
          <div className='payment_section'>
            <h5>Make Payment Your Comfortable Way</h5>
            <div className='row card_container'>
              {Card.map((item, index) => (
                <div className='col-md-3 col-3' key={index}>
                  <a href='#'>
                    <img src={item.image} alt='' style={{ width: "55%" }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='footer_botttom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-5' style={{ textAlign: "left" }}>
              <p
                style={{
                  textDecoration: "none",
                  fontSize: "12px",
                  color: "black",
                }}>
                © 2023 ,
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                    color: "black",
                  }}
                  href='#'>
                  Single Store
                </a>
              </p>
            </div>
            <div className='col-md-6 col-7' style={{ textAlign: "right" }}>
              <ul className='list_style'>
                <li>
                  <a href='#'>Search</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
