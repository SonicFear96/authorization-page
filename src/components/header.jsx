import { AppBar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

export const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          display="flex"
          //flexDirection="row"
          // justifyContent="space-between"
        >
          <Typography variant="h6" color="inherit" noWrap>
            Project
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
