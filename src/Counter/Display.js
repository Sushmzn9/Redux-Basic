import React from "react";
import { useSelector } from "react-redux";
export const Display = () => {
  const { counter } = useSelector((state) => {
    return state.counterData;
  });
  return <div>{counter}</div>;
};
