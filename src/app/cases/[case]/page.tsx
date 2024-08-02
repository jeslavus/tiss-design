import { notFound } from "next/navigation";
import Works from "@/json/cases.json";

interface Work {
  src: string;
  title: string;
  description: string;
  year: number;
  slug: string;
  parent: string;
}

const validSlugs = Works.map((work: Work) => work.slug);

interface PageProps {
  params: {
    case: string;
  };
}

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ case: slug }));
}

export default function CasePage({ params }: PageProps) {

  const { case: caseSlug } = params;
  
  if (!validSlugs.includes(caseSlug)) {
    notFound();
  }

  const work = Works.find((work) => work.slug === caseSlug);

  if (!work) {
    notFound();
  }

  return (
    <section id="case">
      <div className="container">
        <h1>{work.title}</h1>
        <p>{work.description}</p>
        <p>{work.year}</p>
      </div>
    </section>
  );
}
