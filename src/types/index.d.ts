type Address = {
  zipcode: number;
  detail: string;
};

type MemberData = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  address: Address;
  verificationToken: string;
  createdAt: string;
  updatedAt: string;
};
