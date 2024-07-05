import React from 'react'
import styles from './contact.module.scss'

const Contact = ({ formData, setFormData }) => {
    return (
        <>
            <div className={styles.contactContainer}>
                <div className={styles.firstSection}>
                    <input
                        className={styles.input}
                        placeholder='+234' value={formData.industry}
                        onChange={(event) => setFormData({ ...formData, industry: event.target.value })} />
                </div>
                <div className={styles.secondSection}>
                    <input
                        className={styles.input}
                        placeholder='example +123' value={formData.industry}
                        onChange={(event) => setFormData({ ...formData, industry: event.target.value })} />

                </div>
            </div>

        </>

    )
}

export default Contact