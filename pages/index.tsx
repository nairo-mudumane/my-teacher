import { Box } from "@mui/material";
import type { NextPage } from "next";
import { List } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <List />
      </Box>
    </>
  );
};

export default Home;
