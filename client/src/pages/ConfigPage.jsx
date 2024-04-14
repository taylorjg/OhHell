import { useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

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
      <Grid item xs={12} md={6} sx={{ mx: { xs: 2, md: "auto" }, my: 2 }}>
        <FormControl>
          <InputLabel id="select-api-implementation-label">
            API Implementation
          </InputLabel>
          <Select
            id="select-api-implementation-label"
            size="small"
            onChange={onChange}
            value={selectedApiImplementation}
            label="API Implementation"
            sx={{ width: "10rem" }}
          >
            {Object.entries(ApiImplementations).map(([key, value]) => (
              <MenuItem key={key} value={value}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
