import ProjectCard from "../public/Components/ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-24 mt-10 pb-20">
      <div className="videoGameProject">
        <ProjectCard
          projectName="Videogame App"
          description="A website that allows the user to search for a for any game in the rawg.io api."
          technologies={"Next.js, Framer-Motion, Tailwindcss"}
          githubRepo={"https://github.com/JoaquinManchenoP/videogamestore-next"}
          demoLink="https://videogamestore-next.vercel.app/"
          projectImage="videoGameProject"
        />
      </div>
      <div className="Salesforce covid capacity manager">
        <ProjectCard
          projectName="Covid Capacity Manager"
          description="Built a salesforce app which allows users and store managers to manage clients, create appointments and give the costumer an estimated wait time depending on the capacity of the store. The app was part of my college capstone project for the company capgemini"
          technologies="Salesforce"
          githubRepo="not"
          demoLink="https://capgemini-capstone2021-developer-edition.na156.force.com/tracker/s/login/?ec=302&startURL=%2Ftracker%2Fs%2F"
          projectImage="capgemini"
        />
      </div>

      <div className="blogProject">
        <ProjectCard
          projectName="Blog"
          description="An app that mimics the design and basic functionality of amazon.com"
          technologies="Next.js, Contentful CMS, Tailwindcss. Framer-Motion"
          githubRepo="https://github.com/JoaquinManchenoP/music-blog"
          demoLink="https://music-blog.vercel.app/"
          projectImage="blog"
        />
      </div>
      <div className="movieWatchlist">
        <ProjectCard
          projectName="Movie Watch List"
          description="A movie watchlist app that allows users to search movies as well as adding and removing movies from their watchlist"
          technologies="React.js, Firebase"
          githubRepo="https://github.com/JoaquinManchenoP/react-movie-app/tree/master/react-movie-app"
          demoLink="https://react-movie-app-f0d0c.web.app/?"
          projectImage="watchlist"
        />
      </div>
      <div className="amazonClone">
        <ProjectCard
          projectName="Amazon Clone"
          description="An app that mimics the design and basic functionality of amazon.com"
          technologies="React.js, Firebase"
          githubRepo="https://github.com/JoaquinManchenoP/amazon-clone-project"
          demoLink="https://clone-project-80839.firebaseapp.com"
          projectImage="amazonClone"
        />
      </div>
    </div>
  );
}
