type FoodTypeSchema = {
  _id: string;
  title: string;
  description: string;
  diningTime: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

type FoodTypeResponseData = {
  status: boolean;
  result: FoodTypeSchema[];
};
