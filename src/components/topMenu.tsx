import { Tabs } from "@mantine/core";

export const topMenu = () => {
  return (
    <Tabs
      tabPadding="md"
      className="my-auto mx-auto flex justify-end px-10"
      classNames={{tabLabel: 'hover:text-red-400'}}
      color="red"
    >
      <Tabs.Tab
        label="Home"
        className=" red font-Avenir text-lg text-black "
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
    </Tabs>
  );
};
