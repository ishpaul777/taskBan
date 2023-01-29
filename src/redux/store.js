import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './reducers/boards';
import colorThemeReducer from './reducers/colorTheme';

const store = configureStore({
  reducer: {
   boards: boardsReducer,
   theme: colorThemeReducer,
  }
})

export default store;
