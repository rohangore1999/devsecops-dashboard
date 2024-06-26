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

export const getEventHistory = async (applicationId) => {
  try {
    const response = await http.get(
      `TYjDIe/eventhistory?applicationId=${applicationId}`
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const getMemoryUtilization = async () => {
  try {
    const response = await http.get("ybFVVH/memoryutilization");

    return response;
  } catch (error) {
    return error;
  }
};

export const getCpuUtilization = async () => {
  try {
    const response = await http.get("Ymxfa2/cpuutilization");

    return response;
  } catch (error) {
    return error;
  }
};
