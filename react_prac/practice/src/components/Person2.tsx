import image2 from "../assets/img/02.jpg";
const Person2 = () => {
  return (
    <div className="flex items-center justify-between w-[80%] mx-auto gap-56 mt-12">
      <div className="w-[50%] ">
        <img src={image2} alt="person image" className="rounded-full" />
      </div>
      <div className="w-[50%] flex items-start justify-center flex-col gap-4 ">
        <h1 className="text-6xl font-thin">We salute you!.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
          exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
          molestiae adipisci, beatae obcaecati.
        </p>
      </div>
    </div>
  );
};
export default Person2;
