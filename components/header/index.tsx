import Image from "next/image";
import { StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <div className="logo">
        <Image src="/images/logo.png" alt="logo" width="100%" height="60px" />
      </div>

      <p>Find the perfect teacher!</p>
    </StyledHeader>
  );
}
