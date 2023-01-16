import React from "react";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

function TagCloudComponent() {
  return (
    <div>
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
        })}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          "VSCode",
          "TypeScript",
          "React",
          "Preact",
          "Parcel",
          "Jest",
          "Next",
          "ESLint",
          "Framer Motion",
          "Three.js",
        ]}
      </TagCloud>
    </div>
  );
}

export default TagCloudComponent;
