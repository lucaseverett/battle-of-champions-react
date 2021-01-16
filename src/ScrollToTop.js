import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ scrollRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
    scrollRef.current.focus();
  }, [pathname]);

  return null;
}

export default ScrollToTop;
