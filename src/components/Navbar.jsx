import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/MUIassets";
import { SearchBar } from "./";
import './Navbar.css'

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "start",
  flex:'1'

   }}>
    <Link className="logo" to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={60}  />
    </Link>
    <div className="searchbar" >
    <SearchBar  />
    </div>
  </Stack>
);

export default Navbar;