import { subtitle } from "@/utils/typographies"
import Link from "next/link"
import styled, { css } from "styled-components"

export const Card = styled(Link) <{ $isDisabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex: 1;
  width: 100%;
  padding: 16px;

  border-radius: 8px;
  border: 1px solid var(--gray-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: var(--gray-4);
  }

  ${({ $isDisabled }) =>
    $isDisabled && css`
    cursor: not-allowed;
    pointer-events: none;
    background-color: var(--gray-1);

    & > ${Title} {
      color: var(--gray-2);
    }
  `}
`

export const Title = styled.h2`
  ${subtitle}
`
