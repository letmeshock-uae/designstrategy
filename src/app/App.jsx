import React from 'react';
import SlideContainer from '../components/SlideContainer';
import PasswordGate from '../components/PasswordGate';
import CursorTrail from '../components/CursorTrail';
import { ThemeProvider } from '../components/ThemeContext';
import { LanguageProvider } from '../components/LanguageContext';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';

// Import all slides
import Slide01 from '../slides/Slide01';
import Slide02 from '../slides/Slide02';
import Slide05 from '../slides/Slide05';
import Slide06 from '../slides/Slide06';
import Slide07 from '../slides/Slide07';
import Slide08 from '../slides/Slide08';
import Slide09 from '../slides/Slide09';
import Slide10 from '../slides/Slide10';
import Slide11 from '../slides/Slide11';
import Slide12 from '../slides/Slide12';
import Slide13 from '../slides/Slide13';
import Slide14 from '../slides/Slide14';
import Slide15 from '../slides/Slide15';
import Slide16 from '../slides/Slide16';
import Slide17 from '../slides/Slide17';
import Slide18 from '../slides/Slide18';
import Slide19 from '../slides/Slide19';
import Slide20 from '../slides/Slide20';
import Slide21 from '../slides/Slide21';
import Slide22 from '../slides/Slide22';
import Slide23 from '../slides/Slide23';
import Slide24 from '../slides/Slide24';
import Slide25 from '../slides/Slide25';
import Slide26 from '../slides/Slide26';
import Slide27 from '../slides/Slide27';
import Slide28 from '../slides/Slide28';

const slides = [
  <Slide01 key="1" />,
  <Slide02 key="2" />,
  <Slide05 key="3" />,
  <Slide06 key="4" />,
  <Slide07 key="5" />,
  <Slide08 key="6" />,
  <Slide09 key="7" />,
  <Slide10 key="8" />,
  <Slide11 key="9" />,
  <Slide12 key="10" />,
  <Slide13 key="11" />,
  <Slide14 key="12" />,
  <Slide15 key="13" />,
  <Slide16 key="14" />,
  <Slide17 key="15" />,
  <Slide18 key="16" />,
  <Slide19 key="17" />,
  <Slide20 key="18" />,
  <Slide21 key="19" />,
  <Slide22 key="20" />,
  <Slide23 key="21" />,
  <Slide24 key="22" />,
  <Slide25 key="23" />,
  <Slide26 key="24" />,
  <Slide27 key="25" />,
  <Slide28 key="26" />,
];


export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CursorTrail />
        <ThemeToggle />
        <LanguageToggle />
        <PasswordGate>
          <SlideContainer slides={slides} />
        </PasswordGate>
      </LanguageProvider>
    </ThemeProvider>
  );
}

