import styles from './PageTitle.module.scss';

export const PageTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
