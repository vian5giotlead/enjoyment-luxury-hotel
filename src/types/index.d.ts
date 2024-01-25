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


type Data = {
  status: boolean;
  result: MemberData;
};

type MemberUpdateData = {
  name: string;
  email: string;
  phone: string;
  address: {
    zipcode: number;
    detail: string;
  };
  birthday: string;
};