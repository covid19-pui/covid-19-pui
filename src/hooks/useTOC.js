import { useEffect } from 'react';
import tocbot from 'tocbot';

export default function useTOC() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.tocSection',
      headingSelector: '.tocHeading',
      activeLinkClass: 'activeHeading'
    });

    return () => {
      tocbot.destroy();
    };
  }, []);
}
