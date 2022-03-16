import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/NewMeetupForm";

const NewMeetUps = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (banana) => {
    fetch(
      "https://reactmeetup-38ae8-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(banana),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    ).then(navigate("/", { replace: true }));
  };

  return (
    <section>
      <h1 style={{ textAlign: "center", marginTop: "3rem" }}>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetUps;
