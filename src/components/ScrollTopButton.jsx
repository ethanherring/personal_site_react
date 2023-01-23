import React from 'react';
import { useEffect, useState } from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ScrollTopButton = () => {

    const [showScroll, setShowScroll] = useState(false)


    useEffect(() => {
        window.onscroll = () => {
          if (window.pageYOffset > 500) {
            setShowScroll(true)
          } else {
            setShowScroll(false)
          }
        };
      }, [])
      


    return (
      showScroll && (
        <div 
        style={{color: "white"}}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          {/* <i class="fas fa-arrow-up"></i> */}
          {<FontAwesomeIcon icon={faChevronUp} />}
        </div>
      )
    );
  }

  export default ScrollTopButton;
  