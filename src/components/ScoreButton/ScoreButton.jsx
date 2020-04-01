import React from 'react';
import styles from './ScoreButton.module.css'

//arrow function with paranthesis after arrow means implicit return
const ScoreButton = (props) => (
  <button className={styles.button}>
    ✔
  </button>
);

export default ScoreButton;