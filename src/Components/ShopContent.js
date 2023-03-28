import React from "react";

const ShopContent = (props) => {
  console.log("props", props);
  const data = [
    {
      id: 1,
      image: require("../Images/Everything_about_epoxy_resins_in_a_single_book.webp"),
      header: "Free Book included",
      text: "Thanks to our sponsors, you can download our textbooks for free. Search or browse categories, Choose a book, Download in 10 seconds.",
      Author: "By your favourite Author",
    },
    {
      id: 2,
      image: require("../Images/Everything_about_epoxy_resins_in_a_single_book.webp"),
      header: "Affiliate Links",
      text: "Thanks to our sponsors, you can download our textbooks for free. Search or browse categories, Choose a book, Download in 10 seconds.",
      Author: "By your favourite Author",
    },
    {
      id: 3,
      image: require("../Images/Everything_about_epoxy_resins_in_a_single_book.webp"),
      header: "Discount sale",
      text: "Thanks to our sponsors, you can download our textbooks for free. Search or browse categories, Choose a book, Download in 10 seconds.",
      Author: "End on Jan 10 2016",
    },
  ];
  return (
    <div className='shop_container'>
      <div className='container'>
        <div className='row'>
          {data.map((item, index) => (
            <div className='col-4' key={index}>
              <img src={item.image} alt='' style={{ width: "50%" }} />
              <h5>{item.header}</h5>
              <p
                style={{
                  color: "#c2c2c2",
                  fontSize: "11px",
                  width: "70%",
                  margin: "auto",
                }}>
                {item.text}
              </p>
              <h6
                style={{
                  color: "#93bc1b",
                  fontSize: "15px",
                  marginTop: "0.5rem",
                }}>
                {item.Author}
              </h6>
              <button className='book_btn'>Signup</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
