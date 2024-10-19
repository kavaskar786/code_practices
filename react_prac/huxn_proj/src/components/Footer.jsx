const Footer = ({ text, bgColor }) => {
  return (
    <div className="h-1/6 text-white flex items-end justify-center">
      <div
        className={`py-4 ${bgColor} w-full flex items-center justify-center`}
      >
        <p>
          All rights reserved <span className="text-cyan-200">{text}</span>
        </p>
      </div>
    </div>
  );
};
export default Footer;
