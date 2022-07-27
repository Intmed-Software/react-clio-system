import styled from 'styled-components'
import colors from '../../patters/colors'
import sizers from '../../patters/sizes'

interface ContainerProps {
  color: string;
  size: string;
  icon?: boolean;
}

function getColor(color: string): string {
  if (
    color === "darkBlue" ||
    color === "darkSuccess" ||
    color === "darkAlert" ||
    color === "darkError"
  ) {
    return colors.accentBlue;
  }

  if (color === "lightBlue") {
    return colors.darkBlue;
  }

  if (color === "lightSuccess") {
    return colors.darkSuccess;
  }

  if (color === "lightAlert") {
    return colors.darkAlert;
  }

  if (color === "lightError") {
    return colors.darkError;
  }
}

function getSize(size: string, icon: boolean): string {
  if (size === 'display' && icon) {
    return `${74}px`
  }
  if (size === 'display' && !icon) {
    return `${54}px`
  }
  if (size === 'medium' && icon) {
    return `${40}px`
  }
  if (size === sizers.medium && !icon) {
    return `${35}px`
  }
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  height: 24px;
  overflow: auto;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0px 16px 0px 16px;
  background-color: ${(props) => colors[props.color]};
  min-width: ${(props) => getSize(props.size, props.icon)};
  color: ${(props) => getColor(props.color)}
`

export const IconContainer = styled.div`
  margin-right: 5px;
`