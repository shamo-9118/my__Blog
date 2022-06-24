import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="bg-gray-300 ">
        <header className=" inline-blok mx-20 px-4">
          <h1 className="inline-block ">
            <Link href="/">
              <a className="border-none font-sans text-2xl font-bold text-gray-800 no-underline">
                shoma Blog
              </a>
            </Link>
          </h1>
        </header>
      </div>

      <main className=" mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
