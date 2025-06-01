// index.js
const aboutInfo = {
    name: "Gibson Waheire",
    role: "Aspiring Software Developer / Front-End Enthusiast",
    summary:
      "So far I have learned the fundamentals of HTML, CSS, and JavaScript at Moringa School. Comfortable using the terminal and Git/GitHub to version and host projects.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6 Basics)", "Git & GitHub", "Terminal Usage"],
  };
  
  const projects = [
    {
      title: "What to Eat Web App",
      description:
        "A simple food-recommendation app that suggests your next meal based on time of day. Built with plain HTML, CSS, and vanilla JavaScript. Hosted on GitHub Pages.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://gibsonwaheire.github.io/what-to-eat-web-app/",
    },
    {
      title: "My GitHub Profile",
      description:
        "All my Phase 0 and Foundation in Software Engineering projects are here. Forked, committed, and pushed using Git from the terminal.",
      technologies: ["Git", "GitHub", "Terminal"],
      link: "https://github.com/GibsonWaheire",
    },
  ];
  
  const contactInfo = {
    email: "g.waheir00@gmail.com",
    phone: "+254726899113",
    linkedin: "https://www.linkedin.com/in/gibson-w-giteru/",
  };
  
  const aboutSection = document.getElementById("about-section");
  const projectsContainer = document.getElementById("projects-container");
  const contactSection = document.getElementById("contact-section");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const bodyEl = document.body;
  
  function renderAbout() {
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-card");
  
    const nameEl = document.createElement("h2");
    nameEl.textContent = aboutInfo.name;
  
    const roleEl = document.createElement("p");
    roleEl.style.fontStyle = "italic";
    roleEl.textContent = aboutInfo.role;
  
    const sumEl = document.createElement("p");
    sumEl.textContent = aboutInfo.summary;
  
    const skillsHeader = document.createElement("h3");
    skillsHeader.textContent = "Skills:";
    const skillsList = document.createElement("ul");
    aboutInfo.skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  
    aboutDiv.append(nameEl, roleEl, sumEl, skillsHeader, skillsList);
    aboutSection.appendChild(aboutDiv);
  }
  
  function renderProjects() {
    projectsContainer.innerHTML = "";
  
    projects.forEach((proj) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
  
      const titleEl = document.createElement("h3");
      titleEl.textContent = proj.title;
  
      const descEl = document.createElement("p");
      descEl.textContent = proj.description;
  
      const techHeader = document.createElement("p");
      techHeader.style.fontWeight = "bold";
      techHeader.textContent = "Built With:";
      const techList = document.createElement("ul");
      proj.technologies.forEach((tech) => {
        const li = document.createElement("li");
        li.textContent = tech;
        techList.appendChild(li);
      });
  
      const linkEl = document.createElement("a");
      linkEl.href = proj.link;
      linkEl.target = "_blank";
      linkEl.textContent = "View Project";
  
      card.append(titleEl, descEl, techHeader, techList, linkEl);
      projectsContainer.appendChild(card);
    });
  }
  
  function renderContact() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-card");
  
    const emailEl = document.createElement("p");
    if (contactInfo.email) {
      const mailLink = document.createElement("a");
      mailLink.href = `mailto:${contactInfo.email}`;
      mailLink.textContent = contactInfo.email;
      emailEl.appendChild(mailLink);
    } else {
      emailEl.textContent = "Email Not Available";
    }
  
    const phoneEl = document.createElement("p");
    if (contactInfo.phone) {
      phoneEl.textContent = `Phone: ${contactInfo.phone}`;
    }
  
    const linkedinEl = document.createElement("p");
    if (contactInfo.linkedin) {
      const liLink = document.createElement("a");
      liLink.href = contactInfo.linkedin;
      liLink.target = "_blank";
      liLink.textContent = "LinkedIn Profile";
      linkedinEl.appendChild(liLink);
    }
  
    contactDiv.append(emailEl, phoneEl, linkedinEl);
    contactSection.appendChild(contactDiv);
  }
  
  let isLight = false;
  function initializeTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      bodyEl.classList.add("light-theme");
      isLight = true;
    }
  }
  
  function toggleTheme() {
    if (isLight) {
      bodyEl.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
      isLight = false;
    } else {
      bodyEl.classList.add("light-theme");
      localStorage.setItem("theme", "light");
      isLight = true;
    }
  }
  
  themeToggleBtn.addEventListener("click", toggleTheme);
  
  document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    renderAbout();
    renderProjects();
    renderContact();
  });
  