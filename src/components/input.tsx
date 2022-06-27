import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps, FormEventHandler, useState } from "react";
import { Button } from "../libs/mantine/Button";
import { ComponentProps, FormEventHandler, useState } from "react";


export const inputComponent =()=>{
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
  return(
  
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
  )
}