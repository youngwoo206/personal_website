import React from "react";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

function TagCloudComponent() {
  return (
    <div>
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(560, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "normal",
          keep: false,
        })}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
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
        ]}
      </TagCloud>
    </div>
  );
}

export default TagCloudComponent;
