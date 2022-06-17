const url = `http://localhost:1337/api`;
// 'https://strapi-production-5c01.up.railway.app/api'
const qs = require('qs');

export function GET_HOME_CONTENT(id) {
  const query = qs.stringify(
    {
      populate: {
        Banner_img: '*',
        destaque: {
          populate: '*',
        },
        kit: {
          populate: '*',
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  return {
    url: `${url}/homes/${id}?${query}`,
    options: {
      method: 'GET',
    },
  };
}
export function GET_ALL_PRODUCTS() {
  return {
    url: `${url}/products?populate=*`,
    options: {
      method: 'GET',
    },
  };
}
export function GET_PRODUTS_FOR_ID(id) {
  http: return {
    url: `${url}/products/${id}?populate=*`,
    options: {
      method: 'GET',
    },
  };
}
export function GET_ABOUT_CONTENT() {
  return {
    url: `${url}/about?populate=*`,
    options: {
      method: 'GET',
    },
  };
}
export function GET_FAQ() {
  const query = qs.stringify(
    {
      populate: {
        Banner: {
          populate: '*',
        },
        content: {
          populate: '*',
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  return {
    url: `${url}/faq?${query}`,
    options: {
      method: 'GET',
    },
  };
}

export function CREATE_MESSAGE(data) {
  return {
    url: `${url}/messages`,
    options: {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
}

export function USER_REGISTER(data) {
  return {
    url: `${url}/auth/local/register`,
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
    url: `${url}/auth/local`,
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
    url: `${url}/auth/forgot-password`,
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
    url: `${url}/users/me`,
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
    url: `${url}/users/${id}`,
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
