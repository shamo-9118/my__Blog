import { Card, Image, Text, Group } from "@mantine/core";
import { Badge } from "@mantine/core";
import { ReactNode } from "react";
import { Bold } from "tabler-icons-react";

const CardBadge = () => {
  return <Badge color="dark" size="sm" radius="sm"></Badge>;
};

export const MantineCard = (props) => {
  console.log(props.title);

  return (
    <div style={{ width: 320, margin: "auto" }}>
      <Card
        shadow="sm"
        p="xl"
        component="a"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        <Card.Section>
          <Image
            src="Typescript_logo_2020.svg.jpeg"
            height={200}
            alt="No way!"
          />
        </Card.Section>

        <Text weight="Bold" size="lg" className=" my-3 ">
          {props.title}
        </Text>

        <Text size="xs" className="mb-1">
          2022-6-30
        </Text>
        <Group className="gap-2">
          <Badge color="dark" size="xs" radius="sm">
            ・インタビュー
          </Badge>
          <Badge color="dark" size="xs" radius="sm">
            ・エンジニア
          </Badge>
        </Group>
      </Card>
    </div>
  );
};
