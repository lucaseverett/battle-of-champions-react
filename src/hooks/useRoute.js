import { useLocation } from "react-router-dom";

function useRoute() {
  const { pathname } = useLocation();

  if (pathname.includes("argos")) {
    return "argos";
  } else if (pathname.includes("sparta")) {
    return "sparta";
  } else if (pathname.includes("about")) {
    return "about";
  }
  return "dashboard";
}

export default useRoute;
