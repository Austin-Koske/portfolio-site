export const data = {
    about_me: {
        text: "I'm a passionate developer with a background in software engineering and Data Science. I'm currently a student at the Milwaukee School of Engineering, pursuing a degree in Computer Science. I'm always looking for new and exciting projects to work on, and I'm always willing to learn new things.",
        image: "/about-image.jpg"
    },
    experience: [
        {
            title: "Tier 1 Technician",
            organization: "Milwaukee School of Engineering",
            location: "Milwaukee, WI",
            period: "September 2024 - Present",
            description: [
                "Provided front-line support to inbound requests and conducted initial troubleshooting on a wide range of technology issues",
                "Provided remote support via telephone and ticketing software and in-person support across campus"
            ],
            type: "work",
            image: "/experiences/msoe.png"
        },
        {
            title: "Freelance Software Developer",
            organization: "Self-Employed",
            location: "Lake in the Hills, IL",
            period: "January 2020 - Present",
            description: [
                "Successfully developed solutions for data aggregation, product sales, and other tailored projects, delivering scalable and efficient results",
                "Worked closely with clients to translate personal needs into robust applications, consistently meeting deadlines and exceeding expectations"
            ],
            type: "work",
            image: "/experiences/freelance.png"
        },
        {
            title: "Data Science Intern",
            organization: "Direct Supply",
            location: "Milwaukee, WI",
            period: "March 2025 - Present",
            description: [
                "Developed data pipelines, statistical models, and dashboards to support healthcare technology initiatives and business insights",
                "Collaborated with agile teams to build and maintain machine learning tools and cloud-based analytics solutions"
            ],
            type: "work",
            image: "/experiences/directsupply.png"
        },        
        {
            title: "Computer Science, B.S.",
            organization: "Milwaukee School of Engineering",
            location: "Milwaukee, WI",
            period: "2024 - 2028",
            description: [
                "GPA: 3.47",
                "Relevant Coursework: Software Development,Data Structures, Design and Cloud Patterns, Calculus I & II, Discrete Mathematics",
                "Member of the MSOE Artificial Intelligence Club"
            ],
            type: "education",
            image: "/experiences/msoe.png"
        }
    ],
    projects: [
        {
          title: "Arcturus Services",
          description: "Arcturus Services is a high-performance Discord bot for Growtopia, built with Pycord, SQL, JavaScript, and TypeScript. It enables fast searches across 4M marketplaces in 270K player worlds. Using NLP-powered models, Discord marketplace item listings are analyzed in real time for item names, prices, and more.",
          image: "/projects/arcturus-services.jpg",
          timeline: "October 2023 - Present",
          technologies: [
            "Pycord",
            "SQL",
            "JavaScript",
            "TypeScript",
            "NLP",
            "Machine Learning",
            "Real-Time Processing",
            "Discord Bot Development",
            "Database Optimization"
          ],
          link: "https://arcturusgt.xyz"
        },
        {
          title: "LiquidLens - MSOE Artificial Intelligence Club",
          description: "Collaborated with Brady Corporation to develop an AI system for liquid container fullness detection using 3D object generation and anomaly detection. Designed an AI pipeline with SAM2, DINOv2, and Depth Pro, securing 2nd place in the Innovation Lab for technical excellence.",
          image: "/projects/liquidlens.jpg",
          timeline: "October 2024 - December 2024",
          technologies: ["Computer Vision",
            "PyTorch",
            "Depth Estimation",
            "Segmentation",
            "Self-Supervised Learning",
            "DINOv2",
            "SAM2",
            "Anomaly Detection",
            "AI Pipeline"
            ],
          link: "https://msoe-maic.com/library?nav=Articles&article=Fun%20with%20Liquids"
        }
    ],
    hero_text: [
        "Developer", 2000, "",
        "Creator", 2000, "",
        "Designer", 2000, "",
        "Computer Scientist", 2000, "",
        "Student", 2000, "",
        "Data Scientist", 2000, "",
        "Software Engineer", 2000, "",
        "Full Stack Developer", 2000, "",
    ],
    certifications: [
        {
            title: "Brady MAIC Innovation Lab",
            image: "/certifications/brady-maic-innovation-lab.jpg",
            link: "https://msoe-maic.com/library?nav=Articles&article=Fun%20with%20Liquids"
        }
    ],
    footer: {
        name: "Austin Koske",
        text: "\"If it works, don't ask why\"",
        connections: [
            {
                name: "GitHub",
                link: "https://github.com/akoske68"
            },
            {
                name: "LinkedIn",
                link: "https://linkedin.com/in/austin-koske"
            },
            {
                name: "Email",
                link: "mailto:austin@austinkoske.com"
            }
        ],
        navigation: [
            {
                name: "About",
                link: "/#about"
            },
            {
                name: "Projects",
                link: "/#projects"
            },
            {
                name: "Certifications",
                link: "/#certifications"
            },
            {
                name: "Contact",
                link: "/#contact"
            }
        ]
    }
}