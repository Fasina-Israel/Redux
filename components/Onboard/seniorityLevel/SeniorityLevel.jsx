import React from 'react';
import styles from './seniorityLevel.module.scss'

const SeniorityLevel = ({ formData, setFormData }) => {
    return (
        <div className={styles.seniorityContainer}>

            <div className={styles.firstSection}>
                <button className={styles.button}>
                    VP/Director
                </button>
                <button className={styles.button}>
                    C-Suite
                </button>
                <button className={styles.button}>
                    Individual Contributor
                </button>
            </div>
            <div className={styles.secondSection}>
                <button className={styles.button}>
                    Team Lead/Manager
                </button>
                <button className={styles.button}>
                    Contractor
                </button>
                <button className={styles.button}>
                    Other
                </button>
            </div>
        </div>


    )
}

export default SeniorityLevel