import { css } from 'styled-components'

export const title = css`
  color: var(--black);
  font-weight: 600;
  font-size: 28px;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export const subtitle = css`
  color: var(--lobby-blue);
  font-weight: 700;
  font-size: 20px;
`

export const body = css`
  color: var(--gray-1);
  font-weight: 400;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`