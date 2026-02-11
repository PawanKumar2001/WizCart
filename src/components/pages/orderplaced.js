import React, { useState, useEffect } from 'react';

function LoadingAnimation(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container loading-container pt-5 mt-5 d-flex align-items-center justify-content-center flex-column heightutil">
      {isLoading ? (
        <div className={`loading-animation text-${props.mode === "light" ? "dark" : "light"}`}></div>
      ) : (
        <div className={`success-message text-${props.mode === "light" ? "dark" : "light"} text-center`}>
          <p className='lead'>Hooray! Your order is placed.</p>
          <p className='lead'><a href="/" className='text-decoration-none text-warning'>Let`s Shop Some More!</a></p>
        </div>
      )}

      {isLoading && (
        <div className={`loading-text text-${props.mode === "light" ? "dark" : "light"}`}>
          <p className='lead'>Hang on, placing your order...</p>
        </div>
      )}
    </div>
  );
}

export default LoadingAnimation;