import Button from "@/components/button/Button";
import Wrapper from "@/components/wrapper/Wrapper";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Wrapper className="flex flex-col items-start justify-start">
      <h1 className="mb-3 pb-3 text-6xl font-semibold text-primary">
        Nextjs ui version 2 with typescript and storybook
      </h1>
      <div className="space-x-5">
        <Button type="filled">Call to action</Button>
        <Button type="outlined">Call to action</Button>
        <Button type="tinted">Call to action</Button>
        <Button type="plain">Call to action</Button>
      </div>
    </Wrapper>
  );
};

export default Home;
