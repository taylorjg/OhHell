import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";

import { useRouteMatch } from "@app/hooks";

import {
  StyledHeader,
  StyledHeaderLeft,
  StyledHeaderMiddle,
  StyledHeaderRight,
} from "./Header.styles";

export const Header = () => {
  const { title } = useRouteMatch();

  return (
    <>
      <AppBar position="fixed">
        <StyledHeader>
          <StyledHeaderLeft>
            <IconButton sx={{ visibility: "hidden" }}>
              <Avatar />
            </IconButton>
          </StyledHeaderLeft>
          <StyledHeaderMiddle>{title}</StyledHeaderMiddle>
          <StyledHeaderRight />
        </StyledHeader>
      </AppBar>
      <Toolbar />
    </>
  );
};
