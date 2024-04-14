import { useState } from "react";
import { Grid, MenuItem, Select } from "@mui/material";

import { API_IMPLEMENTATION_KEY, ApiImplementations } from "@app/constants";

export const ConfigPage = () => {
  const [selectedApiImplementation, setSelectedApiImplementation] = useState(
    localStorage.getItem(API_IMPLEMENTATION_KEY) ??
      ApiImplementations.LocalStorage
  );

  const onChange = (e) => {
    const newSelectedApiImplementation = e.target.value;
    setSelectedApiImplementation(newSelectedApiImplementation);
    localStorage.setItem(API_IMPLEMENTATION_KEY, newSelectedApiImplementation);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6} sx={{ mx: { xs: 2, md: "auto" } }}>
        <Select
          size="small"
          onChange={onChange}
          value={selectedApiImplementation}
        >
          {Object.entries(ApiImplementations).map(([key, value]) => (
            <MenuItem key={key} value={value}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};
