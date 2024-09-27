import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createIndexSlice, IndexSliceType } from "./IndexSlice";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./NotificationSlice";

export const useAppStore = create<IndexSliceType & NotificationSliceType>()(
  devtools((...a) => ({
    ...createIndexSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
