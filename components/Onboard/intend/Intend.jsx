import React, { useState } from 'react'
import styles from './intend.module.scss'
import { fuziondotonboarding } from '../constant/constants';

const Intend = ({ formData, setFormData }) => {
    const [value, setValue] = useState('');

    const handleAnswer = (answer) => {

        setValue(answer);

        console.log('work');
    }
    return (
        <div className={styles.intendFormContainer}>
            <div className={styles.firstSection}>

                {fuziondotonboarding.questions[0].choices.map((choice, index) => {
                    return (
                        <button
                            onClick={() => {
                                handleAnswer(choice);
                            }}
                            className={styles.button}>
                            {choice}
                        </button>
                    )
                })}
                {/* 

                <button
                    onClick={() => {
                        handleAnswer(answer);
                    }}
                    className={styles.button}>
                    For School/University
                </button>
                <button
                    onClick={() => {
                        handleAnswer(answer);
                    }}
                    className={styles.button}>
                    Personal
                </button> */}
                <ul>

                </ul>
            </div>
            <div className={styles.secondSection}>

            </div>
            <div className={styles.thirdSection}>

            </div>

        </div>

    )
}

export default Intend