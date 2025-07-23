/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sujan's Portfolio",
  description: "A brief description of Sujan's portfolio.",
  og: {
    title: "Sujan's Portfolio",
    type: "website",
    url: "http://sujankutty.com/",
  },
};

//Home Page
const greeting = {
  title: "Sujan Vulasala",
  logo_name: "SujanVulasala",
  subTitle:
    "A passionate Full Stack Developer, Data Scientist and Open Source Enthusiast.",
  resumeLink:
    "https://drive.google.com/file/d/1EfZl7kj6AOFRTkA_UxwNBlDkI4kP4M93/view?usp=drive_link",
  portfolio_repository: "https://github.com/SujanVulasala/masterPortfolio",
  githubProfile: "https://github.com/SujanVulasala",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/SujanVulasala",
  // linkedin: "https://www.linkedin.com/in/sujan-vulasala-03may2005/",
  // gmail: "sujanvulasala@gmail.com",

  {
    name: "Github",
    link: "https://github.com/SujanVulasala",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sujan-vulasala-03may2005/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sujanvulasala@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building highly scalable Machine Learning models for various applications",
        "⚡ Creating end-to-end data pipelines for data collection, cleaning, and preprocessing",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Machine Learning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML, CSS, and JavaScript",
        "⚡ Developing mobile applications using Flutter",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/SujanVulasala/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/svulasal",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/sujan0305",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/vulasalasujan",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Gitam Deemed to be University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "gitam_logo.png",
      alt_name: "Bengaluru",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ I am pursuing my B.Tech in Computer Science Engineering with specialization in Artificial Intelligence.",
        "⚡ I have taken courses on Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.",
      ],
      website_link: "http://www.gitam.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud Computing Foundations",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/bc189ac8-4515-4e4a-a41f-9d95c785dc4c/linked_in_profile",
      alt_name: "Google Cloud",
      color_code: "#8C151599",
    },
    {
      title: "Google Cloud Cybersecurity Certification",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/fd4f5417-1698-49ea-82a2-c5cc3b2a3dd0/linked_in_profile",
      alt_name: "Google Cloud",
      color_code: "#8C151599",
    },
    {
      title: "Google Cloud Data Analytics Certification",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/50fc4e18-0cca-4b31-8d5c-5c755f83edaf/linked_in_profile",
      alt_name: "Google Cloud",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to MongoDB(for students)",
      subtitle: "- MongoDB University",
      logo_path: "mongodb_logo.jpeg",
      certificate_link:
        "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/046674f7-08bb-4aae-af1b-49369b139d76-vulasala-sujan-22134484101-778df6ba-b057-4467-b734-f50972042f22-certificate.pdf",
      alt_name: "MongoDB University",
      color_code: "#1F70C199",
    },
    {
      title: "MongoDB Administration Path",
      subtitle: "- MongoDB University",
      logo_path: "mongodb_logo.jpeg",
      certificate_link:
        "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/046674f7-08bb-4aae-af1b-49369b139d76-vulasala-sujan-22134484101-96aa3931-5304-4267-9c97-f15dadb0e835-certificate.pdf",
      alt_name: "MongoDB University",
      color_code: "#1F70C199",
    },
    {
      title: "MongoDB SQL Professionals",
      subtitle: "- MongoDB University",
      logo_path: "mongodb_logo.jpeg",
      certificate_link:
        "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/046674f7-08bb-4aae-af1b-49369b139d76-vulasala-sujan-22134484101-ce601482-5c2d-4a1b-a1d1-f915a8e2e451-certificate.pdf",
      alt_name: "MongoDB University",
      color_code: "#1F70C199",
    },
    {
      title: "Atlas Search Course",
      subtitle: "- MongoDB University",
      logo_path: "mongodb_logo.jpeg",
      certificate_link:
        "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/046674f7-08bb-4aae-af1b-49369b139d76-vulasala-sujan-22134484101-c1a7456d-cf4b-498b-b8b9-86c659220825-certificate.pdf",
      alt_name: "MongoDB University",
      color_code: "#1F70C199",
    },
    {
      title: "Networking Basics",
      subtitle: "- Cisco",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://www.credly.com/badges/de3e3dfc-dee2-4708-99d4-42870ca939dd/public_url",
      alt_name: "Cisco",
      color_code: "#00000099",
    },
    {
      title: "Neo4j Certified Professional",
      subtitle: "- Graph Academy by Neo4j",
      logo_path: "neo4j_logo.png",
      certificate_link:
        "https://graphacademy.neo4j.com/c/acfb7755-0925-4cb7-b326-4a6fda76bbba/",
      alt_name: "Neo4j",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Canva Freelance Designer",
          company: "Canva",
          company_url: "https://www.canva.com/",
          logo_path: "canva_logo.png",
          duration: "Dec 2024 - Present",
          location: "Remote",
          description:
            "As a Freelance Designer at Canva, I am responsible for creating visually appealing designs and layouts for various projects. I collaborate with clients to understand their design needs and deliver high-quality work within deadlines. My role involves using design tools and software to bring ideas to life and ensure a seamless user experience.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "AI-ML Virtual Intern",
          company: "Google for Developer",
          company_url: "https://developers.google.com/",
          logo_path: "google_logo.png",
          duration: "Jan 2025 - Mar 2025",
          location: "AICTE Internship",
          description:
            "Worked on various AI and ML projects, gaining hands-on experience in developing machine learning models and algorithms.",
          color: "#000000",
        },
        {
          title: "AWS AI Virtual Intern",
          company: "Amazon Web Services",
          company_url: "https://aws.amazon.com/",
          logo_path: "aws_logo.png",
          duration: "Sep 2023 - Nov 2023",
          location: "Remote",
          description:
            "Worked on various AI and ML projects, gaining hands-on experience in developing machine learning models and algorithms.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Coordinator",
          company: "GITAM Deemed to be University",
          company_url: "https://www.gitam.edu/",
          logo_path: "gitam_logo.png",
          duration: "Nov 2023 - Present",
          location: "Bengaluru, Karnataka",
          description:
            "I am currently serving as a Student Coordinator at GITAM Deemed to be University, where I am responsible for organizing events, managing student activities, and facilitating communication between students and faculty. My role involves coordinating with various departments to ensure smooth operations and enhance the overall student experience.",
          color: "#4285F4",
        },
        {
          title: "Student Life Associate",
          company: "Student Life Team, GITAM Deemed to be University",
          company_url: "https://www.gitam.edu/bengaluru/campus-life",
          logo_path: "studentlife_logo.png",
          duration: "Jun 2024 - Feb 2025",
          location: "Bengaluru, Karnataka",
          description:
            "Student Life Associate is a program for university students to leadership and community engagement. As a Student Life Associate, I am responsible for organizing events, managing student activities, and facilitating communication between students and faculty. My role involves coordinating with various departments to ensure smooth operations and enhance the overall student experience.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of my projects that I have worked on, showcasing my skills in AI, Full Stack Development, and UI/UX Design.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Here are some of my publications and blogs that I have written.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "from-campus-to-career",
      name:
        "From Campus to Career: The Transformative Power of Student Organizations",
      createdAt: "2023-07-02T00:00:00Z",
      description:
        "Paper published on International Symposium on Student Organizations",
      url:
        "https://www.linkedin.com/in/sujan-vulasala-03may2005/details/honors/1747924674913/single-media-viewer?type=IMAGE&profileId=ACoAAD7L5KQBiCx7a2UyQSWQr3CH_fQJ_0iuCVM&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_honors_details%3BFMpeW1V2RR%2BaUhNDo6UTuw%3D%3D",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_sujan.png",
    description:
      "Feel free to reach out to me for any queries, collaborations, or just a friendly chat. You can contact me via email or connect with me on social media platforms.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I write blogs on various topics related to technology, AI, and my personal experiences. You can read my blogs on my personal website.",
    link: "https://blogs.sujanvulasala.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gitam Deemed to be University, Bengaluru, Karnataka, India",
    locality: "Bengaluru",
    country: "India",
    region: "Karnataka",
    postalCode: "561203",
    streetAddress: "GITAM Deemed to be University, Bengaluru Campus",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/zmrFL2xqei3hxyRn9",
  },
  phoneSection: {
    title: "Mobile Number",
    subtitle: "+91 9392665903",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
