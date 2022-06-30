import { Tabs, Transition } from "@mantine/core";
import { BrandGithub, GitBranch } from "tabler-icons-react";
import { BrandTwitter } from "tabler-icons-react";
import { Anchor } from "@mantine/core";
import Link from "next/link";

function Twitter() {
  return (
    <BrandTwitter
      size={30}
      strokeWidth={1}
      color={"black"}
      className=" mx-2 "
    />
  );
}

function Git() {
  return (
    <BrandGithub size={30} strokeWidth={1} color={"black"} className=" mx-2 " />
  );
}

export const topMenu = () => {
  return (
    <Tabs
      tabPadding="md"
      className="my-auto mb-2 flex justify-end px-10 pl-32"
      classNames={{ tabLabel: "hover:text-red-300" }}
      color="red"
    >
      <Link href="/">
        <a className=" m-0 p-0 no-underline">
          <Tabs.Tab
            label="Home"
            className=" font-Avenir text-lg text-black "
          ></Tabs.Tab>
        </a>
      </Link>
      <Link href="/postsList">
        <a className="no-underline">
          {" "}
          <Tabs.Tab
            label="Blog"
            className=" font-Avenir text-lg text-black"
          ></Tabs.Tab>
        </a>
      </Link>
      <Link href="/myPortfolio">
        <a className="no-underline">
          <Tabs.Tab
            label="MyPortfolio"
            className=" font-Avenir text-lg text-black"
          ></Tabs.Tab>
        </a>
      </Link>
      <Link href="/contactPage">
        <a className="no-underline">
          <Tabs.Tab
            label="Contact"
            className=" font-Avenir text-lg text-black"
          ></Tabs.Tab>
        </a>
      </Link>

      <BrandGithub
        className="mx-3 rounded-full hover:bg-red-50"
        size={30}
        strokeWidth={1}
        color={"black"}
      ></BrandGithub>

      <BrandTwitter
        className="mx-3 rounded-full hover:bg-red-50"
        size={30}
        strokeWidth={1}
        color={"black"}
      ></BrandTwitter>
    </Tabs>
  );
};
