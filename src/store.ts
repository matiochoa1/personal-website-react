import { create } from "zustand";
import { devtools } from "zustand/middleware";

type FormState = {
  textarea: string;
  loading: boolean;
  error: string;
  setTextArea: (textarea: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
};

export const useAppStore = create<FormState>()(
  devtools((set) => ({
    textarea: "",
    loading: false,
    error: "",
    setTextArea: (textarea) => set({ textarea }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
  }))
);
