import { notFound } from "next/navigation";
import Works from "@/json/cases.json";
import BannerCase from "@/components/BannerCase/BannerCase";
import ContentCase from "@/components/ContentCase/ContentCase";

interface Work {
  src: string;
  title: string;
  description?: string;
  year: number;
  slug: string;
  parent?: string;
  url: string;
  task: string;
  goal: string;
}

const validSlugs: string[] = Works.map((work: Work) => work.slug);

interface PageProps {
  params: {
    case: string;
  };
}

export async function generateStaticParams(): Promise<
  {
    case: string;
  }[]
> {
  return validSlugs.map((slug) => ({ case: slug }));
}

export default function CasePage({ params }: PageProps): JSX.Element {
  const { case: caseSlug } = params;
  const work: Work | undefined = Works.find((work) => work.slug === caseSlug);

  if (!work || !validSlugs.includes(caseSlug)) notFound();

  return (
    <>
      <BannerCase src={work.src} title={work.title} year={work.year} />
      <ContentCase task={work.task} goal={work.goal} url={work.url} />
    </>
  );
}
