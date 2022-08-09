import { MicroCMSListResponse } from "microcms-js-sdk";
import { NextPage } from "next";
import { Blog } from "./index";
import {
  LoadingOverlay,
  Button,
  Group,
  TextInput,
  Input,
} from "@mantine/core";



type Props = MicroCMSListResponse<Blog>;

const contactPage: NextPage<Props> = (props) => {
  return (
    <div className="flex flex-col justify-center">
      <Group position="center" className="mt-10">
        
        <TextInput placeholder="Your first name" label="First name" required />
        <TextInput placeholder="Your family name" label="Last name" required />
      </Group>
      <TextInput placeholder="your email" label="Email" required />

    </div>
  );
};

export default contactPage;
