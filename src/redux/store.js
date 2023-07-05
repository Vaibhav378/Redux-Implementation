import {configureStore} from "@reduxjs/toolkit";
import inc_dec from "../slices/inc_dec_slices";
// const reducer = (state = 0, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//       default:
//         return state;
//     }
//   };
  
const stores =configureStore(
    {
        reducer:inc_dec,
    });

    export default stores;