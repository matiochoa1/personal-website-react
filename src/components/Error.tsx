import { ReactNode } from "react";
export default function Error({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 mb-2 text-lg font-bold text-center text-white bg-red-900 rounded-lg">
      {children}
    </div>
  );
}
