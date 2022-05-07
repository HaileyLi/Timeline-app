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
        "companyLogo": require("../img/pic2016/work/OICRlogo2.png"),
        "bgImage":require("../img/pic2016/work/oicrpic.jpg"),
        "links":[
            {"desc":"Helped design and develop",
        "link":"https://cancercollaboratory.org/cloud-computing-big-data-genomics"}
        ]
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
        "companyLogo": require("../img/pic2017/work/acc2.png"),
        "bgImage":require("../img/pic2017/work/accpic.jpg"),
        "links":[
        ]
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
        "companyLogo": require("../img/pic2018/work/gwlpic.png"),
        "bgImage":require("../img/pic2018/work/gwlimg.jpeg"),
        "links":[
            {"desc":"AODA Debugging and Testing",
        "link":"https://www.greatwestlife.com/you-and-your-family.html"}
        ]
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
        "companyLogo": require("../img/pic2018/work/uwlogo.png"),
        "bgImage":require("../img/pic2018/work/uwpic.jpg"),
        "links":[
            {"desc":"Drupal CMS Feature implements",
        "link":"https://uwaterloo.ca/"},
        {"desc":"404 page design",
    "link":"https://haileyli.github.io/uw_404_notfound/"}
        ]
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
        "companyLogo": require("../img/pic2019/work/kennalogo2.png"),
        "bgImage":require("../img/pic2019/work/kennapic.jpg"),
        "links":[
            {"desc":"Development secure site for customer",
        "link":"https://www.kenna.ca/"}
        ]
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
        "companyLogo": require("../img/pic2020/settlement.jpg"),
        "bgImage":require("../img/pic2020/poster.jpeg"),
        "links":[
            {"desc":"Development public sites",
        "link":"http://www.mudancorp.com/en/index.php"}
        ]
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
        "companyLogo": require("../img/pic2021/fidelity.jpeg"),
        "bgImage":require("../img/pic2021/ins.png"),
        "links":[
        ]
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
        "companyLogo": require("../img/pic2015/packantslogo2.png"),
        "bgImage":require("../img/pic2015/papic.JPG"),
        "links":[
        ]
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
    },
    {
        "id": "j3",
        "date": "20161101",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Integrated logo and UI design",
        "imgList": [
            {
                "imgSrc": require("../img/pic2016/work/FORM/01-Project-creation-form-section1.jpg"),
                "description": "Form Design"
            },{
                "imgSrc": require("../img/pic2016/work/FORM/02-Project-creation-form-section2.jpg"),
                "description": "Form Design"
            },{
                "imgSrc": require("../img/pic2016/work/FORM/03-Project-creation-form-section3.jpg"),
                "description": "Form Design"
            },{
                "imgSrc": require("../img/pic2016/work/FORM/04-Project-creation-form-section4.jpg"),
                "description": "Form Design"
            },{
                "imgSrc": require("../img/pic2016/work/FORM/05-Project-creation-form-section5.jpg"),
                "description": "Form Design"
            },{
                "imgSrc": require("../img/pic2016/work/FORM/06-Project-creation-form-review1.jpg"),
                "description": "Form Design"
            },{
                "imgSrc": require("../img/pic2016/work/FORM/07-Project-creation-form-review2.jpg"),
                "description": "Form Design"
            },{
                "imgSrc": require("../img/pic2016/work/FORM/08-Project-creation-form-submission.jpg"),
                "description": "Form Design"
            },{
                "imgSrc": require("../img/pic2016/work/OICR/oicr-facit.png"),
                "description": "Logo Integration"
            },{
                "imgSrc": require("../img/pic2016/work/OICR/oicr-facit1.jpg"),
                "description": "Logo Integration"
            },
        ]
    },
    {
        "id": "j4",
        "date": "20170601",
        "category": "Project",
        "cateCode": "OT",
        "brief": "HBT Team",
        "link":"https://haileyli.github.io/HBTWEB.github.io/",
        "imgList": [
            
            {
                "imgSrc": require("../img/pic2017/hbtteam/hbt-01.jpg"),
                "description": "Photoshop"
            },
            {
                "imgSrc": require("../img/pic2017/hbtteam/hbt-02.jpg"),
                "description": "Photoshop"
            },
            {
                "imgSrc": require("../img/pic2017/hbtteam/hbt-03.jpg"),
                "description": "Photoshop"
            },
            {
                "imgSrc": require("../img/pic2017/hbtteam/hbt-04.jpg"),
                "description": "Photoshop"
            },
            {
                "imgSrc": require("../img/pic2017/hbtteam/hbt-05.jpg"),
                "description": "Photoshop"
            },
            {
                "imgSrc": require("../img/pic2017/hbtteam/hbt-06.jpg"),
                "description": "Photoshop"
            },
            {
                "imgSrc": require("../img/pic2017/ui_china.jpg"),
                "description": "Photoshop"
            }
        ]
    },
    {
        "id": "j5",
        "date": "20170701",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Tri-tri Game",
        "imgList": [
            
            {
                "imgSrc": require("../img/pic2017/tritri/screen1.png"),
                "description": "Game UI"
            },
            {
                "imgSrc": require("../img/pic2017/tritri/screen2.png"),
                "description": "Game UI"
            },
            {
                "imgSrc": require("../img/pic2017/tritri/screen3.png"),
                "description": "Game UI"
            },
            {
                "imgSrc": require("../img/pic2017/tritri/screen4.png"),
                "description": "Game UI"
            },
            {
                "imgSrc": require("../img/pic2017/tritri/screen5.png"),
                "description": "Game UI"
            },{
                "imgSrc": require("../img/pic2017/tritri/black-ui.png"),
                "description": "Game UI"
            },
            {
                "imgSrc": require("../img/pic2017/tritri/tri-guideline.jpg"),
                "description": "Game UI"
            },
            {
                "imgSrc": require("../img/pic2017/tritri/stats.png"),
                "description": "Game UI"
            }
        ]
    },
    {
        "id": "j6",
        "date": "20180501",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Bujo",
        "imgList": [
            {
                "imgSrc": require("../img/pic2018/bujo/bujo-logo.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-01.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-02.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-03.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-04.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-01.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-05.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-06.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-07.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-08.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-09.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-10.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-11.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-12.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-13.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-14.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-15.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-16.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-17.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-18.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-19.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-20.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-21.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-22.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-23.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-24.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-25.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-26.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-27.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-28.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-29.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-30.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-31.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-32.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-33.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-34.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-35.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-36.jpg"),
                "description": "BUJO UI"
            },
            {
                "imgSrc": require("../img/pic2018/bujo/view2-37.jpg"),
                "description": "BUJO UI"
            }
        ]
    },
    {
        "id": "j7",
        "date": "20180701",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Dr. Do",
        "imgList": [
            {
                "imgSrc": require("../img/pic2018/do/indexdesign-01.jpg"),
                "description": "DR. DO UI"
            },
            {
                "imgSrc": require("../img/pic2018/do/indexdesign-02.jpg"),
                "description": "DR. DO UI"
            },
            {
                "imgSrc": require("../img/pic2018/do/indexdesign-03.jpg"),
                "description": "DR. DO UI"
            },
            {
                "imgSrc": require("../img/pic2018/do/indexdesign-04.jpg"),
                "description": "DR. DO UI"
            },
            {
                "imgSrc": require("../img/pic2018/do/indexdesign-05.jpg"),
                "description": "DR. DO UI"
            },
            {
                "imgSrc": require("../img/pic2018/do/indexdesign-06.jpg"),
                "description": "DR. DO UI"
            },
            {
                "imgSrc": require("../img/pic2018/do/indexdesign-07.jpg"),
                "description": "DR. DO UI"
            }
        ],
        "link":"https://dr-do-studio.github.io/indexSite/"
    },
    {
        "id": "j8",
        "date": "20180801",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Sketch",
        "imgList": [
            {
                "imgSrc": require("../img/pic2018/drawings/drawing1.jpeg"),
                "description": "Sketch"
            },
            {
                "imgSrc": require("../img/pic2018/drawings/drawing2.jpeg"),
                "description": "Sketch"
            },
            {
                "imgSrc": require("../img/pic2018/drawings/drawing3.jpeg"),
                "description": "Sketch"
            },
            {
                "imgSrc": require("../img/pic2018/drawings/drawing4.jpeg"),
                "description": "Sketch"
            },
            {
                "imgSrc": require("../img/pic2018/drawings/drawing5.jpeg"),
                "description": "Sketch"
            }
        ]
    },
    {
        "id": "j9",
        "date": "20181101",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Zone",
        "imgList": [
            {
                "imgSrc": require("../img/pic2018/zone/ss01.png"),
                "description": "Zone UI"
            },
            {
                "imgSrc": require("../img/pic2018/zone/ss02.png"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/ss03.png"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/ss04.png"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/ss05.png"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/ss06.png"),
                "description": "Zone UI"
            },
            {
                "imgSrc": require("../img/pic2018/zone/ss07.png"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/ss08.png"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/ss09.png"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/ss10.png"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/ss11.png"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/year-zone.jpg"),
                "description": "Zone UI"
            },{
                "imgSrc": require("../img/pic2018/zone/zone-logo.jpg"),
                "description": "Zone UI"
            },
        ]
    },
    {
        "id": "j10",
        "date": "20190301",
        "category": "Project",
        "cateCode": "OT",
        "brief": "QuesBank",
        "link":"https://haileyli.github.io/Air-quesbank-demo/",
        "imgList": [
            {
                "imgSrc": require("../img/pic2019/quesbank/1.jpg"),
                "description": "Quesbank UI"
            },
            {
                "imgSrc": require("../img/pic2019/quesbank/2.jpg"),
                "description": "Quesbank UI"
            },
            {
                "imgSrc": require("../img/pic2019/quesbank/3.jpg"),
                "description": "Quesbank UI"
            },
            {
                "imgSrc": require("../img/pic2019/quesbank/4.jpg"),
                "description": "Quesbank UI"
            },
            {
                "imgSrc": require("../img/pic2019/quesbank/5.jpg"),
                "description": "Quesbank UI"
            }
        ]
    },
    {
        "id": "j11",
        "date": "20200201",
        "category": "Project",
        "cateCode": "OT",
        "brief": "CourseTable",
        "imgList": [
            {
                "imgSrc": require("../img/pic2020/CourseTable/1.jpg"),
                "description": "Course Table"
            },
            {
                "imgSrc": require("../img/pic2020/CourseTable/2.jpg"),
                "description": "Course Table"
            },
            {
                "imgSrc": require("../img/pic2020/CourseTable/3.jpg"),
                "description": "Course Table"
            },
            {
                "imgSrc": require("../img/pic2020/CourseTable/4.jpg"),
                "description": "Course Table"
            },
            {
                "imgSrc": require("../img/pic2020/CourseTable/5.jpg"),
                "description": "Course Table"
            },
            {
                "imgSrc": require("../img/pic2020/CourseTable/7.jpg"),
                "description": "Course Table"
            },
            {
                "imgSrc": require("../img/pic2020/CourseTable/6.gif"),
                "description": "Course Table"
            }
        ]
    },
    {
        "id": "j12",
        "date": "20200501",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Wechat Mini Program",
        "imgList": [
            {
                "imgSrc": require("../img/pic2020/brand/logo.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/1.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/2.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/3.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/4.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/5.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/6.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/7.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/8.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/9.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/10.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/11.png"),
                "description": "Wechat Mini Program"
            },
            {
                "imgSrc": require("../img/pic2020/brand/12.png"),
                "description": "Wechat Mini Program"
            }
        ]
    },
    {
        "id": "j13",
        "date": "20210801",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Birth of this website",
        "imgList": [
        ]
    },
    {
        "id": "j14",
        "date": "20190801",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Sudoo",
        "imgList": [
        ],
        "link":"https://haileyli.github.io/sudoo/"
    },
    {
        "id": "j15",
        "date": "20181001",
        "category": "Project",
        "cateCode": "OT",
        "brief": "DR. DO Grid",
        "imgList": [
        ],
        "link":"https://dr-do-studio.github.io/creative-studio/"
    },
    {
        "id": "j16",
        "date": "20200801",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Mock single product",
        "imgList": [
        ],
        "link":"https://haileyli.github.io/SinglePage-Product/"
    },
    {
        "id": "j16",
        "date": "20200901",
        "category": "Project",
        "cateCode": "OT",
        "brief": "React mini game",
        "imgList": [
        ],
        "link":"https://haileyli.github.io/vocab-typing-game/"
    },
    {
        "id": "j17",
        "date": "20201001",
        "category": "Project",
        "cateCode": "OT",
        "brief": "React 2048",
        "imgList": [
        ],
        "link":"https://hbtgames.github.io/2048ReactGame/"
    },
    {
        "id": "j18",
        "date": "20161001",
        "category": "Project",
        "cateCode": "VD",
        "brief": "Logo Animation",
        "imgList": [
        ]
    },
    {
        "id": "j19",
        "date": "20170901",
        "category": "Project",
        "cateCode": "OT",
        "brief": "Game Animation",
        "imgList": [
            {
                "imgSrc": require("../img/pic2017/animgif.gif"),
                "description": "Game Animation"
            }
        ]
    },
]

export default mockData