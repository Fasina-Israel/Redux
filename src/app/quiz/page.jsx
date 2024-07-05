"use client"

import React, { useState } from 'react'
import styles from './quiz.module.scss'

const page = ({ questions }) => {

    const [currentQuestions, setCurrentQuestions] = useState(0);

    const { question, choices } = questions[currentQuestions];

    return (
        <div className={styles.body}>
            <div className={styles.quizContainer}>
                <span className={styles.active_questions_no}>
                    {currentQuestions + 1}
                </span>
                <span className={styles.total_questions}>
                    {"/" + questions.length}
                </span>
                <h2>{question}</h2>
                <ul>
                    {choices.map((index))}
                </ul>
            </div>

        </div>
    )
}

export default page;