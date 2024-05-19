import { formatDistanceToNow } from "date-fns";

export const convertTimestampToRelativeTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  return formatDistanceToNow(date, { addSuffix: true });
};
