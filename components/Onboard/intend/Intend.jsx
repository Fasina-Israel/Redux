import React, { useState } from 'react'
import styles from './intend.module.scss'
import { fuziondotonboarding } from '../constant/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setFormaData } from '@/store/onboardSlice';

const Intend = ({ }) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const { formData } = useSelector(state => state.onboard)
    // console.log(state)
    const handleAnswer = (question, answer) => {
        dispatch(setFormaData({ question, answer }))
    }
    const question = fuziondotonboarding.questions[0].question
    return (
        <div className={styles.intendFormContainer}>
            <div className={styles.firstSection}>

                {fuziondotonboarding.questions[0].choices.map((choice, index) => {
                    return (
                        <button
                            onClick={() => {
                                handleAnswer(question, choice);
                            }}
                            className={`${styles.button} ${formData[question] === choice ? styles.button_selected : ''}`}
                        >
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