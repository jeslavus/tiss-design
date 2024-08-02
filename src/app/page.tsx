import Banner from "@/components/Banner/Banner";
import BestWorks from "@/components/BestWorks/BestWorks";

export default function Home(): JSX.Element {
  return (
    <>
      <Banner title={"UI/UX & digital designer"} link={true} />
      <BestWorks count={6} />
    </>
  );
}
