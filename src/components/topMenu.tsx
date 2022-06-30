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
      <Tabs.Tab
        label="Home"
        className=" font-Avenir text-lg text-black "
      ></Tabs.Tab>
      <Tabs.Tab
        label="Blog"
        className=" font-Avenir text-lg text-black"
      ></Tabs.Tab>
      <Tabs.Tab
        label="MyPortfolio"
        className=" font-Avenir text-lg text-black"
      ></Tabs.Tab>
      <Tabs.Tab
        label="Contact"
        className=" font-Avenir text-lg text-black"
      ></Tabs.Tab>
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
