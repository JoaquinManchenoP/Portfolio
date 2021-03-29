import Link from "next/link";
import Image from "next/image";
export default function ProjectCard({
  projectName,
  description,
  technologies,
  githubRepo,
  demoLink,
  projectImage,
}) {
  console.log(projectImage);
  return (
    <div className="projectCard 0 ">
      <div className="projectTitle my-6 text-xl">
        <h1>{projectName}</h1>
      </div>
      <div className="information flex">
        <div className="image ">
          <img
            className="h-40 w-72 rounded-xl object-cover shadow-2xl "
            src={`../Components/images/${[projectImage]}.png`}
          ></img>
        </div>
        <div className="gameDescription ml-10 space-y-4 w-1/2">
          <p>{description}</p>
          <p>{technologies}</p>
          <div className="buttons flex space-x-4">
            <Link href={githubRepo}>
              <button className="h-8 w-20 rounded-lg shadow-xl border-2 border-black">
                Code
              </button>
            </Link>

            <Link href={demoLink}>
              <button className="h-8 w-20 rounded-lg shadow-xl bg-black text-white font-light">
                Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
