import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeGradient } from "../../redux/actions/gradientActions";
const FullGradient = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector((state) => state.gradients.gradient);
  return (
    <>
      <div
        onClick={() => dispatch(removeGradient())}
        className="gradient-full animate__animated animate__zoomIn ease__out"
        style={{
          backgroundImage: `linear-gradient(${colors.direction}, ${colors.start}, ${colors.end})`,
        }}
      ></div>
    </>
  );
};

export default FullGradient;
