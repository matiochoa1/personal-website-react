import { create } from "zustand";
import { devtools } from "zustand/middleware";

type FormState = {
  textarea: string;
  loading: boolean;
  error: string;
  username: string;
  setTextArea: (textarea: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setUsername: (username: string) => void;
};

export const useAppStore = create<FormState>()(
  devtools((set) => ({
    textarea: "",
    loading: false,
    error: "",
    username: "",
    setTextArea: (textarea) => set({ textarea }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
    setUsername: (username) => set({ username }),
  }))
);
