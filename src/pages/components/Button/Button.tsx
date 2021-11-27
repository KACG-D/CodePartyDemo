import React from "react";
import "./Button.scss";
type Prop = {};

export const Button: React.FC<Prop> = ({ children }) => {
  return <button className="Button">{children}</button>;
};
