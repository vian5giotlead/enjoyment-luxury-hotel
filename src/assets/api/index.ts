import Cookies from 'js-cookie';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const token = Cookies.get('token') || '';

export async function getUser() {
  const res = await fetch(`${baseUrl}/api/v1/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  res.json().then((data) => data.token && Cookies.set('token', data.token));

  return res.json();
}

export async function updateUser(data: MemberUpdateData) {
  const res = await fetch(`${baseUrl}/api/v1/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  console.log(res);

  return res.json();
}

export async function getOrders() {
  const res = await fetch(`${baseUrl}/api/v1/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function deleteOrder(id: string) {
  const res = await fetch(`${baseUrl}/api/v1/orders/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function userLogin(data: UserLoginData) {
  const res = await fetch(`${baseUrl}/api/v1/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  res.json().then((data) => data.token && Cookies.set('token', data.token));
  return res.json();
}

export async function userRegister(data: UserRegisterData) {
  const res = await fetch(`${baseUrl}/api/v1/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  res.json().then((data) => data.token && Cookies.set('token', data.token));
  return res.json();
}

export async function verifyEmail(email: string) {
  const res = await fetch(`${baseUrl}/api/v1/verify/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function apiCheckUserIsLogin() {
  const res = await fetch(`${baseUrl}/api/v1/user/check`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  res.json().then((data) => data.token && Cookies.set('token', data.token));
  return res.json();
}

export async function apiGetNews() {
  const res = await fetch(`${baseUrl}/api/v1/home/news/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function apiGetRoomType() {
  const res = await fetch(`${baseUrl}/api/v1/rooms/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function apiGetCulinary() {
  const res = await fetch(`${baseUrl}/api/v1/home/culinary/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
