import {
  handleOnIncrease,
  handleOnDecrease,
  handleOnTwice,
} from "./CounterSlice";
import { useDispatch } from "react-redux";

export const Button = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        <button onClick={() => dispatch(handleOnIncrease())}>+</button>
        <button onClick={() => dispatch(handleOnDecrease())}>-</button>
        <button onClick={() => dispatch(handleOnTwice())}>++</button>
      </p>
    </div>
  );
};
