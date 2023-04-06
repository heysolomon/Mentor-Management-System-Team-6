import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   product: [],
//   percent: 0,
//   total: 0,
// };



const IncreaseDescreaseSlice = createSlice({
  name: "drugs",
  initialState: {count: 0},
  reducers: {
   addPercent: (state) => {
    state.count += 1;
   },
   removePercent: (state) => {
    state.count -= 1;
   }
    
  },
 
});

export const { addPercent, removePercent,  } = IncreaseDescreaseSlice.actions;
export default IncreaseDescreaseSlice.reducer;

