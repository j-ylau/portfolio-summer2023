import React, { useEffect, useRef } from "react";
import "./HoverEffect.css";

function HoverEffect() {
  const blobRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      blobRef.current.style.left = `${clientX}px`;
      blobRef.current.style.top = `${clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
    </div>
  );
}

export default HoverEffect;
