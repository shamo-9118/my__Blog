import { Tabs } from "@mantine/core";

export const topMenu = () => {
  return (
        <Tabs tabPadding="md" className="my-auto mx-auto flex justify-end px-10" classNames={{tabActive: 'text-red-400'}} color="red">
      <Tabs.Tab
        label="Gallery"
        className=" font-Avenir text-lg text-black red "
      ></Tabs.Tab>
      <Tabs.Tab
        label="Messages"
        className=" font-Avenir text-lg text-black"
      ></Tabs.Tab>
      <Tabs.Tab
        label="Settings"
        className=" font-Avenir text-lg text-black"
      ></Tabs.Tab>
    </Tabs>
  );
};
