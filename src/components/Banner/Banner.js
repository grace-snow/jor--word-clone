import React from "react";

function Banner({ status, children, action, actionText }) {
  return (
    <div className={`banner ${status}`}>
      {children}
      {action && (
        <button type='button' onClick={action} autoFocus>
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
