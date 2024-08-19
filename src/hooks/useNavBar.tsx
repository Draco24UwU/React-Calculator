import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import RoutesConstants from "@/constants/RoutesConstants";

function useNavBar() {
  const { pathname } = useLocation();
  const [currentElement, setcurrentElement] = useState(pathname);

  useEffect(() => {
    setcurrentElement(pathname);
  }, [pathname]);

  return {
    currentElement,
    RoutesConstants,
  };
}

export default useNavBar;
