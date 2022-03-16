import Card from "../layout/Card.jsx";
import classes from "./NewMeetupForm.module.css";
import { useState, useRef } from "react";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredInput = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredaddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredInput,
      image: enteredImage,
      address: enteredaddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="img">Image</label>
          <input type="url" required id="img" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="dc">Description</label>
          <textarea id="dc" rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
