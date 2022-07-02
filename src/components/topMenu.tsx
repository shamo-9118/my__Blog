import { Box, Tabs, Transition } from "@mantine/core";
import { BrandGithub, GitBranch } from "tabler-icons-react";
import { BrandTwitter } from "tabler-icons-react";
import { Photo, MessageCircle, Settings } from "tabler-icons-react";

import { Anchor } from "@mantine/core";
import Link from "next/link";

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
    <BrandGithub size={30} strokeWidth={1} color={"black"} className=" mx-3 pb-1 " />
  );
}

export const topMenu = () => {
  return (
    <Box className="flex items-end">
      <Tabs color="red">
        <Tabs.Tab label="HOME"></Tabs.Tab>
        <Tabs.Tab label="BLOG"></Tabs.Tab>
        <Tabs.Tab label="CONTACT"></Tabs.Tab>
      </Tabs>
      {Git()}
      {Twitter()}
    </Box>
  );
};
