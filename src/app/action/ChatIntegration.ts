import { apiUtil } from "utils/apiUtils";

export const example = async () => {
  const res = await apiUtil("GET", `/users`);
  console.log(res);
};
