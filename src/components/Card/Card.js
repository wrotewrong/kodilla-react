import styles from './Card.module.scss';
import { ButtonFavorite } from '../ButtonFavorite/ButtonFavorite';
import { ButtonTrash } from '../ButtonTrash/ButtonTrash';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsReducer';
import { removeCard } from '../../redux/cardsReducer';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(props.id));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <ButtonFavorite
          isFavorite={props.isFavorite}
          handleClick={handleToggleFavorite}
        />
        <ButtonTrash handleClick={handleRemoveCard} />
      </div>
    </li>
  );
};

export default Card;
