import { useEffect, useState } from "react";

export default function useGetAdvice() {
  const [loading, setLoading] = useState(true);
  const [advice, setAdvice] = useState("");
  const [counter, setCount] = useState(0);

  function handleR() { 
    setCount(pre => pre + 1)
  }
  useEffect(() => {
    const getAdvice = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data?.slip);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getAdvice();
  }, [counter]);

  return { loading, advice, handleR };
}
