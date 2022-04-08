import { useEffect, useState } from "react";
import MeetupList from "../components/MeetupList";

const AllMeetUps = () => {
  const [loading, setloading] = useState(true);
  const [loadedMetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setloading(true);

    fetch("https://meetuptest-e602a-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setloading(false);

        setLoadedMeetups(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p style={{ textAlign: "center", marginTop: "4rem", fontSize: "2rem" }}>
          Loading ...
        </p>
      </section>
    );
  }

  const deleteHandler = async (id) => {
    await fetch(
      `https://meetuptest-e602a-default-rtdb.firebaseio.com/meetups/${id}.json`,
      {
        method: "DELETE",
      }
    );
    setLoadedMeetups(loadedMetups.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "3rem" }}
      >
        All MeetUps
      </h1>
      <MeetupList meetups={loadedMetups} onDelete={deleteHandler} />
    </div>
  );
};

export default AllMeetUps;
