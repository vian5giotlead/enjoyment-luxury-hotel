import { getOrderData } from "@/assets/api";
import MemberOrder from "./MemberOrder";


// const orderData = [
//   {
//     userInfo: {
//       address: {
//         zipcode: 802,
//         detail: '文山路23號',
//       },
//       name: 'Joanne Chen',
//       phone: '0912345678',
//       email: 'example@gmail.com',
//     },
//     _id: '653e335a13831c2ac8c389bb',
//     roomId: {
//       name: '尊爵雙人房',
//       description: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
//       imageUrl: 'https://picsum.photos/200/300?image=0',
//       imageUrlList: [
//         'https://picsum.photos/200/300?image=1',
//         'https://picsum.photos/200/300?image=2',
//         'https://picsum.photos/200/300?image=3',
//       ],
//       areaInfo: '24坪',
//       bedInfo: '一張大床',
//       maxPeople: 4,
//       price: 10000,
//       status: 1,
//       facilityInfo: [
//         {
//           title: '平面電視',
//           isProvide: true,
//         },
//       ],
//       amenityInfo: [
//         {
//           title: '衛生紙',
//           isProvide: true,
//         },
//       ],
//       _id: '653e4661336cdccc752127a0',
//       createdAt: '2023-10-29T11:47:45.641Z',
//       updatedAt: '2023-10-29T11:47:45.641Z',
//     },
//     checkInDate: '2023-06-17T16:00:00.000Z',
//     checkOutDate: '2023-06-18T16:00:00.000Z',
//     peopleNum: 2,
//     orderUserId: '6533f0ef4cdf5b7f762747b0',
//     status: 0,
//     createdAt: '2023-10-29T10:26:34.498Z',
//     updatedAt: '2023-10-29T10:26:34.498Z',
//   },
//   {
//     userInfo: {
//       address: {
//         zipcode: 802,
//         detail: '文山路23號',
//       },
//       name: 'Joanne Chen',
//       phone: '0912345678',
//       email: 'example@gmail.com',
//     },
//     _id: '653e335a13831c2ac8c38666',
//     roomId: {
//       name: '尊爵雙人房',
//       description: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
//       imageUrl: 'https://picsum.photos/200/300?image=4',
//       imageUrlList: [
//         'https://picsum.photos/200/300?image=5',
//         'https://picsum.photos/200/300?image=6',
//         'https://picsum.photos/200/300?image=7',
//       ],
//       areaInfo: '24坪',
//       bedInfo: '一張大床',
//       maxPeople: 4,
//       price: 10000,
//       status: 1,
//       facilityInfo: [
//         {
//           title: '平面電視',
//           isProvide: true,
//         },
//       ],
//       amenityInfo: [
//         {
//           title: '衛生紙',
//           isProvide: true,
//         },
//       ],
//       _id: '653e4661336cdccc752127a0',
//       createdAt: '2023-10-20T11:47:45.641Z',
//       updatedAt: '2023-10-20T11:47:45.641Z',
//     },
//     checkInDate: '2024-06-17T16:00:00.000Z',
//     checkOutDate: '2024-06-18T16:00:00.000Z',
//     peopleNum: 2,
//     orderUserId: '6533f0ef4cdf5b7f762747b0',
//     status: 0,
//     createdAt: '2023-10-29T10:26:34.498Z',
//     updatedAt: '2023-10-29T10:26:34.498Z',
//   },
// ];


export default async function Page() {

  const orderData: OrderResponseData = await getOrderData();

  return (
    <>
      <MemberOrder data={orderData.result} />
    </>
  );
};

