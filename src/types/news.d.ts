type NewsSchema = {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

type NewsResponseData = {
  status: boolean;
  result: NewsSchema[];
};
