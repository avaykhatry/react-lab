export const cvObject = {
      about : {
        name : "John Allen",
        contacts : [
          { type : "tel:", value : "9760394583" },
          { type : "mailto:", value : "john.all@gmail.com" },
          { type : "text", value : "Austin, TX" },
        ]
      },
      summary : "Aspiring frontend developer passionate about building responsive and user-friendly web applications using React, JavaScript, and modern UI frameworks. Seeking a React Internship to apply my coding skills, learn from experienced engineers, and contribute to real-world projects.",
      education : [
        {
          id : crypto.randomUUID(),
          schoolName : "Harvard University",
          level : "Bachelor of Computer Science",
          gpa : "3.8",
          startDate : "Apr 2022",
          endDate : "Apr 2026",
        }
      ],
      experiences : [
        {
          id : crypto.randomUUID(),
          organization : "Personal Projects",
          position : "React Developer (Project Work)",
          startDate : "Jan 2024",
          endDate : "Present 2026",
          description: [
            {
              id : crypto.randomUUID(),
              detail : "Built multiple projects including a task manager, weather app, and portfolio site using React, JavaScript, and CSS.",
            },
            {
              id : crypto.randomUUID(),
              detail : "Implemented reusable components, state management with React Hooks, and API integrations.",
            },
            {
              id : crypto.randomUUID(),
              detail : "Deployed projects using GitHub Pages and Netlify.",
            }
          ]
        },
      ],
      skills : [
        {
          id: crypto.randomUUID(),
          value: "React.js",
        },
        {
          id: crypto.randomUUID(),
          value: "JavaScript (ES6+)",
        },
        {
          id: crypto.randomUUID(),
          value: "HTML5 & CSS3",
        },
        {
          id: crypto.randomUUID(),
          value: "Tailwind CSS / Bootstrap",
        },
        {
          id: crypto.randomUUID(),
          value: "Git & GitHub",
        },
        {
          id: crypto.randomUUID(),
          value: "REST APIs",
        },
        {
          id: crypto.randomUUID(),
          value: "Node.js (basic)",
        },
        {
          id: crypto.randomUUID(),
          value: "Agile / Scrum",
        }
        ]
    };