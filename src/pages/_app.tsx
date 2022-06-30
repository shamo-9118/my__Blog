import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { topMenu } from "../components/topMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="mt-3 flex justify-center bg-white">
        <header className="  flex px-6 ">
          <h1 className="mx-20 my-0 inline-block">
            <Link href="/">
              <a className="border-none font-Avenir text-3xl text-black no-underline">
                shoma.dev
              </a>
            </Link>
            <div className=" text-xs">雑多でゆるくなんでも書き綴ってます</div>
          </h1>
          {topMenu()}
        </header>
      </div>

      <main className=" mt-2 flex justify-center bg-neutral-100 ">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
