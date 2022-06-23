import type { NextPage } from "next";
import { client } from "../libs/client";
import { GetStaticProps } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { ComponentProps, FormEventHandler } from "react";
export type Blog = {
  title: string;
  body: string;
};
type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <form className="flex gap-x-2" >
        <input
          type="text"
          name="query"
          className="border border-gray-600 px-2"
        />
        <button className="border border-gray-600 px-2">検索</button>
      </form>
      <p className="mt-4 text-gray-400">{`記事の総件数: ${props.totalCount}件`}</p>
      <ul className="mt-4 space-y-4">
        {props.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a className="text-xl text-blue-800 underline hover:text-blue-400">
                  {content.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blog",
    // queries: { q: "test" },
  });
  return {
    props: data,
  };
};

export default Home;
