import React from 'react';
import EducationCard from './EducationCard';

function Education() {
    const educationData = [
        {
            institution: "Universidad Catolica Boliviana 'San Pablo'",
            title: "Professional Degree in Software Systems Engineering",
            duration: "February 2019 - November 2023",
            achivements: [
                "Graduated with honors with an average grade of 87 out of 100",
                "Competed at the ICPC-Bolivia 2022 regional contest with the CodeRunners Team",
                "Finalist in the Competitive Programing Contest sponsored by AzureSoft Digital Academy"
            ],
            documents: [
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742658625/web-portfolio/education-documents/Titulo-provision_nacional_ystwhm.jpg",
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742658404/web-portfolio/education-documents/Licenciatura_UCB_Diego_page-0001_yxfbse.jpg",
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742657091/web-portfolio/education-documents/reporte_ucb_page-0001_uofhih.jpg",
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742657117/web-portfolio/education-documents/reporte_ucb_page-0002_dyfhzr.jpg",
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742657130/web-portfolio/education-documents/reporte_ucb_page-0003_rlfnna.jpg",
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742657257/web-portfolio/education-documents/reporte_ucb_page-0004_awrgzc.jpg",
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742657263/web-portfolio/education-documents/reporte_ucb_page-0005_hatrkr.jpg"
            ]
        },
        {
            institution: "Codigo Facilito",
            title: "Profesional Node.js Course",
            duration: "February 2025",
            achivements: [
                "Learned about the basics of Node.js as well as how DB integration works, error handling, data validation and security",
                "Built a backend project using Node.js and Express to manage post from a social network",
            ],
            documents: [
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742662313/web-portfolio/education-documents/Certificado-CursoNodejs_rmn3vd.jpg"
            ]
        },
        {
            institution: "Codigo Facilito",
            title: "Github Actions Course",
            duration: "February 2025",
            achivements: [
                "Built a GitHub Actions workflow to automatically test, build, and deploy a API project",
            ],
            documents: [
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742662381/web-portfolio/education-documents/Curso-GithubActions_dkxesx.jpg"
            ]
        },
        {
            institution: "Digital Academy AzureSoft",
            title: "Second Place at the Programming Contest",
            duration: "September 2022",
            achivements: [
                "Competed with my team, 'Coderunners', in the competition organized by Azuresoft.",
                "Got the second place in the competition and allowed us to compete at the ICPC-Bolivia 2022 regional contest",
            ],
            documents: [
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742658794/web-portfolio/education-documents/ConcursoProgra-AssureSoft-2doLugar_fzpjcp.jpg"
            ]
        },
        {
            institution: "React Tutorial App",
            title: "React Tutorial Course",
            duration: "November 2024",
            achivements: [
                "Completed the React Tutorial course learning the basics of React and how to build a simple app",
            ],
            documents: [
                "https://res.cloudinary.com/dho0rif9d/image/upload/v1742662193/web-portfolio/education-documents/Curso-cursoReact_yiyqip.jpg"
            ]
        },
    ]
    return (<>
        <section id="education" className='mt-10 scroll-mt-20'>
            <h1>Education and Achievements</h1>
            <div className='flex flex-col gap-5 mt-10 lg:flex-row flex-wrap justify-center'>
                {educationData.map((education, index) => {
                    return <EducationCard education={education} index={index} />
                })}
            </div>
        </section>
    </>);
}

export default Education;