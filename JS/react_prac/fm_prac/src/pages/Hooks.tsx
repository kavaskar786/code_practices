import { useMotionValue, useSpring, useTransform } from "framer-motion";
import Card from "../components/HooksPage/Card";
import { pageStyle } from "../lib/pages/HooksPage/styles/styles";
import ScrollAnimation from "../components/HooksPage/ScrollAnimation";

const Hooks = () => {
  const x = useMotionValue(100);
  const y = useSpring(100);
  const z = useSpring(100);
  const backgroundColor = useTransform(z, [-200, 200], ["#ff0000", "#00ff00"]);
  // useMotionValueEvent(x, "animationStart", () => {
  //   console.log("animation started,");
  // });
  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log("change has been started,", latest);
  // });
  return (
    <div className={pageStyle}>
      <div className="flex h-[100vh] items-center justify-center">
        <Card x={x} textContent="useMotion" />
        <Card x={y} textContent="useSpring" />
        <Card
          x={z}
          textContent="useTransform"
          backgroundColor={backgroundColor}
        />
      </div>
      <ScrollAnimation textContent="WhileInView" />
    </div>
  );
};
export default Hooks;
