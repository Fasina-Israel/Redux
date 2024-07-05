import React from 'react';
import styles from './jobTitle.module.scss'

const JobTitle = ({ formData, setFormData }) => {
    return (
        <>

            <div className={styles.jobTitleContainer}>
                <div className={styles.firstSection}>
                    <input
                        className={styles.input}
                        placeholder='Input your Job title'
                        type="text" value={formData.jobTitle}
                        onChange={(event) => setFormData({ ...formData, jobTitle: event.target.value })} />
                </div>
                <div className={styles.secondSection}>

                </div>
              

            </div>

        </>
    )
}

export default JobTitle