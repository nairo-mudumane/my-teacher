import { styled } from "@mui/material";

export const StyledList = styled("ul")`
  width: 100%;
  max-width: 900px;
  padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};
  margin: 0 auto;

  display: grid;
  gap: ${({ theme }) => theme.spacing(9)};
  grid-template-columns: 1fr 1fr;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;

export const StyledItem = styled("li")`
  list-style: none;

  .img {
    width: 100%;
    height: 320px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  .name {
    margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
  }

  .price {
    font-weight: bold;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .description {
    word-break: break-all;
  }
`;
