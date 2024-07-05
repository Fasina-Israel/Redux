import React from 'react';
import styles from './employee.module.scss'

const Employee = ({ formData, setFormData }) => {
    return (
        <>

            <div className={styles.employeeContainer}>
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
                        VP/Director
                    </button>
                    <button className={styles.button}>
                        C-Suite
                    </button>
                    <button className={styles.button}>
                        Individual Contributor
                    </button>
                </div>
                <div className={styles.thirdSection}>
                    <button className={styles.button}>
                        VP/Director
                    </button>
                   
                </div>

            </div>
        </>
    )
}

export default Employee