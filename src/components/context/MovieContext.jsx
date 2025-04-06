import { createContext, useContext } from "react";

// إنشاء الـ Context فقط
export const GlobalContext = createContext();

// دالة Custom Hook لاستخدام الـ Context
export const useMovieContext = () => {
  return useContext(GlobalContext);
};
