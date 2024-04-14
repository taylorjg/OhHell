import { Fab, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useGetCohorts, useCohortMutations } from "@app/hooks";
import { CohortsTable, Version } from "@app/components";

export const HomePage = () => {
  const { cohorts, isSuccess, isLoading, isError, error } = useGetCohorts();
  const { createCohort } = useCohortMutations();

  const onCreateCohort = () => {
    createCohort({
      name: "Collisons & Taylors",
      players: ["Edith", "Nigel", "Sue", "Jon", "Beth"],
    });
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6} sx={{ mx: { xs: 2, md: "auto" } }}>
        {isLoading && <div>Loading...</div>}
        {isError && <div>ERROR: {error.message}</div>}
        {isSuccess && <CohortsTable cohorts={cohorts} />}
      </Grid>
      <Fab
        color="primary"
        title="Create a new cohort"
        onClick={onCreateCohort}
        sx={{ position: "absolute", right: "1rem", bottom: "1rem" }}
      >
        <AddIcon />
      </Fab>
      <Version />
    </Grid>
  );
};
