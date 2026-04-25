import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Container from "@/components/ui/Container";

const Projects = () => {
  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      id="projects"
    >
      <Container className="flex flex-col items-center justify-center">
        <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-12 md:py-16">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        <ProjectCard
          src="/kiddiesystem.png"
          description="Built a full-stack management system for an indoor playground to track transactions, manage private events, and analyze business performance using React, Firebase, and real-time data."         
          url="https://kidsystem.vercel.app/"
        />
        <ProjectCard
          src="/kiddieweb.png"
          description="Developed a fully responsive React website for an indoor playground to showcase services, pricing, and event offerings, improving customer engagement and bookings."         
          url="https://www.kiddiekingdomplayground.com/"
        />
         <ProjectCard
          src="/liquidty.png"
          description="Financial analytics system that forecasts cash balances, models interest rate sensitivity (NII), and evaluates credit risk using machine learning and interactive dashboards."
          url="https://github.com/BabayanH/financial-analytics-dashboard/blob/main/README.md"
        />
         <ProjectCard
          src="/monthly_revenue.png"
          description="Data analytics project using real retail data to analyze revenue trends, identify high-value customers, and segment users with SQL, machine learning, and dashboards."
          url="https://github.com/BabayanH/customer-analytics-dashboard/blob/main/README.md"
        />
        <ProjectCard
          src="/ulyfe.png"
          description="Anonymous discussion forum. Dedicated dating section with advanced matching algorithms. Events dashboard for user-created and organization-endorsed events."
          url="https://cs480-projects.github.io/teams-fall2023/Unimatch/team.html"
        />
          <ProjectCard
          src="/socalpic.png"
          description="Fully mobile responsive React website for a valet company."
          url="https://www.socalparking.com/"
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
          description="An interactive application developed by Javascript. I learned all types of UI interactive features."
          url="https://my-bankist.netlify.app/"
        />
        <ProjectCard
          src="/chart.png"
          description="This application was built with React and Firebase and it will help to keep track of your monthly and annual expenses."
          url="https://chart-react.netlify.app/"
        />
        <ProjectCard
          src="/reactToDo.png"
          description="A To-Do application built with React that will help you keep track of the things you are planning to do."
          url="https://todo1-react.netlify.app/"
        />
      </div>
      </Container>
    </div>
  );
};

export default Projects;
