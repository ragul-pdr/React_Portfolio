import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

export default function Projects() {
  const data = {
    projects: [
      {
        image: p1,
        description: "A Ecommerce website. Built with MERN Stack.",
        link: "https://github.com/ragul-pdr/",
      },
      {
        image: p2,
        description: "Travel website. Butil with Css3 & Bootstrap Framework",
        link: "https://github.com/ragul-pdr",
      },
      {
        image: p3,
        description:
          "Gym website for my relative. Built with Bootstrap 5 & Angular.js with MySQL Database.",
        link: "https://github.com/ragul-pdr/gym-site",
      },
    ],
  };
  return (
    <>
      <section
        id="projects"
        className="flex flex-col py-20 px-5 bg-primary text-white"
      >
        <div className="w-full">
          <div className="flex px-10 py-5 flex-col">
            <h1 className="text-4xl border-b-4 border-secondary mb-5 font-bold w-[140px]">
              Projects
            </h1>
            <p>
              These are my Best Project. I have built these with React,
              MERN,ANGULAR,Bootstrap,Css3. Check them Out!
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row px-10 gap-5 ">
            {data.projects.map((project) => (
              <div className="relative">
                <img className="h-[200px]  w-[500px]" src={project.image} />
                <div className="project-desc">
                  <p className="text-center px-5 py-5">{project.description}</p>
                  <div className="flex justify-center">
                    <a className="btn" target="_blank" href={project.link}>
                      View Project!
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
