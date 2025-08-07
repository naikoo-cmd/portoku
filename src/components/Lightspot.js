import React, { useEffect, useRef } from "react";
import "./Lightspot.css";

export default function Lightspot() {
  const spotRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(e) {
      if (spotRef.current) {
        spotRef.current.style.left = `${e.clientX}px`;
        spotRef.current.style.top = `${e.clientY}px`;
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="lightspot" ref={spotRef}></div>;
}