import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "NARXI", uid: "price", sortable: true},
  {name: "Foydalanyuvchi", uid: "user", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Kutilmoqda", uid: "paused"},
  {name: "Tugalangan", uid: "vacation"},
];

const users = [
  {
    id: 1,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",
    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },
  {
    id: 2,
    name: "Игровая консоль Sony PlayStation 5, Blu-ray/DVD",
    price:"500$",
    status: "active",

    avatar: "https://images.uzum.uz/ckk5o4cjvf2peh8sjehg/original.jpg",
    images: [
      "https://images.uzum.uz/cm4ig6p25ku1lubq90f0/original.jpg",
      "https://images.uzum.uz/ckk5o63k9fq4ejbm2u50/original.jpg",
      "https://images.uzum.uz/cm4igbp25ku1lubq90i0/original.jpg",
      "https://images.uzum.uz/cm4igb3ifoubkc6m4e90/original.jpg",


    ]
  },
  {
    id: 3,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",
    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },
  {
    id: 4,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",

    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },
  {
    id: 5,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",
    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },
  {
    id: 6,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",

    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },

  {
    id: 7,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",

    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },
  {
    id: 8,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",
    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },

  {
    id: 9,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",
    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },
  {
    id: 10,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",
    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },
  {
    id: 11,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",
    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },
  {
    id: 12,
    name: "Стиральная машина автомат Beko WSPE6H616, 6.5 кг, 1200 об/мин, Inverter",
    price:"500$",
    status: "active",
    avatar: "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
    images: [
      "https://images.uzum.uz/cn1l7t9s99ouqbfthkd0/original.jpg",
      "https://images.uzum.uz/cn2evt3ifoubkc6r5dqg/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5k0/original.jpg",
      "https://images.uzum.uz/cn2evt125kub33f2u5jg/original.jpg",
      "https://images.uzum.uz/cn2evt1s99ouqbftnqbg/original.jpg",

    ]
  },
];

export {columns, users, statusOptions};
