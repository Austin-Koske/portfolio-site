export const data = {
    about_me: {
        text: "I'm a Computer Science student at the Milwaukee School of Engineering focused on building real-world AI systems and scalable backend infrastructure. I've worked on projects ranging from large-scale data pipelines and NLP models to distributed homelab infrastructure with Proxmox, Kubernetes, and CI/CD automation. I'm especially interested in applying machine learning and systems engineering to solve complex, high-impact problems, and I'm always building something new.",
        image: "/about-image.jpg"
    },
    experience: [
        {
            title: "Applied AI Intern",
            organization: "Direct Supply",
            location: "Milwaukee, WI",
            period: "March 2025 - Present",
            description: [
                "Built internal tooling to automate building services workflows, reducing manual overhead for operations teams",
                "Developed web applications giving sales teams direct access to analytics data previously siloed in manual reports",
                "Integrated ML models into production workflows, moving analysis from ad-hoc scripts to automated systems",
                "Maintained and scaled data-driven tools used daily across cross-functional teams"
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
                "Built production software for clients including data aggregation systems, e-commerce tooling, and custom automation",
                "Owned full project lifecycle: requirements, architecture, implementation, and deployment"
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
                "Relevant Coursework: Software Development, Data Structures, Design and Cloud Patterns, Discrete Mathematics",
                "Member of the MSOE Artificial Intelligence Club"
            ],
            type: "education",
            image: "/experiences/msoe.png"
        }
    ],
    projects: [
        {
            title: "Arcturus Services",
            tagline: "Real-time market search over 4M+ Growtopia marketplace listings",
            image: "/projects/arcturus-services.jpg",
            timeline: "October 2023 – September 2025",
            link: "https://arcturusgt.xyz",
            sections: {
                problem: "Growtopia is a sandbox MMO with a fully player-driven economy spanning 270,000+ active worlds and millions of daily marketplace listings. No centralized price discovery existed. Players relied on manually searching unstructured Discord channels filled with abbreviated, typo-ridden listing messages—high noise, no signal.",
                systemDesign: "Discord bot (Pycord) receives user queries and routes to an NLP classification pipeline that parses raw listing messages to extract item names, prices, and quantities. Extracted data is written to PostgreSQL (4M+ records), indexed for sub-second lookup. Ingestion runs continuously, consuming marketplace channels across the network. Query serving is decoupled from ingestion—reads hit indexed tables independently of ongoing writes.",
                challenges: [
                    "NLP accuracy on noisy text: game-specific abbreviations, misspellings, and multi-item bundles required domain-adapted training data and multiple iteration cycles to reach usable precision",
                    "Query performance at scale: sub-second latency across 4M+ records required indexing strategy tuning, query plan analysis, and denormalization tradeoffs to avoid full table scans",
                    "Write/read contention during high-volume ingestion: batching writes and tuning PostgreSQL connection pooling prevented ingestion from degrading live query performance",
                    "Staleness management: marketplace listings expire and change; timestamp-based eviction logic and staleness thresholds prevent stale price data from reaching users"
                ],
                impact: [
                    "4M+ marketplace listings indexed and queryable in real time",
                    "270,000+ player worlds covered by continuous data ingestion",
                    "Sub-second search response times across millions of records",
                    "Active daily user base querying market prices and item availability"
                ]
            }
        },
        {
            title: "Real-Time Manufacturing Defect Detection",
            tagline: "Distributed ML inference pipeline for live production line defect classification",
            image: "/projects/xorbix.jpg",
            timeline: "October 2025 – December 2025",
            link: "https://msoe-maic.com/library?nav=Competitions&article=Xorbix-Fall-2025",
            sections: {
                problem: "Xorbix Technologies needed to replace manual visual inspection on manufacturing production lines. Defects caught late cost significantly more to fix. Batch ML inference was too slow—lines required sub-second classification to halt production before defective parts moved downstream to assembly.",
                systemDesign: "Live camera feeds stream via LiveKit → frames routed to YOLO inference nodes → Ray distributes inference load across a worker pool → classification results stream to a Databricks analytics pipeline → operational dashboard surfaces defect rates and line performance. Scaling to additional camera feeds requires only adding Ray workers—no changes to inference logic or analytics layers.",
                challenges: [
                    "Sub-second latency under concurrent multi-feed load: Ray worker pool sizing and task routing required tuning to prevent queue buildup when multiple lines spiked simultaneously",
                    "Class imbalance: defects are rare by definition; training data skew caused the initial model to predict 'no defect' on borderline cases—addressed through oversampling, augmentation, and confidence threshold tuning",
                    "Lighting variation and motion blur across production environments degraded confidence scores; preprocessing normalization was added to stabilize inference quality",
                    "Frame drop vs. latency tradeoff: under sustained load, the system needed to choose between processing every frame (latency risk) or dropping frames (coverage risk)—implemented adaptive backpressure at ingestion"
                ],
                impact: [
                    "Sub-second defect classification across live production camera feeds",
                    "Horizontally scalable distributed inference—additional production lines require only new Ray workers",
                    "Streaming analytics pipeline on Databricks enabling real-time defect trend analysis",
                    "1st place, MSOE AI Club Innovation Lab (Xorbix Technologies, Fall 2025)"
                ]
            }
        }
    ],
    other_projects: [
        {
            title: "Juno Tax Platform",
            description: "Collaborated with Juno Tax to build an AI-powered tax preparation platform for tax professionals. Architected a microservices backend with FastAPI, PostgreSQL + pgvector for semantic search across the full Title 26 U.S. Tax Code, and a multi-agent orchestration layer using Microsoft AutoGen with Gemini and GPT-4.",
            timeline: "February 2025 – April 2025",
            link: "https://msoe-maic.com/library?nav=Competitions&article=Juno-Spring-2025",
            tags: ["FastAPI", "PostgreSQL", "pgvector", "AutoGen", "Gemini", "GPT-4"]
        },
        {
            title: "LiquidLens",
            description: "Collaborated with Brady Corporation to build an AI pipeline for liquid container fullness detection using SAM2, DINOv2, and Depth Pro for segmentation and depth estimation. Secured 2nd place in the MSOE AI Club Innovation Lab.",
            timeline: "October 2024 – December 2024",
            link: "https://msoe-maic.com/library?nav=Articles&article=Fun%20with%20Liquids",
            tags: ["Computer Vision", "PyTorch", "SAM2", "DINOv2", "Anomaly Detection"]
        },
        {
            title: "Milwaukee Domes Visitor Platform",
            description: "Built a full-stack mobile visitor engagement platform for the Milwaukee Domes Alliance during Hacksgiving 2025. Delivered gamified plant discovery, AI-assisted exploration, and staff management tools in 48 hours.",
            timeline: "November 2025",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7398827591278903297/",
            tags: ["React Native", "FastAPI", "Supabase", "Auth0", "Stripe"]
        },
        {
            title: "BenMed",
            description: "Built a medical report simplification platform with the Medical College of Wisconsin during Hack-4-Health 2026. Full-stack NLP pipeline (React + FastAPI) with 7-stage validation architecture, UMLS Metathesaurus grounding (3.4M+ concepts), citation-backed simplification via Exa AI, and Bio-ClinicalBERT semantic similarity verification.",
            timeline: "January 2026",
            link: "https://msoe-maic.com",
            tags: ["FastAPI", "React", "OpenSearch", "UMLS", "Bio-ClinicalBERT"]
        }
    ],
    hero_text: [
        "Software Engineer", 2000, "",
        "Systems Builder", 2000, "",
        "Data Engineer", 2000, "",
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
