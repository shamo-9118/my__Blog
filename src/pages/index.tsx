import type { NextPage } from "next";
import Image from "next/image";
import { client } from "../libs/client";
import { GetStaticProps } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps, FormEventHandler, useState } from "react";
import { MantineCard } from "../components/card";

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
      <div className="mt-12 flex h-96  w-8/12 flex-col justify-start">
        <h1 className="font-AvenirRoman text-6xl">About This Site</h1>
        <div className="font-AvenirRoman text-xl font-bold">
          一介のWEBエンジニアが、日々のなんでもないことから、学んだこと、エンジニアリング、思ったこと、自由にゆるく書き綴っていくためのサイト。
        </div>
      </div>
      <div className="flex w-1/2 flex-col justify-center py-24">
        <div className="my-14 h-1 w-14 bg-red-500"></div>
        <div className="mx-7 mt-11">
          <div className="mb-11 font-AvenirRoman text-3xl font-bold">
            What is an open organization?
          </div>
          <p className=" font-TsukushiB">
            「Open
            Organization」とは、組織をつくるうえで必要になる、さまざまな情報を公開し、参照・利用すること。つまり、世の中の組織がより良い方向へ進むことを目指す活動です。組織の設計・構造、人事評価システムや文化、事業運営のフレームワークなど、まさに組織のアーキテクチャ、ソースコードとなる部分の公開を「Open
            Organization活動」としています。
          </p>
        </div>
        <div className="my-14 h-1 w-14 bg-red-500"></div>

        <div className="mx-7 mt-11">
          <div className="mb-11 font-AvenirRoman text-3xl font-bold">
            Why do we want an open organization?
          </div>
          <p className=" font-TsukushiB">
            オープンソースが、ソフトウェアの肝となるソースコードを公開し発展してきたように、組織の内部情報を公開することは、会社の知見やエッセンスを公に共有することでもあります。組織をオープンにする文化が世の中に根付けば、世の中のさまざまな組織が、実践のなかで得たナレッジを共有し合えます。こうして良い組織の情報が以前よりもスピーディーに駆け巡り、世の中にある組織のレベルの向上が見込めると私たちは考えています。
          </p>
        </div>
        <div className="my-14 h-1 w-14 bg-red-500"></div>

        <div className="mx-7 mt-11">
          <div className="mb-11 font-AvenirRoman text-3xl font-bold">
            Why do we want an open organization?
          </div>
          <p className=" font-TsukushiB">
            オープンソースが、ソフトウェアの肝となるソースコードを公開し発展してきたように、組織の内部情報を公開することは、会社の知見やエッセンスを公に共有することでもあります。組織をオープンにする文化が世の中に根付けば、世の中のさまざまな組織が、実践のなかで得たナレッジを共有し合えます。こうして良い組織の情報が以前よりもスピーディーに駆け巡り、世の中にある組織のレベルの向上が見込めると私たちは考えています。
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
