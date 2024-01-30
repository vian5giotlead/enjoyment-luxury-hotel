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
  verificationToken?: string;
  createdAt?: string;
  updatedAt?: string;
};

type MemberResponseData = {
  status: boolean;
  token: string;
  result: MemberData;
};

type MemberPassword = {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  password?: string;
};

type MemberUpdateData = UserInfo &
  MemberPassword & {
    _id?: string;
    address?: Address;
    birthday?: string;
  };

type UserLoginData = {
  email: string | null;
  password: string;
};

type MemberEditData = MemberUpdateData & {
  city: string;
  countryPhoneCode: string;
  birthdayYear: number;
  birthdayMonth: number;
  birthdayDay: number;
  check?: boolean;
};

type UserRegisterData = UserInfo & {
  password?: string;
  birthday?: string;
};