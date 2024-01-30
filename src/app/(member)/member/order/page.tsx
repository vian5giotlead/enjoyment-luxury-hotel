import { getOrders } from '@/assets/api';
import MemberOrder from './MemberOrder';

export default async function Page() {
  const orderData: OrderResponseData = await getOrders();

  return <MemberOrder data={orderData.result} />;
}
