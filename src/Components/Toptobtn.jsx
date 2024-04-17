import React, { useContext, useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import { DarkModeContext } from "../GlobalContext/Theme";



const Toptobtn = () => {
  const [visible, setVisible] = useState(false);

  const {darkMode} = useContext(DarkModeContext)

  useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        })
  }, [])

  const TopTobtn = () => {
    window.scrollTo ({
        top: "0",
        behavior: 'smooth',
    })
  }

  return (
    <div>
      <button
      onClick={TopTobtn}
        style={{
          position: "fixed",
          zIndex:3,
          right : "20px",
          bottom: "30px",
          display: visible ? "block" : "none",
          border: "none",
          backgroundColor: "none",
          background: "none",
          color: darkMode === true ? 'white' : 'black',
        }}
      >
        
        <GoArrowUp  size={40} />
      </button>
    </div>
  );
};

export default Toptobtn;
