import { getDictionary } from "@/app/dictionaries";
import SalesDashboardPageView from "./page-view";

interface DashboardProps {
  params: {
    lang: any;
  };
}
const Dashboard = async ({ params: { lang } }: DashboardProps) => {
  const trans = await getDictionary(lang);
  return <SalesDashboardPageView trans={trans} />;
};

export default Dashboard;