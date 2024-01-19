import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/ulyfe.png"
          description="Anonymous discussion forum. Dedicated dating section with advanced matching algorithms. Events dashboard for user-created and organization-endorsed events."
          url="https://cs480-projects.github.io/teams-fall2023/Unimatch/team.html"
        />
        <ProjectCard
          src="/easyvalet.png"
          description="Mobile App for valet companies to transition into digital services. Replaces tickets in valet."
          url="https://play.google.com/store/apps/details?id=babayah01.example.easyvalet1&hl=en&gl=US"
        />
        <ProjectCard
          src="/reactMeal.png"
          description="An online food ordering interactive React application, where I master working with carts and improve my UX/UI skills."
          url="https://order-reacthb.netlify.app/"
        />
        <ProjectCard
          src="/dicegame.png"
          description="This application was developed by using Javascript and it is a simple fun game to play when bored."
          url="https://dicegame-hovsep.netlify.app/"
        />
        <ProjectCard
          src="/recipe.png"
          description="This application was built by Javascript and offers recipes with step-by-step instructions to make the most delicious food."
          url="https://recipe-hb.netlify.app/index.html"
        />
        <ProjectCard
          src="/mapty.png"
          description="This application was built by me with Javascript where I master to work with Local Storage and API. This app allows to record running and cycling information anywhere in the world using geolocation."
          url="https://jsmapty.netlify.app/"
        />
        <ProjectCard
          src="/Bankist.png"
          description="An interactive application developed with Javascript. I learned all types of UI interactive features."
          url="https://my-bankist.netlify.app/"
        />
        <ProjectCard
          src="/chart.png"
          description="This application was built with React and Firabase and it will help to keep track of your monthly and annual expenses."
          url="https://chart-react.netlify.app/"
        />

        <ProjectCard
          src="/reactToDo.png"
          description="A To-Do application built with React that will help you keep track of the things you are planning to do."
          url="https://todo1-react.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
