import React from "react";
import AddForm from "./AddForm";

const AddBook = (props) => {
  const submitData = (onaddData) => {
    const data = {
      ...onaddData,
      text: "I love book",
      image: require("../Images/Everything_about_epoxy_resins_in_a_single_book.webp"),
      id: Math.random().toString(),
    };
    console.log("data", data);
    props.onAddBook(data);
  };
  return (
    <div className='add_book'>
      <AddForm onClickData={submitData} />
    </div>
  );
};

export default AddBook;
