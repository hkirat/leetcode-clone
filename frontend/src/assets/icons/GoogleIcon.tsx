import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M17.848 8.171H9.296v2.472h6.138c-.327 3.431-3.188 4.914-5.959 4.914-3.516 0-6.644-2.675-6.644-6.542 0-3.722 2.98-6.543 6.644-6.543 2.8 0 4.5 1.774 4.5 1.774l1.727-1.774S13.378 0 9.356 0C4.052-.029 0 4.304 0 8.986 0 13.522 3.814 18 9.445 18c4.976 0 8.552-3.286 8.552-8.2.03-1.018-.15-1.629-.15-1.629Z"
    />
  </svg>
);
export default SvgComponent;
