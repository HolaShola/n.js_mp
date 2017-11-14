export const productList = [
    {
      id: 1,
      name: 'Ibuprofen',
      brand: 'Ibuprofen',
      price: '49.33',
      options: [
        {
          color: 'white',
        },
      ],
    },
    {
      id: 2,
      name: 'Protectant',
      brand: 'Kids Eczema Balm',
      price: '3.45',
      options: [
        {
          color: 'black',
        },
      ],
    },
    {
      id: 3,
      name: 'SALICYLIC ACID',
      brand: 'Unagel',
      price: '42.06',
      options: [
        {
          color: 'green',
        },
      ],
    },
  ];
  
  export const product = {
    id: 3,
    name: 'SALICYLIC ACID',
    brand: 'Unagel',
    price: '42.06',
    options: [
      {
        color: 'green',
      },
    ],
  };
  
  export const reviews = [
    {
      id: '1',
      userId: '1',
      content: 'reviews-content',
    },
    {
      id: '2',
      userId: '2',
      content: 'reviews-content-2',
    },
  ];
  
  export const users = [
    {
      id: '1',
      name: 'User1',
    },
    {
      id: '2',
      name: 'User2',
    },
  ];
  
export const data = [
  {
    "id": "1",
    "username": "User1",
    "email": "User1@mail.ru"
  },
  {
    "id": "2",
    "username": "User2",
    "email": "User2@mail.ru"
  },
  {
    "id": "3",
    "username": "User3",
    "email": "User3@mail.ru"
  }
]

  export const getProducts = () => {
    return productList;
  };
  
  export const getProduct = (id) => {
    return product;
  };
  
  export const getProductReviews = (productId) => {
    return reviews;
  };

  export const getUsers = () => {
    return users;
  };
  
  export const setProduct = (item) => {
    productList.push(item);
    return true;
  };

  export const getAnswerIfError = () => {
    return {
      "code": 404,
      "message": "Not Found",
      "data": {}
    };
  }

  export const getAnswerIfSuccess = (token, username, email) => {
    return {
      "code": 200,
      "message": "OK",
      "data": {
        "user": {
          "email": email,
          "username": username
        }
      },
     "token": token
    };
  }