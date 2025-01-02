import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
function TypedText() {
    const typedRef = useRef(null);
    useEffect(() => {
        const options = {
          strings: [
            "Full Stack Developer",
            "Web Developer",
            "Front End Developer",
            "Web Designer"
          ],
          typeSpeed: 100,
          backSpeed: 100,
          loop: true,
        };
    
        const typed = new Typed(typedRef.current, options);
    
        return () => {
          typed.destroy();
        };
      }, []);

  return (
    <div>
       <div className="typed-text" ref={typedRef}></div>
    </div>
  );
}

export default TypedText;
