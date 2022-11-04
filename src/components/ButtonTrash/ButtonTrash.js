import styles from './ButtonTrash.module.scss';

export const ButtonTrash = (props) => {
  return (
    <button
      className={'fa fa-trash ' + styles.button}
      type='text'
      onClick={props.handleClick}
    ></button>
  );
};
