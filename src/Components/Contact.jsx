

export default function Contact() {
    const data={
        email:"ragulmaha81@gmai.com",
        phone:"+91 9361360082"
    }
  return (
    <section id="contact" className="flex flex-col bg-primary px-5 py-32">
      <div className=" flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 font-bold w-[150px]">
          Contact
        </h1>
        <p className="pb-5">
          If You want to discuss more in details, Please contact me.
        </p>
        <p className="pb-5"><span className="font-bold">Email:</span> {data.email}</p>
        <p className="pb-5"><span className="font-bold">Phone:</span> {data.phone}</p>
      </div>
    </section>
  );
}
