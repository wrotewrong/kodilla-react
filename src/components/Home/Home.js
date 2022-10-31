import Hero from '../Hero/Hero.js';
import { Lists } from '../Lists/Lists';
import { ListForm } from '../ListForm/ListForm.js';

export const Home = () => {
  return (
    <>
      <Hero />
      <Lists />
      <ListForm />
    </>
  );
};
