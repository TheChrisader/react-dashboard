import { useContext } from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";

import { ColorModeContext, tokens } from "../../theme";
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutline,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" minWidth="100%" justifyContent="space-between" p={2}>
      {/* SEARCH BAR  */}
      <Box
        display="flex"
        borderRadius="3px"
        backgroundColor={colors.primary[400]}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      {/* ICONS  */}
      <Box display="flex">
        <IconButton type="button">
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton type="button">
          <NotificationsOutlined />
        </IconButton>
        <IconButton type="button">
          <SettingsOutlined />
        </IconButton>
        <IconButton type="button">
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
