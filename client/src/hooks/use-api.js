import { apiRestImplementation, apiLocalStorageImplementation } from "@app/api";

const searchParams = new URLSearchParams(location.search);
const isRestImplementation = searchParams.get("api") === "rest";

export const useApi = () => {
  return isRestImplementation
    ? apiRestImplementation
    : apiLocalStorageImplementation;
};
