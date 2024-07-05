import React from 'react';
import styles from './onboarding.module.scss';
// import Layout from '@/components/layout/page'
import fuziondotLogo from '../../assets/images/utils/FuziondotLogo.png';
import OnboardingForm from '../../../components/onboardingForm/page';

const page = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                    </div>
                </div>
            </div>
            <div className={styles.formSection}>
                <OnboardingForm />
            </div>
        </div>
    )
}

export default page