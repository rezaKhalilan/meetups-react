import { useContext } from "react";
import Card from "../layout/Card.jsx";
import FavoritesContext from "../store/favorite-context.js";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({ meetup, onDelete }) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(meetup.id);

  const toggleFavorite = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(meetup.id);
    } else {
      favoritesCtx.addFavorite({
        id: meetup.id,
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.action}>
          <button onClick={toggleFavorite}>
            {itemIsFavorite ? "Remove from Fvaorites" : "To Favorites"}
          </button>
          <button onClick={() => onDelete(meetup.id)}>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
