import { Button } from "@mui/material";
import Image from "next/image";
import { StyledItem, StyledList } from "./styles";

export function List() {
  return (
    <StyledList>
      <StyledItem>
        <div className="img">
          <img
            src="https://avatars.githubusercontent.com/u/83153592?v=4"
            alt="teacher profile"
          />
        </div>

        <div>
          <p className="name">Nairo Mudumane</p>
          <p className="price">USD 100.00 p/hour</p>
          <p className="description">Programing lessons</p>
        </div>
        <div>
          <Button variant="contained" sx={{ px: "4rem" }}>
            Learn
          </Button>
        </div>
      </StyledItem>
    </StyledList>
  );
}
