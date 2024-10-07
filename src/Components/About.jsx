import AboutImage from "../assets/main2.jpg";

export default function About() {

  const data ={
    line1:" Hi, My name is RAGUL. I build beautiful websites with React JS and Tailwind CSS",
    line2:"  I am proficient in Frontend skills React.js, Tailwind CSS,Css3,Angular.js,Bootstrap,Javascript and many more",
    line3:" In Backend I know Java,JSP,Node.js,Express.js,MongoDB,SQL,Python and Mongoose and many more..",

  }

  return (
    <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 flex justify-center p-10">
        <img className=" md:h-[500px]" src={AboutImage} />
      </div>
      <div className="md:w-1/2 flex justify-center text-white p-5">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl border-b-4 border-primary mb-5 font-bold w-[170px]">
            About me
          </h1>
          <p className="pb-6">
           {data.line1}
          </p>
          <p className="pb-5">
          {data.line2}</p>
          <p className="">
           {data.line3}
          </p>
        </div>
      </div>
    </section>
  );
}
