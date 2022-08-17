import { Box, Tabs, Transition } from "@mantine/core";
import { BrandGithub, GitBranch } from "tabler-icons-react";
import { BrandTwitter } from "tabler-icons-react";
import { Anchor } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

function Twitter() {
  return (
    <BrandTwitter
      size={30}
      strokeWidth={1}
      color={"black"}
      className=" mx-3 pb-1 "
    />
  );
}

function Git() {
  return (
    <BrandGithub
      size={30}
      strokeWidth={1}
      color={"black"}
      className=" mx-3 pb-1 "
    />
  );
}

export const topMenu = () => {
  const tabItems = [
    { href: "/", tab: "Home" },
    { href: "/postsLists", tab: "Blog" },
    { href: "/contactPage", tab: "Contact" },
  ];
  return (
    <div className="flex items-center">
      {tabItems.map((item) => {
        return (
          <Link href={item.href} key={item.href}>
            <a className="font-bold text-black no-underline">
              <p className="px-5 font-AvenirRoman text-xl underline underline-offset-8 duration-300 hover:-translate-y-1 hover:scale-110 hover:text-red-400">
                {item.tab}
              </p>
            </a>
          </Link>
        );
      })}
      <div>
        {" "}
        <a href="https://github.com/">{Git()}</a>
        <a href="https://twitter.com/i/flow/login">{Twitter()}</a>
      </div>
    </div>
  );
};
