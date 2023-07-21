import React from "react";
import "./Modal.css";

import reactDom from "react-dom";
function Modal({children}){
return reactDom.createPortal(
<div className="ModalBackground">
    {children}
</div>,
document.getElementById("modal")
);
}
export {Modal};