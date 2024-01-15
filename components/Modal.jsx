import React from 'react';

export default function Modal({children}) {
    return (
      <div className="modal">
        <div className="modal-box">
          {children}
        </div>
      </div>
    );
}