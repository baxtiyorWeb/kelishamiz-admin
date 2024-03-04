import React from "react";
import {IUser} from "@@/app/(routes)/users/interface/user.interface";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "Full Name", uid: "name", sortable: true},
  {name: "Tug'iligan Yili ", uid: "age", sortable: true},
  {name: "Telefon No'mer", uid: "phone", sortable: true},
  {name: "EMAIL", uid: "email", sortable: true},
  {name: "USERNAME", uid: "username", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const users:IUser[]= [
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 1,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 2,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 3,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 4,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 5,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 6,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 7,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 8,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 9,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },
  {
    firstName: " Xurshid",
    lastName: "Soatov",
    secondName: "Xusan O'gli",
    birthDate: "1994-02-21",
    username: "windoxas",
    password: "5hspkfn9",
    phone: "998332575767",
    email: "windoxas@gmail.com",
    authorityId: 12,
    addressForm: {
      id: 10,
      regionId: 2,
      districtId: 4,
      address: "Kumkurgan"
    }
  },


];

export {columns, users, statusOptions};
