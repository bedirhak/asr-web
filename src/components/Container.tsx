import React, { ReactNode } from "react";
import classNames from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={classNames("cg-container", className)}>{children}</div>
  );
};

export default Container;
