import React, { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./Toast.css";
const Toast = ({ toastTitle, className = "toast" }) => {
  const toast = useRef("");

  const closeToast = () => {
    toast.current.className = "toast";
  };

  useEffect(() => {
    setTimeout(() => {
      closeToast();
    }, 1000);
  }, [toastTitle]);

  return (
    <div ref={toast} className={className}>
      <div className='toast-title'>{toastTitle}</div>
      <div className='toast-btn'>
        <FaTimes className='toast-btn' onClick={closeToast}></FaTimes>
      </div>
    </div>
  );
};

export default Toast;
