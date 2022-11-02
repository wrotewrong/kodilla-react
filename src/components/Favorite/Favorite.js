import { PageTitle } from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';

export const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.favoriteSubpage}>
        <p>All your favorite cards in one place!</p>
        {favoriteCards.length > 0 ? (
          <ul>
            {favoriteCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                id={card.id}
                isFavorite={card.isFavorite}
              ></Card>
            ))}
          </ul>
        ) : (
          <h1>No cards...</h1>
        )}
      </div>
    </div>
  );
};
