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
        description: 'Unravelling the story behind the flickering lights and sudden darkness, tracing the ebb and flow of electricity over the past 2 decades',
        skill: 'Tableau, Data Wrangling, Data Visualization, Statistics'
    },
    {
        title: "U.S HCAHPS Survey Analysis",
        image: Health,
        github: "https://github.com/srisainee/HCAHPS-Patient-Survey",
        description: 'Examining the factors influencing the rankings of hospitals across the states',
        skill: 'Tableau, Data Wrangling, Data Visualization, Statistics'
    },
    {
        title: "Crimes Statistics of Victoria",
        image: Crimes2,
        tableau: 'https://public.tableau.com/app/profile/sri.sainee.thirumurugan/viz/Crimes_17133901842910/VCS',
        live: "https://littlebravesri.shinyapps.io/Crimes/?_ga=2.186900512.902303536.1602752634-734726441.1602752634",
        description: 'Elucidating historical trends and societal patterns in criminal activity in Victoria in 2023.\nEnhanced the earlier version deployed on Shiny Apps, addressing flaws and showcasing growth in the updated version in Tableau',
        skill: 'R, Data Visualization, Shiny app, Tableau'
    },
    {
        title: "Modelling Recyclable Materials Collected and Recycled of Victoria",
        image: RMIT,
        description: 'Capstone Project with Sustainability Victoria that visualizes the past, and predicts the amount of waste to be collected and recycled in the Victorian councils',
        skill: 'Python, Data Analysis, Data Pre-processing, Data Visualization, Machine Learning, Agile/Scrum, Time Series Analysis'
    },
    {
        title: "AI Powered Voice Assistance for Museum of London",
        image: Alexa,
        description: 'Programming Alexa to brief daily tasks to Building Management Facility staff to enable easy shift handovers and a stress-free shift',
        skill: 'API call, AWS, Python, Requirement Elicitation and Documentation'
    },
    {
        title: "Real-time American Sign Language Translation",
        image: Azureasl,
        github: "https://github.com/srisainee/ASL-to-Speech",
        description: 'Converting real-time sign language gestures into text and speech',
        skill: 'Azure, Azure ML Studio, Azure Cognitive Services, Azure App Services, Object detection, Image classification, Machine Learning, HTML, CSS, JavaScript, Flask, Python, API Calls'
    },
    {
        title: "COVID-19 Analysis",
        image: Covid,
        github: "https://github.com/srisainee/COVID19_Dasboard",
        description: 'Offering real-time insights into daily COVID-19 metrics',
        skill: 'Data Analysis, Data Visualization, Data Pre-processing, PowerBI'
    },
    {
        title: "Trainee Data Scientist",
        image: Datadisca,
        github: "https://github.com/srisainee/django_api1",
        description: 'Developing a web app using Django Restful API ',
        skill: 'Django REST Framework, API Calls'
    },
    {
        title: "Sample Super Store Business Analysis",
        image: Superstore2,
        tableau: "https://public.tableau.com/views/SampleSuperstoreBusinessInsights/SuperStoreInsights?:language=en-GB&:sid=&:display_count=n&:origin=viz_share_link",
        powerbi: "https://github.com/srisainee/TheSparksFoundation/blob/main/BusinessReport.pdf",
        description: 'Visualizing sales and profit performance by category, segment, and region for the Super Store.\nEnhanced the earlier version deployed on PowerBI, addressing flaws and showcasing growth in the updated version in Tableau',
        skill: 'Data Analysis, Data Visualization, Data Pre-processing, PowerBI'
    },
    {
        title: "COVID-19 Storyborad",
        image: Covidstoryboard,
        github: "https://github.com/srisainee/TheSparksFoundation", 
        description: 'Interactive graphs narrate the COVID-19 journey, from outbreak to vaccination',
        skill: 'Data Analysis, Data Visualization, Data Pre-processing, Tableau'
    },
    {
        title: "Stance Classification",
        image: Nlp,
        github: "https://github.com/srisainee/StanceClassification", 
        description: `Classifying the tweet based on whether the tweet is 'For' or 'Against' a given target topic`,
        skill: 'Python, Natural Language Processing, LSTM, Tensorflow, Keras'
    },
    {
        title: "Head Pose Estimation",
        image: Hpe,
        github: "https://github.com/srisainee/HeadPoseClassification", 
        description: `Utilizing Deep Convolutional Neural Networks to estimate head position from images with tilt and pan`,
        skill: 'CNN, Deep Learning, Image classification, Tensorflow, Keras, Python'
    },


]