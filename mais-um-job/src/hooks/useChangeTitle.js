import { useEffect } from "react";

export default function useChangeTitle(title){
  useEffect(() => {
    document.title = `${title}`
  }, [title]);
}