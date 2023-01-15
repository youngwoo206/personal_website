import React, { useEffect } from "react";
// @ts-ignore
import tagcloud from "tagcloud";

function TextSphere() {
  useEffect(() => {
    return () => {
      const container: any = ".tagcloud";
      const text = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "SASS",
        "Tailwind CSS",
        "Bootstrap",
        "Python",
        "Data Structures",
        "Algorithms",
        "React",
        "Node.js",
        "React Native",
        "Firebase",
        "SQL",
        "VBA",
        "Java",
        "Redux",
        "Git",
      ];
      const options: any = {
        radius: 280,
        maxSpeed: "slow",
        initSpeed: "none",
        keep: false,
      };

      tagcloud(container, text, options);
    };
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
}

export default TextSphere;
