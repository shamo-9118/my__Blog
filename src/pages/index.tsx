import type { NextPage } from "next";
import Image from "next/image";
import { client } from "../libs/client";
import { GetStaticProps } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps, FormEventHandler, useState } from "react";

export type Blog = {
  title: string;
  body: string;
};
type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
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
    <div className="flex w-full flex-col items-center">
      <div className="mt-12 flex h-96  w-6/12 flex-col justify-start">
        <h1 className="font-AvenirRoman text-6xl">About This Site</h1>
        <div className="font-AvenirRoman text-xl font-bold">
          一介のWEBエンジニアが、日々のなんでもないことから、学んだこと、エンジニアリング、思ったこと、自由にゆるく書き綴っていくためのサイト。
        </div>
      </div>
      <div className="mb-24 flex w-5/12 flex-col justify-center">
        <div className="my-14 h-1 w-14 bg-red-500"></div>
        <div className="mx-7 mt-11">
          <div className="mb-11 font-AvenirRoman text-4xl font-bold">
            What is purpose in this blog?
          </div>
          <p className=" font-TsukushiB text-lg">
            日常のイベントを発信していきたいなと考えています。日々業務をする中で学んだことを定着させるため、さまざまなフィードバックを得るため、目的は色々あります。ただ多様な内容にしたいので技術によらず、日常の生活によったことも書かせていただきたいと思っています。。
          </p>
        </div>
        <div className="my-14 h-1 w-14 bg-red-500"></div>
        <div className="mx-7 mt-11">
          <div className="mb-11 font-AvenirRoman text-4xl font-bold">
            What is important to you?
          </div>
          <p className=" font-TsukushiB text-lg">
            「Be a
            Pro」プロフェッショナルであること。この価値観を最も大切にしています。日々の学びを怠らないこと、そして学びんだことを実践する行動力、ポジティブなマインドこそが全てにつながり、私と関わってくださる全ての人への還元にもつながると考えるからです。自身の行動や決断にオーナーシップを持ちミッションの達成に徹底したいと考えます。
          </p>
        </div>
        <div className="my-14 h-1 w-14 bg-red-500"></div>
        <div className="mx-7 mt-11">
          <div className="mb-11 font-AvenirRoman text-4xl font-bold">
            Who are you?
          </div>
          <p className=" font-TsukushiB text-lg">
            簡単に僕のことについてを書かせてください。自己満です（笑）
            <ul>
              <li>Camp</li>
              <li>Mountain climbing</li>
              <li>Read the books</li>
              <li>Training</li>
              <li>Running</li>
              自然に触れることが好きで、体を動かし自然と触れる、これは私にとって欠かせない要素です。また本を読むことも
            </ul>
          </p>
        </div>
      </div>

      <footer className=" inline-block h-96 w-full bg-neutral-700 text-white">
        <div>こんにち</div>
      </footer>
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

export default Blog;
