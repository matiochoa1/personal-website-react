import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createIndexSlice, IndexSliceType } from "./IndexSlice";

export const useAppStore = create<IndexSliceType>()(
  devtools((...a) => ({
    ...createIndexSlice(...a),
  }))
);
