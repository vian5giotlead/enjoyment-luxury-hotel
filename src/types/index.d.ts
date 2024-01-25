type Address = {
  zipcode: number;
  detail: string;
};

type UserInfo = {
  address: Address;
  name: string;
  phone: string;
  email: string;
};


type MemberData = UserInfo & {
  _id?: string;
  password: string;
  birthday: string;
  verificationToken: string;
  createdAt: string;
  updatedAt: string;
};


type MemberResponseData = {
  status: boolean;
  token: string;
  result: MemberData;
};

type MemberPassword = {
  oldPassword?: string;
  newPassword?: string;
};

type MemberUpdateData = UserInfo & MemberPassword & {
  _id?: string;
  address: Address;
  birthday: string;
};

type FacilityInfo = {
  title: string;
  isProvide: boolean;
};

type AmenityInfo = {
  title: string;
  isProvide: boolean;
};

type RoomInfo = {
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  status: number;
  facilityInfo: FacilityInfo[];
  amenityInfo: AmenityInfo[];
  _id: string;
  createdAt: string;
  updatedAt: string;
};

type Order = {
  userInfo: UserInfo;
  _id: string;
  roomId: RoomInfo;
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  orderUserId: string;
  status: number;
  createdAt: string;
  updatedAt: string;
};

type Orders = Order[];