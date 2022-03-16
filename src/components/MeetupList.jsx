import React from "react";
import MeetupItem from "./MeetupItem";

const MeetupList = ({ meetups, onDelete }) => {
  return (
    <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default MeetupList;
