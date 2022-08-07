import { MicroCMSListResponse } from "microcms-js-sdk";
import { NextPage } from "next";
import { Blog } from "./index";
import { useState } from "react";
import { LoadingOverlay, Button, Group } from "@mantine/core";

type Props = MicroCMSListResponse<Blog>;

const contactPage: NextPage<Props> = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex h-full flex-col justify-center">
      <div style={{ width: 400, position: "relative" }}>
        <LoadingOverlay visible={visible} />
        {/* ...other content */}
      </div>

      <Group position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </div>
  );
};

export default contactPage;
