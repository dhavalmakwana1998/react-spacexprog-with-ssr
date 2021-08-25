import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    var scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button>
      <h6
        onClick={scrollToTop}
        className="p-3 bg-theme backToTop"
        style={{ display: visible ? "inline" : "none" }}
      >
        &#8593;
      </h6>
    </button>
  );
};

export default ScrollButton;
