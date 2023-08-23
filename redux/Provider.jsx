//Provider.js
"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import {reducer } from "./reducer"

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}