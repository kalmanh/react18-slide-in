import { useSpring, animated as a } from 'react-spring';
import './SpringIn.css';

const SpringIn = ({ children, isVisible }) => {
  // Step 1: Specify animated properties
  const animatedProps = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : -200,
    config: { mass: 1, tension: 200, friction: 10 },
  });

  return (
    // Step 2: Use properties created with useSpring()
    <a.div className="spring-in" style={{ ...animatedProps }}>
      {children}
    </a.div>
  );
};

export default SpringIn;
