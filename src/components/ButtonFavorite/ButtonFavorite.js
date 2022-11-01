import clsx from 'clsx';
import styles from './ButtonFavorite.module.scss';

export const ButtonFavorite = (props) => {
  return (
    <button
      className={clsx(
        'fa fa-star-o',
        styles.button,
        props.isFavorite && styles.favorite
      )}
      type='text'
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};
