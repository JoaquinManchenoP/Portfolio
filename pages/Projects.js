import ProjectCard from "../public/Components/ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-24 mt-10 pb-20">
      <div className="Salesforce covid capacity manager">
        <ProjectCard
          projectName="Mednet Solutions"
          description="Mednet is a company located in Minnessota that builds a software used for conducting clinical trials. I work modernizing the UI and backend of the aplication. Migrated multiple components from tpl to react.js and re-disigned and implemented various pages of the application while constantly building new features."
          technologies="React.js, PHP, Sql, Docker,"
          githubRepo={false}
          demoLink="https://www.mednetsolutions.com/"
          projectImage="mednet"
          availableDemo = {false}
        />
      </div>

      <div className="blogProject">
        <ProjectCard
          projectName="Dubow Textile"
          description="Dubow is a textile manufacturing company located in Minnesota.The companies web applicaiton is used by costumers to manage and customize their orders, while the company's api provides de ability for customer's to access the same data from outside the dubow aplication such as the clients own custom applications.I Worked fixing customer issues and customer suport as well as implementing new features."
          technologies=".NET, Sql, Blazor"
          githubRepo={false}
          demoLink="https://dubowtextile.com/"
          projectImage="dubow"
          availableDemo = {false}
        />
      </div>
      <div className="videoGameProject">
        <ProjectCard
          projectName="Social Media App"
          description="A web application that attempts to recreate the basic functionality of platforms such as Facebook, Twitter and Instagram, in which users can follow their friends, like their posts, as well as share posts and images of their own."
          technologies={"React.js, HTML, Node, Express, MongoDB. (For Demo -> email: guest@email.com, password: 12345)"}
          githubRepo={"https://github.com/JoaquinManchenoP/snias-social-media"}
          demoLink="https://snias-social-media.herokuapp.com/"
          projectImage="social-media"
          availableDemo = {true}
        />
      </div>
      <div className="videoGameProject">
        <ProjectCard
          projectName="Videogame App"
          description="A website that consumes and displays data from the rawg.io api and allows the user to search for games in the api a aestheticly pleasing UI."
          technologies={"Next.js, Framer-Motion, Tailwindcss"}
          githubRepo={"https://github.com/JoaquinManchenoP/videogamestore-next"}
          demoLink="https://videogamestore-next.vercel.app/"
          projectImage="videoGameProject"
          availableDemo = {true}
        />
      </div>
      <div className="movieWatchlist">
        <ProjectCard
          projectName="Movie Watch List"
          description="A movie watchlist app that allows users to search movies from the TMDB Api as well as creating a watchlist from which users can add and remove their favorite movies."
          technologies="React.js, Firebase"
          githubRepo="https://github.com/JoaquinManchenoP/react-movie-app/tree/master/react-movie-app"
          demoLink="https://react-movie-app-f0d0c.web.app/?"
          projectImage="watchlist"
          availableDemo = {true}
        />
      </div>
      <div className="amazonClone">
        <ProjectCard
          projectName="Amazon Clone"
          description="An app that mimics the design and basic functionality of amazon.com where users can register,login, add items to the cart, remove items from the cart and calculate their cart total."
          technologies="React.js, Firebase"
          githubRepo="https://github.com/JoaquinManchenoP/amazon-clone-project"
          demoLink="https://clone-project-80839.firebaseapp.com"
          projectImage="amazonClone"
          availableDemo = {true}
        />
      </div>
    </div>
  );
}
