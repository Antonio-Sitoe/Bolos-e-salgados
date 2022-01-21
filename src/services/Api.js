const url = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_CHEC_PUBLIC_KEY;

export function GET_ALL_PRODUCTS() {
  return {
    url: `${url}/products`,
    options: {
      method: 'GET',
      headers: {
        'X-Authorization': `${API_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
}
export function GET_PRODUTS_FOR_ID(id) {
  return {
    url: `${url}/products/${id}`,
    options: {
      method: 'GET',
      headers: {
        'X-Authorization': `${API_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
}
export function GET_ABOUT_CONTENT() {
  return {
    url: `${url}/merchants`,
    options: {
      method: 'GET',
      headers: {
        'X-Authorization': `${API_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
}

export function CREATE_CART() {
  return {
    url: url + '/carts',
    options: {
      method: 'GET',
      // body: JSON.stringify(data),
      headers: {
        'X-Authorization': `${API_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
}
export function ADD_CART(id, data) {
  return {
    url: url + `/carts/${id}`,
    options: {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'X-Authorization': `${API_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
}

export function USER_REGISTER(data) {
  return {
    url: url + 'auth/local/register',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}
export function USER_GET(data) {
  return {
    url: url + 'auth/local',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}
export function FORGOTTEN_PASSWORD(email) {
  return {
    url: url + 'auth/forgot-password',
    options: {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}
export function GET_USERDATA(token) {
  return {
    url: url + 'users/me',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
export function USERDATA_UPDATE(id, token, data) {
  return {
    url: url + `users/${id}`,
    options: {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
