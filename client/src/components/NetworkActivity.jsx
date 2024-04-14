import { useQueryClient } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";

export const NetworkActivity = () => {
  const queryClient = useQueryClient();

  const isActive = queryClient.isFetching() || queryClient.isMutating();
  const visibility = isActive ? "visible" : "hidden";

  return <LinearProgress sx={{ visibility }} />;
};
