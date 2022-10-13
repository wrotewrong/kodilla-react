import styles from './TextInput.module.scss';

const TextInput = (props) => {
  return (
    <input
      className={styles.input}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type='text'
    />
  );
};

export default TextInput;
