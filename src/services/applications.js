// Utils
import http from "../utils/http";

export const getAllApplications = async () => {
  try {
    const response = await http.get("71NNjB/applications");

    return response;
  } catch (error) {
    return error;
  }
};
