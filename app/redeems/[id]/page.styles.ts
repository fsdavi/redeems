import { body, title } from '@/utils/typographies'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100svh;
  max-height: 600px;

  align-self: flex-start;
`

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  height: 100%;
  max-height: 600px;
`

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  text-align: center;
`

export const Title = styled.h1`
  ${title}
`

export const Text = styled.p`
  ${body}
`