export const data = {
    about_me: {
        text: "I'm a passionate developer with a background in software engineering and Data Science. I'm currently a student at the Milwaukee School of Engineering, pursuing a degree in Computer Science. I'm always looking for new and exciting projects to work on, and I'm always willing to learn new things.",
        image: "/about-image.jpg"
    },
    experience: [
        // {
        //     title: "Tier 1 Technician",
        //     organization: "Milwaukee School of Engineering",
        //     location: "Milwaukee, WI",
        //     period: "September 2024 - March 2025",
        //     description: [
        //         "Provided front-line support to inbound requests and conducted initial troubleshooting on a wide range of technology issues",
        //         "Provided remote support via telephone and ticketing software and in-person support across campus"
        //     ],
        //     type: "work",
        //     image: "/experiences/msoe.png"
        // },
        {
            title: "Applied AI Intern",
            organization: "Direct Supply",
            location: "Milwaukee, WI",
            period: "March 2025 - Present",
            description: [
                "Built internal tooling to streamline building services operations and improve team efficiency",
                "Developed AI-integrated solutions to automate workflows and embed intelligence into daily processes",
                "Created web applications for sales teams to enable easier access to analytics and decision-making tools",
                "Collaborated with cross-functional teams to scale and maintain machine learning and data-driven tools"
            ],
            type: "work",
            image: "/experiences/directsupply.png"
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
            title: "Computer Science, B.S.",
            organization: "Milwaukee School of Engineering",
            location: "Milwaukee, WI",
            period: "September 2024 - May 2028",
            description: [
                "Relevant Coursework: Software Development, Data Structures, Design and Cloud Patterns, Calculus I & II, Discrete Mathematics",
                "Member of the MSOE Artificial Intelligence Club",
                "Competed in the MSOE AI Club's Innovation Labs, focusing on AI and machine learning projects"
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
        },
        {
            title: "Milwaukee Domes AI Visitor Platform (Hacksgiving 2025)",
            description: "Built an AI-powered mobile visitor engagement platform for the Milwaukee Domes Alliance during the Hacksgiving 2025 hackathon. Delivered a full-stack, production-ready system that enables gamified plant discovery, AI-assisted exploration, and staff management tools that the non-profit could not otherwise afford to build in-house.",
            image: "/projects/hacksgiving-2025.jpg",
            timeline: "November 2025",
            technologies: [
              "React Native",
              "Expo",
              "FastAPI",
              "OpenAI API",
              "Supabase (PostgreSQL)",
              "Auth0",
              "Stripe",
              "Docker",
              "QR Code Systems",
              "Full-Stack Development"
            ],
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7398827591278903297/"
          },
        {
            title: "Real-Time Manufacturing Defect Detection (Innovation Lab)",
            description: "Collaborated with Xorbix Technologies to develop a real-time computer vision system for manufacturing defect detection. Designed a scalable ML pipeline using YOLO-based models, distributed inference with Ray, and live video streaming to deliver sub-second defect classification and analytics across production lines.",
            image: "/projects/xorbix.jpg",
            timeline: "October 2025 - December 2025",
            technologies: [
                "Computer Vision",
                "YOLO",
                "Ray",
                "Databricks",
                "LiveKit",
                "Distributed Systems",
                "Real-Time Inference",
                "ML Pipelines",
                "Operational Analytics"
            ],
            link: "https://msoe-maic.com/library?nav=Competitions&article=Xorbix-Fall-2025"
        },
        {
            title: "BenMed – Medical Report Simplification (Hack-4-Health)",
            description: "Collaborated with the Medical College of Wisconsin to build BenMed, an AI-powered medical report simplification platform during a 3-day hackathon. Designed a full-stack NLP system that transforms complex clinical documents into plain-language summaries while preserving clinical accuracy through multi-stage validation, semantic similarity checks, and citation-backed grounding from peer-reviewed sources.",
            image: "/projects/benmed.png",
            timeline: "January 2026",
            technologies: [
              "Medical NLP",
              "FastAPI",
              "React",
              "TypeScript",
              "UMLS",
              "OpenSearch",
              "LLM Validation",
              "Bio-ClinicalBERT",
              "Information Retrieval",
              "Distributed Processing",
              "Healthcare AI"
            ],
            link: "https://msoe-maic.com"
        }                
    ],
    hero_text: [
        "Creator", 2000, "",
        "Designer", 2000, "",
        "Computer Scientist", 2000, "",
        "Student", 2000, "",
        "Data Scientist", 2000, "",
        "Software Engineer", 2000, "",
        "Full Stack Developer", 2000, "",
        "Intern", 2000, "",
        "Freelancer", 2000, ""
    ],
    certifications: [
        {
            title: "Brady MAIC Innovation Lab",
            image: "/certifications/brady-maic-innovation-lab.jpg",
            link: "https://msoe-maic.com/library?nav=Competitions&article=Brady-Fall-2024"
        },
        {
            title: "Juno MAIC Innovation Lab",
            image: "/certifications/juno-maic-innovation-lab.png",
            link: "https://msoe-maic.com/library?nav=Competitions&article=Juno-Spring-2025"
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