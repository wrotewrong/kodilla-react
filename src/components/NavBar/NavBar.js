import Container from '../Container/Container';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navInner}>
          <a href='/'>
            <i className={'fa fa-tasks'}></i>
          </a>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/favorite'>Favorite</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
