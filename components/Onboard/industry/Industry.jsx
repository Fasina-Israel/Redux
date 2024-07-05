import React from 'react';
import styles from './industry.module.scss'

const Industry = ({ formData, setFormData }) => {
    return (
        <>
            <div className={styles.industryContainer}>
                <div className={styles.firstSection}>
                    <input
                        className={styles.input}
                        placeholder='search' value={formData.industry}
                        onChange={(event) => setFormData({ ...formData, industry: event.target.value })} />
                </div>
                <div className={styles.secondSection}>

                </div>
            </div>
        </>

    )
}

export default Industry