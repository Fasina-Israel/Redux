"use client"

import React, { useState } from 'react'
import styles from './onboarding.module.scss'
import Intend from '../Onboard/intend/Intend';
import JobTitle from '../Onboard/jobTitle/JobTitle';
import SeniorityLevel from '../Onboard/seniorityLevel/SeniorityLevel';
import Employee from '../Onboard/employee/Employee';
import Industry from '../Onboard/industry/Industry';
import Contact from '../Onboard/contact/Contact';
import FirstLearn from '../Onboard/firstLearn/FirstLearn';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Subtitles } from '@mui/icons-material';
import { fuziondotonboarding } from '../Onboard/constant/constants';

const page = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        contact: "",
        work: '',
        school: '',
        personal: '',
        events: "",
        jobTitle: "",
        searchEngine: "",
        socialMedia: "",
        product: "",
        colleague: "",
        youtube: "",
        articles: "",
        others: "",
        director: "",
        suite: "",
        contributor: "",
        teamLead: "",
        contractor: "",
        seniorityOther: "",
        industry: "",
        seniorityLevel: "",
        firstLearnOthers: ""
    })

    const formTitles = [
        "How do you intend to use Fuziondot?",
        "What is your job title?",
        "What is your seniority level?",
        "How many employee at your company?",
        "Which industry are you in?",
        "What's your contact number?",
        "How did you first learn about Fuziondot?"];

    const subTitles = [
        "Which of the following best describes your usage?",
        "This information helps us identify the best solution for your needs.",
        "Please select the option that best describes your position:",
        "Beyond just your department",
        "This information helps us tailor the best solution for your needs.",
        "You can update it in your settings.",
        "Please select the most relevant option."
    ];

    const PageDisplay = () => {
        if (page === 0) {
            return (
                <Intend formData={formData} setFormData={setFormData} />
            )

        } else if (page === 1) {
            return (
                <JobTitle formData={formData} setFormData={setFormData} />
            )

        } else if (page === 2) {
            return (
                <SeniorityLevel formData={formData} setFormData={setFormData} />
            )

        } else if (page === 3) {
            return (
                <Employee formData={formData} setFormData={setFormData} />
            )

        } else if (page === 4) {
            return (
                <Industry formData={formData} setFormData={setFormData} />
            )

        } else if (page === 5) {
            return (
                <Contact formData={formData} setFormData={setFormData} />
            )

        } else {
            return (
                <FirstLearn formData={formData} setFormData={setFormData} />
            )

        }
    }
    return (
        <div className={styles.form}>
            <div className={styles.progressBarContainer}>
                <div className={styles.progressBar}>
                    <div style={{
                        width: page == 0 ? "14%"
                            : page == 1 ? "28%"
                                : page == 2 ? "42.6%"
                                    : page == 3 ? "56%"
                                        : page == 4 ? "71%"
                                            : page == 5 ? "85%"
                                                : "100%",
                        height: "100%",
                        background: "#6C4DD6"
                    }}>

                    </div>
                </div>
                <div className={styles.tracker}>
                    <div className={styles.backIcon} >
                        <button
                            disabled={page == 0}
                            onClick={() => {
                                setPage((currPage) => currPage + -1)
                            }}>

                            {page === 0 ?
                                ""
                                : <KeyboardBackspaceIcon color='#6C4DD6' />}
                        </button>
                    </div>
                    <div className={styles.number}>
                        {
                            page == 0 ? "1/7" :
                                page == 1 ? "2/7" :
                                    page == 2 ? "3/7" :
                                        page == 3 ? "4/7" :
                                            page == 4 ? "5/7" :
                                                page == 5 ? "6/7" :
                                                    "7/7"
                        }
                    </div>
                </div>
            </div>
            <div className={styles.formContainer}>

            </div>
            <div className={styles.header}>
                <h1>{formTitles[page]}</h1>
            </div>
            <div className={styles.subHeader}>
                <h1>{subTitles[page]}</h1>
            </div>
            <div className={styles.body}>
                {PageDisplay()}
            </div>
            <div className={styles.footer}>
                <button className={styles.nextButton}
                    // disabled={page == formTitles.length - 1}
                    onClick={() => {
                        if (page === formTitles.length - 1) {
                            console.log(formData, 'formData')
                            alert("Form Submitted")
                        } else {
                            setPage((currPage) => currPage + 1)
                        }
                    }}>
                    {page === formTitles.length - 1 ? (<h1>Submit </h1>) : (<h1>Next <span>{'>>'}</span></h1>)}
                </button>
            </div>
        </div>
    )
}

export default page