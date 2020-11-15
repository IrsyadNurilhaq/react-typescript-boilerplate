import styled from 'styled-components'
import { Color } from '../../../constants/theme'

export const Base = styled.div`
  min-height: 100vh;
  background-color: ${Color.BLACK_BACKGROUND};
`

export const ContainerWhite = styled.div`
  margin: auto;
  max-width: 480px;
  overflow: hidden;
  min-height: 100vh;
  background-color: ${Color.WHITE};
  overflow-y: auto;
  position: relative;
`
