import { Transition } from "@mantine/core";

export const  Animation =({ opened })=> {
  return (
    <Transition mounted={opened} transition="fade" duration={400} timingFunction="ease">
      {(styles) => <div style={styles}>Your modal</div>}
    </Transition>
  );
}