import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./redux/Counterslice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  const [amount, setAmount] = useState("");

  const handleIncrement = () => {
    if (amount === "" || isNaN(amount)) {
      alert("Please provide a proper numeric value.");
    } else {
      dispatch(incrementByAmount(Number(amount)));
      setAmount(""); // Reset input only after successful dispatch
    }
  };

  const handleDecrement = () => {
    if (count <= 0) {
      alert("Counter cannot go below 0.");
      return;
    }
    dispatch(decrement());
  };

  return (
    <>
      <h1 className="text-center text-danger fw-bolder mt-5">
        Counter-Application
        <img
          width="50px"
          src="https://weblium.com/blog/wp-content/uploads/2017/09/counter.gif"
          alt=""
        />
      </h1>

      <div className="container mt-5  p-4 p-md-5 w-100 w-md-50">
        <h1 className="text-center display-4">{count}</h1>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 w-100 mt-4">
          <button
            className="btn btn-success w-100 w-md-auto"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            className="btn btn-danger w-100 w-md-auto"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>

          <button
            className="btn btn-warning w-100 w-md-auto"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>

        {/* Input & Increment by Amount */}
        <div className="d-flex flex-column flex-md-row mt-4 justify-content-center align-items-center gap-3">
          <input
            type="text"
            className="form-control w-100 w-md-50 text-center"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            className="btn btn-primary w-100 w-md-auto"
            onClick={handleIncrement}
          >
            Increment Amount
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
