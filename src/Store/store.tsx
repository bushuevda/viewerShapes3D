import { configureStore } from '@reduxjs/toolkit'
import shapeGroupReducer from './shapeStore/reducerShapeGroup'
export const store = configureStore({
    reducer: {
      shapesGroup: shapeGroupReducer,
    },    
  })


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

