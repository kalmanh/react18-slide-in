import './App.css';
import Box from './components/Box/Box';
import SlideIn from './components/SlideIn/SlideIn';
import { useState } from 'react';
import SpringIn from './components/SpringIn/SpringIn';

function App() {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <>
      <div className="App">
        <SlideIn startAnimation={startAnimation}>
          <Box text={'Hello SLIDE IN'} />
        </SlideIn>

        {startAnimation && (
          <SpringIn>
            <Box text={'Hello REACT SPRING'} />
          </SpringIn>
        )}
      </div>
      <button onClick={() => setStartAnimation(!startAnimation)}>
        Toggle Animation
      </button>
    </>
  );
}

export default App;
