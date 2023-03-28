import React, { useState } from "react";
import NavSection from "../Components/NavSection";
import CarouselItem from "../Components/CarouselItem";
import { BsBookFill } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import ShopContent from "../Components/ShopContent";
import BenefitBook from "../Components/BenefitBook";
import Footer from "../Components/Footer";
import AddBook from "../Components/AddBook";
const HomePage = () => {
  const DUMMY_JSON = [
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
  const [data, setData] = useState(DUMMY_JSON);
  const bookData = (expense) => {
    console.log(expense);
    setData((prevData) => {
      return [expense];
    });
  };

  return (
    <div className='main_container'>
      <NavSection />
      <CarouselItem />
      <div className='feature_section'>
        <div className='container'>
          <div className='row'>
            <div className='col feature_content'>
              <div>
                <GrServices style={{ color: "#90bb13" }} />
              </div>
              <h6>Creative Services</h6>
              <p>
                As a professional agency, we’ve spent over 20 years learning
                about consumer mindsets and most effective advertising methods
                to reach them.
              </p>
            </div>
            <div className='col feature_content'>
              <div>
                <GrServices style={{ color: "#90bb13" }} />
              </div>
              <h6>Internet Marketing</h6>
              <p>
                The Internet marketing space can be confusing. Our experienced
                Internet marketing, web designers and social media consultants
                will simplify it for you.
              </p>
            </div>
            <div className='col feature_content'>
              <div>
                <GrServices style={{ color: "#90bb13" }} />
              </div>
              <h6>Advertising Design</h6>
              <p>
                Over the last 20 years, we’ve learned many things about
                Business-to-Business (B2B) , Business-to-Consumer (B2C) and
                consumer mindsets.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Section */}
      <div className='shop_container'>
        <div className='container'>
          <h3>Time to Shop Our eBook </h3>
          <div className='logo_section'>
            <BsBookFill />
          </div>
          <p style={{ color: "#b9b9b9", fontSize: "12px", margin: "10px" }}>
            We deliberately write a book so when the reader gets to the end of
            the chapter, he or she must turn one more page.
          </p>
        </div>
        <AddBook onAddBook={bookData} />
        {/* <ShopContent data={bookData} /> */}
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
      </div>
      <BenefitBook />
      <Footer />
    </div>
  );
};

export default HomePage;
