import React from "react";

//component that overlays map with app title
export default function Header() {
  return (
    <h1>
      Waldo{" "}
      <span role="img" aria-label="magnifying-glass">
        🔍
      </span>
    </h1>
  );
}
