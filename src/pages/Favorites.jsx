import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/MeetupList";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p style={{ textAlign: "center", marginTop: "4rem", fontSize: "1.5rem" }}>
        You got no favorites , start adding some ...
      </p>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1
        style={{ textAlign: "center", marginTop: "4rem", fontSize: "2.5rem" }}
      >
        Favorites
      </h1>
      {content}
    </section>
  );
};

export default Favorites;
