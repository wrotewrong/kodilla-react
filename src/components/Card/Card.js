import styles from './Card.module.scss';
import { ButtonFavorite } from '../ButtonFavorite/ButtonFavorite';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    // console.log(props.isFavorite);
    dispatch(toggleFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <ButtonFavorite
        isFavorite={props.isFavorite}
        handleClick={handleToggleFavorite}
      ></ButtonFavorite>
    </li>
  );
};

export default Card;
