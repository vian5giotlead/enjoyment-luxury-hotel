import { getOrderData } from "@/assets/api";
import MemberOrder from "./MemberOrder";

export default async function Page() {

  const orderData: OrderResponseData = await getOrderData();

  return <MemberOrder data={orderData.result} />;
};

