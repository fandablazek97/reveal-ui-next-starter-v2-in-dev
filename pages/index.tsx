import Button from "@/components/button/Button";
import Heading from "@/components/heading/Heading";
import Wrapper from "@/components/wrapper/Wrapper";
import type { NextPage } from "next";

import { HiFire } from "react-icons/hi";

const Home: NextPage = () => {
  return (
    <Wrapper className="flex flex-col items-start justify-start">
      <div className="flex flex-col gap-5">
        <Heading level={1} size="xl" color="none">
          Heading xl
        </Heading>
        <Heading level={2} size="lg">
          Heading lg
        </Heading>
        <Heading level={3} size="base">
          Heading base
        </Heading>
        <Heading level={4} size="sm">
          Heading sm
        </Heading>
      </div>
      {/* <Heading level={1} size="xl">
        Nextjs ui v2 with typescript and storybook
      </Heading> */}
      <div className="mt-8 flex space-x-5">
        <Button as="a" type="filled" leftIcon={<HiFire />}>
          Call to action
        </Button>
        <Button type="outlined" leftIcon={<HiFire />}>
          Call to action
        </Button>
        <Button type="tinted" leftIcon={<HiFire />}>
          Call to action
        </Button>
        <Button type="plain" leftIcon={<HiFire />}>
          Call to action
        </Button>
      </div>
    </Wrapper>
  );
};

export default Home;
