import styled from 'styled-components'
import { body, title } from '@/utils/typographies'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 20px;
  align-self: flex-start;

  @media (min-width: 768px) {
    padding: 100px 140px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;

  background-color: var(--white);
  border-radius: 20px;

  padding: 64px 20px 20px;

  @media (min-width: 768px) {
    padding: 100px 140px;
  }
`

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  text-align: center;
`

export const Title = styled.h1`
  ${title}
`

export const Text = styled.p`
  ${body}
`

export const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`