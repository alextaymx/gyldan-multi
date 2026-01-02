import { getTenant } from "@/utility/getTenant";
import MainPage from "./MainPage";
import BrandPage from "./BrandPage";

export default async function Page() {
  const { tenant, tenantType } = await getTenant();

  if (tenantType === 'brand') {
    return <BrandPage tenant={tenant} />;
  }

  return <MainPage />;
}
