export default function Footer() {
  return (
    <footer className=" absolute bottom-5 left-1/2 translate-x-[-50%] py-8 text-center font-semibold transition-all duration-300 dark:text-white">
      <p className=" flex items-center justify-center gap-2">
        Created By
        {/* <FaHeart className=" text-red-600" /> */}
        <img src="./images/heart.png" className=" w-5" />
        <a
          className=" underline"
          href="https://atef.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Mohamed Atef
        </a>
      </p>
    </footer>
  );
}
