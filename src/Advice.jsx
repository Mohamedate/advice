import React, { useEffect, useState } from "react";
import useGetAdvice from "./useGetAdvice";
import Divider from "./Divider";
import Spinner from "./Spinner";
import TextAdvice from "./TextAdvice";

export default function Advice() {
  const {
    loading,
    advice: { id, advice },
    handleR,
  } = useGetAdvice();
  const [loadingA, setLoadingA] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoadingA(false);
    }, [1500]);
    return () => clearTimeout(id);
  }, []);

  if (loading || loadingA) return <Spinner />;
  return (
    <div className=" relative bg-dGrayish max-w-[500px] p-5 md:p-10 text-center rounded-xl">
      <div className=" text-green uppercase text-[10px] tracking-[4px] mb-5">
        Advice <span className=" tracking-widest">#{id}</span>
      </div>
      <TextAdvice advice={advice} />
      <Divider />
      <button
        onClick={handleR}
        className="my-shadow left-1/2 translate-x-[-50%] bottom-[-24px] absolute bg-green w-12 h-12 justify-center flex items-center rounded-full"
      >
        <img src="./images/icon-dice.svg" />
      </button>
    </div>
  );
}
