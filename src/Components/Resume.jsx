import ResumeImage from "../assets/resume.png";
import File from "../assets/file.pdf";

export default function Resume() {
    const resume={
        file:File,
    }
  return (
    <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 flex justify-center p-10">
        <img className=" md:3-[300px] h-[300px]" src={ResumeImage} />
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-start text-white p-5">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl border-b-4 border-primary mb-5 font-bold w-[170px]">
            Resume
          </h1>
          <p className="pb-6">
            You can view my resume &nbsp;
            <a target="_blank" className="btn" download="Ragul-R_Resume" href={resume.file}>Download</a>
          </p>
          
        </div>
      </div>
    </section>
  );
}
