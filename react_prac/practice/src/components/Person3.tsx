import image3 from "../assets/img/03.jpg";
const Person3 = () => {
  return (
    <div className="flex items-center justify-between w-[100%] md:w-[80%] mx-auto gap-14 mt-12 flex-col-reverse md:flex-row">
      <div className=" w-[58%] md:w-[50%] flex items-start justify-center flex-col gap-4 ">
        <h1 className=" text-5xl md:text-6xl font-thin">Let there be rock!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
          exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
          molestiae adipisci, beatae obcaecati.
        </p>
      </div>
      <div className="w-[58%] md:w-[50%]  ">
        <img src={image3} alt="person image" className="rounded-full" />
      </div>
    </div>
  );
};
export default Person3;
