import type { NextPage } from "next";
import { client } from "../libs/client";
import { GetStaticProps } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { ComponentProps, FormEventHandler, useState } from "react";
import { Button } from "../libs/mantine/Button";

export type Blog = {
  title: string;
  body: string;
};
type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault(); //onSubmitのデフォルトの挙動をキャンセルする処理
    const q = e.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json: MicroCMSListResponse<Blog> = await data.json();
    setSearch(json);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;
  return (
    <div>
      <form className="flex gap-x-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          className="border border-gray-600 px-2"
        />
        <button className=" outline-none bg-white border-none appearance-none">
          <Button
          className=" bg-blue-400 hover:bg-blue-300 "
          >
            検索
          </Button>
        </button>
      </form>

      <p className="mt-4 text-gray-400 ">{` ${
        search ? "検索結果" : "記事の総数"
      } ${totalCount}件`}</p>

      <ul className="mt-4 space-y-4">
        {contents.map((content) => {
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
