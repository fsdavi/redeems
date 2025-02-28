import { bodySmall } from "@/utils/typographies";
import Image from "next/image";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  gap: 8px;
  ${bodySmall}
`;

const COPYRIGHT_IMAGE_OPTIONS = {
  src: "/Copyright.svg",
  width: 16,
  height: 16,
};

export default function Footer() {
  return (
    <StyledFooter>
      <Image {...COPYRIGHT_IMAGE_OPTIONS} alt="Ícone Copyright" /> <p>2025</p>•{" "}
      <p>
        <b>Empresa X</b> em parceria com a <b>Lobby</b>
      </p>
    </StyledFooter>
  );
}
