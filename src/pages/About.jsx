import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RawHtml from '../components/RawHtml';
import aboutHtml from '../content/About.html?raw';

export default function About() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.key]);

  return <RawHtml html={aboutHtml} />;
}