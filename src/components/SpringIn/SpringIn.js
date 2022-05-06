import { useSpring, animated as a } from 'react-spring';
import './SpringIn.css';

const SpringIn = ({ children }) => {
  // Step 1: Specify animated properties
  const animatedProps = useSpring({
    from: { marginTop: -200, opacity: 0 },
    opacity: 1,
    marginTop: 5,
    config: { mass: 100, tension: 150, friction: 10 },
  });
  return (
    // Step 2: Use properties created with useSpring()
    <a.div className="spring-in" style={{ ...animatedProps }}>
      {children}
    </a.div>
  );
};

export default SpringIn;
