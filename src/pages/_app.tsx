import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { topMenu } from "../components/topMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="bg-white h-15 flex  justify-center">
        <header className=" inline-blok flex px-6 ">
          <h1 className="inline-block mx-20 my-0">
            <Link href="/">
              <a className="border-none font-Avenir text-3xl no-underline text-black">
                shoma.dev
              </a>
            </Link>
            <div className=" text-xs">雑多でゆるくなんでも書き綴ってます</div>
          </h1>
          {topMenu()}
        </header>
      </div>

      <main className=" mt-4 bg-neutral-100 flex justify-center ">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
