import { apiRestImplementation, apiLocalStorageImplementation } from "@app/api";

import { API_IMPLEMENTATION_KEY, ApiImplementations } from "@app/constants";

const lookupApiImplementation = (apiImplementation) => {
  switch (apiImplementation) {
    case ApiImplementations.Rest:
      return apiRestImplementation;
    case ApiImplementations.LocalStorage:
    default:
      return apiLocalStorageImplementation;
  }
};

export const useApi = () => {
  const apiImplementation = localStorage.getItem(API_IMPLEMENTATION_KEY);
  return lookupApiImplementation(apiImplementation);
};
