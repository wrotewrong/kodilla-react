import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
  const [searchCardTitle, setSearchCardTitle] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SEARCH_CARD',
      payload: searchCardTitle,
    });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        onChange={(e) => setSearchCardTitle(e.target.value)}
        placeholder='Search...'
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
