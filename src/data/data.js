// import WorkIm from '../assets/projects/workImg.jpeg'
// import RealEst from '../assets/projects/realestate.jpg'
import PowerOutage from '../assets/projects/PowerOutage.png'
import Health from '../assets/projects/Health.png'
import Crimes2 from '../assets/projects/Crimes2.png'
import RMIT from '../assets/projects/RMIT.png'
import Alexa from '../assets/projects/Alexa.jpg'
import Azureasl from '../assets/projects/Azureasl.png'
import Covid from '../assets/projects/Covid.png'
import Datadisca from '../assets/projects/Datadisca.png'
import Superstore2 from '../assets/projects/Superstore2.png'
import Covidstoryboard from '../assets/projects/Covidstoryboard.jpg'
import Nlp from '../assets/projects/Nlp.png'
import Hpe from '../assets/projects/Hpe.png'



export const projects = [
    {
        title: "U.S Power Outage",
        image: PowerOutage,
        github: "https://github.com/srisainee/Power-Outage",
        description: 'The analysis unravels the story behind the flickering lights, sudden darkness, and the determined efforts to keep the nation powered, tracing the ebb and flow of electricity over the past 2 decades',
        skill: 'Tableau, Data Wrangling, Data Visualization, Statistics'
    },
    {
        title: "U.S HCAHPS Survey Analysis",
        image: Health,
        github: "https://github.com/srisainee/HCAHPS-Patient-Survey",
        description: 'The analysis examins the factors influencing the rankings of hospitals across the states',
        skill: 'Tableau, Data Wrangling, Data Visualization, Statistics'
    },
    {
        title: "Crimes Statistics of Victoria",
        image: Crimes2,
        live: "https://littlebravesri.shinyapps.io/Crimes/?_ga=2.186900512.902303536.1602752634-734726441.1602752634",
        description: 'R Shiny Visualization to report the crime rates of the state.\nEnhanced the earlier version deployed on Shiny Apps, addressing flaws and showcasing growth in the updated version in Tableau',
        skill: 'R, Data Visualization, Shiny app'
    },
    {
        title: "Modelling Recyclable Materials Collected and Recycled of Victoria",
        image: RMIT,
        description: 'Capstone Project with Sustainability Victoria that visualizes the past, and the predicted values for waste collected and recycled for the councils in Victoria',
        skill: 'Python, Data Analysis, Data Pre-processing, Data Visualization, Machine Learning, Agile/Scrum, Time Series Analysis'
    },
    {
        title: "AI Powered Voice Assistance for Museum of London",
        image: Alexa,
        description: 'Making Alexa to brief daily tasks to Building Management Facility staff to enable easy shift handovers and a stress free shift',
        skill: 'API call, AWS, Python, Requirement Elicitation and Documentation'
    },
    {
        title: "American Sign Language to Speech",
        image: Azureasl,
        description: 'Converting American sign Language to Text and Speech using Azure Services',
        skill: 'Azure, Azure ML Studio,Azure Cognitive Services, Azure App Services, Object detection, Image classification, Machine Learning, HTML, CSS, JavaScript, Flask, Python, API Calls'
    },
    {
        title: "COVID-19 Analysis with PowerBI",
        image: Covid,
        github: "https://github.com/srisainee/COVID19_Dasboard",
        description: 'A PowerBI Dashboard to visualise and analyse the daily numbers of various aspects related to COVID-19',
        skill: 'Data Analysis, Data Visualization, Data Pre-processing, PowerBI'
    },
    {
        title: "Trainee Data Scientist",
        image: Datadisca,
        github: "https://github.com/srisainee/django_api1",
        description: 'Django Restful API Web App',
        skill: 'Django REST Framework, API Calls'
    },
    {
        title: "Sample Super Store Business Analysis with PowerBI",
        image: Superstore2,
        github: "",
        powerbi: "https://github.com/srisainee/TheSparksFoundation/blob/main/BusinessReport.pdf",
        description: 'Dashboard to visualise and analyse the sales and profit performance of the Super Store in different categories, segment and region.\nEnhanced the earlier version deployed on PowerBI, addressing flaws and showcasing growth in the updated version in Tableau',
        skill: 'Data Analysis, Data Visualization, Data Pre-processing, PowerBI'
    },
    {
        title: "COVID-19 Storyborad with Tableau",
        image: Covidstoryboard,
        github: "https://github.com/srisainee/TheSparksFoundation", 
        description: 'Performed storytelling by interactive graphs enabling easy analysis',
        skill: 'Data Analysis, Data Visualization, Data Pre-processing, Tableau'
    },
    {
        title: "Stance Classification",
        image: Nlp,
        github: "https://github.com/srisainee/StanceClassification", 
        description: `Stance classification is the task of classifying the tweet based on whether the tweet is 'For' or 'Against' a given target topic. It is independent of the opinion (positive/negative) of that text`,
        skill: 'Data Analysis, Data Visualization, Data Pre-processing, Python, Natural Language Processing, LSTM, Tensorflow, Keras'
    },
    {
        title: "Head Pose Estimation",
        image: Hpe,
        github: "https://github.com/srisainee/HeadPoseClassification", 
        description: `This assignment is related to the head pose estimation where the goal is to develop a Deep Convolutional Neural Network to identify the head pose. Given an image of a person, classifying the images based on the tilt and pan of the head`,
        skill: 'CNN, Deep Learning, Image classification, Tensorflow, Keras, Python'
    },


]