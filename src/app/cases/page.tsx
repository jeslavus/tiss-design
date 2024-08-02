"use client";

import Banner from "@/components/Banner/Banner";
import BestWorks from "@/components/BestWorks/BestWorks";
import Link from "next/link";

export default function Cases(): JSX.Element {
  return (
    <>
      <Banner title={"Работы"} link={false} />
      <BestWorks />
    </>
  );
}
