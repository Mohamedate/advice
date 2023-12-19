import { useEffect, useState } from "react";
export default function TextAdvice({ advice = "" }) {
  const [textAnim, setTextAnim] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      if (index < advice.length) {
        setTextAnim((pre) => pre + advice[index]);
        setIndex((pre) => pre + 1);
      }
    }, 30);
    return () => clearTimeout(id);
  }, [index, textAnim]);
  return <div className=" text-cyan text-2xl">"{textAnim}"</div>;
}
