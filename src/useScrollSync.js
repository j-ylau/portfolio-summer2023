import { useEffect, useRef } from 'react';

export function useScrollSync(scrollTargetId) {
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    const scrollTarget = document.getElementById(scrollTargetId);
    scrollTargetRef.current = scrollTarget;

    const handleScrollEvent = (event) => {
      if (scrollTargetRef.current) {
        scrollTargetRef.current.scrollTop = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [scrollTargetId]);

  return scrollTargetRef;
}
