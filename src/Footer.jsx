export default function Footer() {
  return (
    <footer className=" absolute bottom-4 w-full py-8  text-center font-semibold transition-all duration-300 dark:text-white">
      <p className=" flex items-center justify-center gap-2">
        Created By
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
