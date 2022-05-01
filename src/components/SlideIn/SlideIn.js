import './SlideIn.css';
const SlideIn = ({ children, startAnimation }) => {
  const transtionProperties = startAnimation
    ? { marginTop: '5px', opacity: 1 }
    : {};
  return (
    <div className="slide-in" style={transtionProperties}>
      {children}
    </div>
  );
};
export default SlideIn;
