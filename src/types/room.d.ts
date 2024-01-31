type RoomInfoSchema = {
  title: string;
  isProvide: boolean;
};

type RoomTypeSchema = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  status: number;
  layoutInfo: RoomInfoSchema[];
  facilityInfo: RoomInfoSchema[];
  amenityInfo: RoomInfoSchema[];
  createdAt?: string;
  updatedAt?: string;
};

type RoomTypeResponseData = {
  status: boolean;
  result: RoomTypeSchema[];
};
