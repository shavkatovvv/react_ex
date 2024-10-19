import React, { Children } from "react";

export const PrimaryBtn = ({ children, className, nextIcon }) => {
    return (
        <button className={className}>
            {children}
            {nextIcon}
        </button>
    );
};
