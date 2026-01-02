import BrandPage from "@/app/BrandPage";
import { getBrandBySubdomain, brandIds } from "@/data";
import { notFound } from "next/navigation";

// Generate static params for all brands
export function generateStaticParams() {
  return brandIds.map((subdomain) => ({
    subdomain,
  }));
}

// Generate metadata for each brand
export async function generateMetadata({ params }) {
  const { subdomain } = await params;
  const brand = getBrandBySubdomain(subdomain);
  
  if (!brand) {
    return {
      title: "Brand Not Found | GYLDAN",
    };
  }

  return {
    title: `${brand.name} | GYLDAN`,
    description: brand.hero.subheadline,
  };
}

export default async function BrandRoutePage({ params }) {
  const { subdomain } = await params;
  const brand = getBrandBySubdomain(subdomain);

  if (!brand) {
    notFound();
  }

  return <BrandPage tenant={subdomain} />;
}
