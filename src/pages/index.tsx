import type { NextPage } from "next";
import { client } from "../libs/client";
import { GetStaticProps } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
export type Blog = {
  title: string;
  body: string;
};
type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <p className=" text-gray-400">{`記事の総件数: ${props.totalCount}件`}</p>
      <ul className="mt-4 space-y-4">
        {props.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a className="underline text-blue-800 text-xl hover:text-blue-400" >{content.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default Home;
