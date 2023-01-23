import React, { useRef } from 'react';

function ScrollToContent() {
  const contentRef = useRef(null);

  const handleClick = () => {
    window.scrollTo({
      top: contentRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <button onClick={handleClick}>Click to Scroll</button>
      <div ref={contentRef} id="content">
        Scroll to this content
      </div>
    </>
  );
}

export default ScrollToContent;