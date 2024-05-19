import { formatDistanceToNow } from "date-fns";

export const convertTimestampToRelativeTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  return formatDistanceToNow(date, { addSuffix: true });
};

export const setItemsInLocalStorage = (obj) =>
  Object.keys(obj).forEach((elem) => localStorage.setItem(elem, obj[elem]));

export const getItemFromLocalStorage = (key) => localStorage.getItem(key);
