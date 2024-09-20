import { StateCreator } from "zustand";

export type IndexSliceType = {
  textarea: string;
  loading: boolean;
  error: string;
  username: string;
  modal: boolean;
  setTextArea: (textarea: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setUsername: (username: string) => void;
  showModal: () => void;
  closeModal: () => void;
};

export const createIndexSlice: StateCreator<IndexSliceType> = (set) => ({
  textarea: "",
  loading: false,
  error: "",
  username: "",
  modal: false,
  setTextArea: (textarea) => set({ textarea }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setUsername: (username) => set({ username }),
  showModal: () => set({ modal: true }),
  closeModal: () => set({ modal: false }),
});
