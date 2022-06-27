import Button from "@/components/button/Button";
import Heading from "@/components/heading/Heading";
import Container from "@/components/wrapper/Container";
import type { NextPage } from "next";

import { HiFire } from "react-icons/hi";

const Home: NextPage = () => {
  return (
    <Container className="flex flex-col items-start justify-start">
      <Heading level={6} size="sm">
        Heading sm
      </Heading>
      <Heading level={6} size="base">
        Heading base
      </Heading>
      <Heading level={6} size="lg">
        Heading lg
      </Heading>
      <Heading level={6} size="xl">
        Heading xl
      </Heading>
      {/* <Heading level={1} size="xl">
        Nextjs ui v2 with typescript and storybook
      </Heading> */}
      <div className="mt-8 flex space-x-5">
        <Button as="a" type="filled" shape="rounded" leftIcon={<HiFire />}>
          Call to action
        </Button>
        <Button type="outlined" shape="rounded" leftIcon={<HiFire />}>
          Call to action
        </Button>
        <Button type="tinted" shape="rounded" leftIcon={<HiFire />}>
          Call to action
        </Button>
        <Button type="plain" shape="rounded" leftIcon={<HiFire />}>
          Call to action
        </Button>
      </div>
    </Container>
  );
};

export default Home;
