import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useApi } from "./use-api";

export const useCohortMutations = () => {
  const queryClient = useQueryClient();
  const api = useApi();

  const createMutation = useMutation({
    mutationFn: api.cohorts.createCohort,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCohorts"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: api.cohorts.updateCohort,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCohorts"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: api.cohorts.deleteCohort,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCohorts"] });
    },
  });

  const createCohort = (variables) => {
    createMutation.mutate(variables);
  };

  const updateCohort = (variables) => {
    updateMutation.mutate(variables);
  };

  const deleteCohort = (variables) => {
    deleteMutation.mutate(variables);
  };

  return {
    createCohort,
    updateCohort,
    deleteCohort,
  };
};
