import { useSpring, animated } from "react-spring";

const AnimatedBackground = () => {
  const props = useSpring({
    from: { background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)" },
    to: async (next) => {
      while (1) {
        await next({
          background: "linear-gradient(120deg, #5ee7df 0%, #b490ca 100%)",
        });
        await next({
          background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
        });
      }
    },
    config: { duration: 5000 },
  });

  return <animated.div style={props} className="absolute inset-0 z-0" />;
};

export default AnimatedBackground;
