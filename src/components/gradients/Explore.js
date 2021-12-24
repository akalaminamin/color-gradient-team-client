import React from "react";
import Gradients from "./Gradients";
import { useSelector } from "react-redux";
import Loader from "../dashboard/Loader";
const Explore = () => {
  const gradients = useSelector((state) => state.gradients.gradients);
  return (
    <div className="explore py-3">
      {!gradients? <Loader /> : <Gradients />}
    </div>
  );
};

export default Explore;
