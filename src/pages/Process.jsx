import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RawHtml from '../components/RawHtml';
import EmailCTA from '../components/EmailCTA';
import processHtml from '../content/Process.html?raw';

export default function Process() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.key]);

  return (
    <>
      <RawHtml html={processHtml} />
      <EmailCTA />
    </>
  );
}
