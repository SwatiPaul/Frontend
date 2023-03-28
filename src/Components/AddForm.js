import React, { useState } from "react";

const AddForm = (props) => {
  const [state, setState] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const onChangeHandler = (event) => {
    setState(event.target.value);
  };
  const onChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const onChangeDate = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const submitdata = {
      header: state,
      Author: author,
      date: new Date(date),
    };
    props.onClickData(submitdata);
    console.log("submitdata", submitdata);
    setState("");
    setAuthor("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler} className='form_field'>
      <div>
        <label>Add Book Name</label>
        <input type='text' value={state} onChange={onChangeHandler} />
      </div>
      <div>
        <label>Add Author Name</label>
        <input type='text' value={author} onChange={onChangeAuthor} />
      </div>
      <div>
        <label>Enter Date</label>
        <input
          type='date'
          value={date}
          min='25-03-2023'
          max='31-12-2023'
          onChange={onChangeDate}
        />
      </div>
      <button className='submit-btn'>Submit</button>
    </form>
  );
};

export default AddForm;
