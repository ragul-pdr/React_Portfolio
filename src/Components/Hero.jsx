import ragulImage from "../assets/main1.jpg";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Hero() {
  const data={
    subtitle:"Im a Full-Stack Developer",
    social:
    {
      whatsapp:"https://wa.me/9361360082",
      instagram:"https://www.instagram.com/professor_.tom/profilecard/?igsh=MXdrdnpvazhuMDh5",
      linkedin:'https://www.linkedin.com/in/ragul-r-5118072a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  }
  return (
    <section id="hero" className="flex flex-col md:flex-row px-5 py-32  bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col mt-9 md:ml-16 p-5">
        <h1 className=" text-white text-6xl font-hero-font">
          Hi,
          <br /> I'm <span className="text-black">R </span>Ragul
          <p className="text-2xl">{data.subtitle}</p>
        </h1>
        <div className="flex py-10">
          <a href={data.social.whatsapp} target="_blank" className="pr-5 hover:text-white">
            <AiOutlineWhatsApp size={40} />
          </a>
          <a href={data.social.instagram} target="_blank" className="pr-5 hover:text-white">
            <AiOutlineInstagram size={40} />
          </a>
          <a href={data.social.linkedin} target="_blank" className="hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className=" md:w-1/3" src={ragulImage} />
    </section>
  );
}
