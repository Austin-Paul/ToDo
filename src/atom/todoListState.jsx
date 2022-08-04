import { atom } from "recoil";


export const todoListState = atom({
    key: 'TodoList',
    default: JSON.parse(window.localStorage.getItem('user-basket')),
  });