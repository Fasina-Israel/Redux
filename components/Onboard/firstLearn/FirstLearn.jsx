import React from 'react';
import styles from './firstLearn.module.scss'

const FirstLearn = ({ formData, setFormData }) => {
    return (
        <>

            <div className={styles.firstLearnContainer}>
                <div className={styles.firstSection}>
                    <button className={styles.button}>
                        Event / Webinar
                    </button>
                    <button className={styles.button}>
                        Search engine (Google, etc...)
                    </button>
                    <button className={styles.button}>
                        Social media
                    </button>
                </div>
                <div className={styles.secondSection}>
                    <button className={styles.button}>
                        Product review site
                    </button>
                    <button className={styles.button}>
                        Colleague Recommendation
                    </button>
                    <button className={styles.button}>
                        YouTube ad / Podcast
                    </button>
                </div>
                <div className={styles.thirdSection}>
                    <button className={styles.button}>
                        Articles / News / Billboard
                    </button>
                    <button className={styles.button}>
                        Other
                    </button>
                    {/* <button className={styles.button}>
                        Other
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default FirstLearn