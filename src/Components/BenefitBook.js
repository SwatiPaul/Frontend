import React from "react";
import { ConfigFile } from "../service/ConfigFile";
import { BiMessageRoundedCheck } from "react-icons/bi";

const BenefitBook = () => {
  const image = require("../Images/book.png");
  return (
    <div className='benefit_section'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h5>Something magical happen when you read this eBook</h5>
            <p>
              Who loves or pursues or desires to obtain pain of itself, because
              it is pain, but because occasionally occur in which toil and pain
              can procure him some great pleasure to take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right a pleasure
              consequences.
            </p>
            <div
              style={{
                display: "flex",
                marginLeft: "2rem",
                padding: "0.5rem",
              }}>
              <div>
                {" "}
                <BiMessageRoundedCheck
                  style={{ fontSize: "25px", color: "#90ba14" }}
                />
              </div>
              <div>
                <p
                  style={{
                    margin: "3px",
                    width: "100%",
                    color: "#000",
                    fontStyle: "italic",
                  }}>
                  {" "}
                  Actual teachings of the great explorer
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "2rem",
                padding: "0.5rem",
              }}>
              <div>
                {" "}
                <BiMessageRoundedCheck
                  style={{ fontSize: "25px", color: "#90ba14" }}
                />
              </div>
              <div>
                <p
                  style={{
                    margin: "3px",
                    width: "100%",
                    color: "#000",
                    fontStyle: "italic",
                  }}>
                  {" "}
                  No one rejects, dislikes, or avoids pleasure itself
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "2rem",
                padding: "0.5rem",
              }}>
              <div>
                {" "}
                <BiMessageRoundedCheck
                  style={{ fontSize: "25px", color: "#90ba14" }}
                />
              </div>
              <div>
                <p
                  style={{
                    margin: "3px",
                    width: "100%",
                    color: "#000",
                    fontStyle: "italic",
                  }}>
                  {" "}
                  Undertakes laborious physical exercise
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "2rem",
                padding: "0.5rem",
              }}>
              <div>
                {" "}
                <BiMessageRoundedCheck
                  style={{ fontSize: "25px", color: "#90ba14" }}
                />
              </div>
              <div>
                <p
                  style={{
                    margin: "3px",
                    width: "100%",
                    color: "#000",
                    fontStyle: "italic",
                  }}>
                  {" "}
                  Will give you a complete account of the system
                </p>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <img src={image} alt='' style={{ width: "60%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitBook;
