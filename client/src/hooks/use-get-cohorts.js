import { useQuery } from "@tanstack/react-query";

import { useApi } from "./use-api";

export const useGetCohorts = () => {
  const api = useApi();

  const getCohorts = useQuery({
    queryKey: ["getCohorts"],
    queryFn: api.cohorts.getCohorts,
  });

  const { data: cohorts = [], ...rest } = getCohorts;

  return { cohorts, ...rest };
};
