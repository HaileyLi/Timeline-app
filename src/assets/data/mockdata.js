 const mockData=[
    
    {
        "id": "a1",
        "date": "20200601",
        "startDate": "20150901",
        "category": "Academic",
        "cateCode": "ST",
        "brief": "Bachelor of Mathematics",
        "school": "University of Waterloo",
        "major": "Statistics, Computational Mathematics, Computer Science",
        "bulletPoints": [
            "Probabilities", "Linear Models", "Mixed Models", "Classifications", "Regression", "Simulations", "Time Series Analysis", "Spatial Data Analysis",
"Statistical Learning", "Data Visualization", "Sampling and Experimental Design","Computational Linear Algebra", "Interpolation", "Discrete Fourier Transforms", "Numerical Integration", "Computational Inference",
"Algorithm Design", "Data Abstraction", "Data Types and Structures", "Object-Oriented Software Development", "Computer Organization and Design", "Database Design and Programming", "Machine Learning", "Differential Equations"
        ]
    },
    {
        "id": "a2",
        "date": "20220501",
        "startDate": "20210901",
        "category": "Academic",
        "cateCode": "ST",
        "brief": "Master of Science",
        "school": "University of Sheffield",
        "major": "MSC. Data Science",
        "bulletPoints": [
            "Research social media", "Sentiment analysis", "Content analysis", "Data mining", "Database Design (Oracle and MongoDB)", "User-Centred Design and Human-Computer Interaction", "Data visualization"
        ]
    },
    {
        "id": "w1",
        "date": "201608025",
        "endDate": "20161220",
        "category": "Work",
        "cateCode": "WK",
        "company": "Ontario Institution for Cancer Research",
        "position": "Visual Designer and Themer (Co-op, full-time)",
        "location": "Canada",
        "bulletPoints": [
            "Set up Virtual Box, Macfusion, phpMyAdmin, LAMP server, Drupal.",
            "Implemented responsive website development using HTML, CSS, Bootstrap.",
            "Did browser compatibility testing, functionality testing and accessibility testing for websites.",
            "Participated in whole web development procedure, including user persona analysis, user scenario analysis, sitemap design, wireframe design\, mockup design and static website development and integration.",
            "Scheduled and delivered co-op training presentations and documentation."
        ],
        "companyLogo": require("../img/pic2016/work/OICRlogo2.png")
    },
    {
        "id": "w2",
        "date": "20170501",
        "endDate": "20170831",
        "category": "Work",
        "cateCode": "WK",
        "company": "Accenture",
        "position": "Engineer Associate (Co-op, full-time)",
        "location": "China",
        "bulletPoints": [
            "Implemented website changes by using HTML, CSS, AJAX, Vue.JS, Visual Studio.",
            "Researched on user experience optimization and analysis by building data models and visualizations."
        ],
        "companyLogo": require("../img/pic2017/work/acc2.png")
    },
    {
        "id": "w3",
        "date": "20180103",
        "endDate": "20180430",
        "category": "Work",
        "cateCode": "WK",
        "company": "Great-west Life/Canada Life/London Life",
        "position": "Front-end Developer (Co-op, full-time)",
        "location": "Canada",
        "bulletPoints": [
            "Integrated Google Analytics and conduct analysis of event website.",
            "Built websites using HTML, SASS, CSS, Javascript, jQuery, JSON, CMS Adobe Experience Manager.",
            "Worked with Accessibility for Ontarians with Disabilities Act (AODA), debugged and implemented features that benefits screen readers."
        ],
        "companyLogo": require("../img/pic2018/work/gwlpic.png")
    },
    {
        "id": "w4",
        "date": "20180901",
        "endDate": "20181220",
        "category": "Work",
        "cateCode": "WK",
        "company": "University of Waterloo",
        "position": "Web Developer (Co-op, full-time)",
        "location": "Canada",
        "bulletPoints": [
            "Analysed, designed, developed and tested of usable, accessible WCMS powered by CMS Drupal.",
            "Supported WCMS issue tracking system, integrated WCMS with open data web services.",
            "Handed over WCMS development to clients/users, including documentation, installation, and testing, integration with other system.",
            "Implemented website features using PHP, HTML/CSS/JS, applied and created Drupal patch."
        ],
        "companyLogo": require("../img/pic2018/work/uwlogo.png")
    },
    {
        "id": "w5",
        "date": "20190103",
        "endDate": "20190501",
        "category": "Work",
        "cateCode": "WK",
        "company": "Kenna",
        "position": "Web Developer (Co-op, full-time)",
        "location": "Canada",
        "bulletPoints": [
            "Created and edited websites using jQuery, Javascript, AJAX, SQL, LotusScript, IBM notes, IBM Domino Designer, HTML, CSS, React, Redux.",
            "Implemented log monitoring application enalbing auto JIRA ticket creation and analysis.",
            "Implemented event management app serves as a platform for users to create, invite, issue emails and surveys, built registration websites, monitor registration counts and view report."
        ],
        "companyLogo": require("../img/pic2019/work/kennalogo2.png")
    },
    {
        "id": "w6",
        "date": "20200701",
        "endDate": "20200901",
        "category": "Work",
        "cateCode": "WK",
        "company": "Facilitate Settlement Corporation",
        "position": "Web developer / Designer (Contractor, full-time)",
        "location": "Canada",
        "bulletPoints": [
            "Upgraded and improved company website SEO, and tracked statistics using Google Analytics and Google AdWords.",
            "Maintained company websites using PHP, NodeJS, phpMyAdmin, HTML/CSS/JS, AngularJS, MySQL.",
            "Developed new customer relationship system using ReactJS, Redux, NodeJS, ExpressJS, MongoDB, REST API.",
            "Maintained and troubleshoot EC2 AWS server instance, Godaddy domain services and email hosting, Local Area Networks, Wide Area Networks."
        ],
        "companyLogo": require("../img/pic2020/settlement.jpg")
    },
    {
        "id": "w7",
        "date": "20210101",
        "endDate": "20210801",
        "category": "Work",
        "cateCode": "WK",
        "company": "Fidelity International",
        "position": "Software Engineer (Permanent, full-time)",
        "location": "China",
        "bulletPoints": [
            "Developed secure website as a full-stack developer using ReactJS, SASS, Redux, JAVA Spring Boot, Oracle DB for annuity management and simulating calculator for customers.",
            "Implemented Rest API by using JAVA Spring Boot and deployed using cloud services."
        ],
        "companyLogo": require("../img/pic2016/work/OICRlogo2.png")
    },
    {
        "id": "w8",
        "date": "20151001",
        "endDate": "20160901",
        "category": "Work",
        "cateCode": "WK",
        "company": "Packants",
        "position": "Front-end Developer",
        "location": "Canada",
        "bulletPoints": [
            "Designed and implement mockups/icons/animations by using CSS, HTML, JavaScript, Adobe Photoshop, Illustrator and After Effects",
            "Increased ability of cooperating with colleagues by using Github. Learned to share progress by using Slack, Trello and Invision."
        ],
        "companyLogo": require("../img/pic2015/packantslogo2.png")
    },
    {
        "id": "j1",
        "date": "20190601",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Photoshop Practices",
        "imgList": [
            {
                "imgSrc": require("../img/pic2014/photoshop/ps1.jpg"),
                "description": "Virtual Reality"
            },{
                "imgSrc": require("../img/pic2014/photoshop/ps7.jpg"),
                "description": "Real-life and painting"
            },
            {
                "imgSrc": require("../img/pic2014/photoshop/ps8.jpg"),
                "description": "Digital drawing"
            },
            {
                "imgSrc": require("../img/pic2014/photoshop/ps2.jpg"),
                "description": "2D and 3D merging"
            },{
                "imgSrc": require("../img/pic2014/photoshop/ps3.jpg"),
                "description": "Flash font design"
            },
            {
                "imgSrc": require("../img/pic2014/photoshop/ps4.jpg"),
                "description": "Cookie font design"
            },{
                "imgSrc": require("../img/pic2014/photoshop/ps5.jpg"),
                "description": "Logo design"
            },
            {
                "imgSrc": require("../img/pic2014/photoshop/ps6.jpg"),
                "description": "Fold effect"
            }
        ]
    },
    {
        "id": "j2",
        "date": "20210401",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Procreate drawing",
        "imgList": [
            {
                "imgSrc": require("../img/pic2021/IMG_1.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/IMG_2.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/IMG_3.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/IMG_4.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/IMG_5.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/IMG_6.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/IMG_7.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/IMG_8.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/IMG_9.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/IMG_10.JPG"),
                "description": "Procreate"
            },
            {
                "imgSrc": require("../img/pic2021/thanksh.jpg"),
                "description": "Procreate"
            }
        ]
    }
]

export default mockData