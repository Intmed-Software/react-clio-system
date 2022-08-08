import styled from 'styled-components'
import colors from '../../patters/colors'


interface ContainerProps {
  color: string;
  size: string;
}

function setTagContainerColor(color: string): string {
  const colorVariants = {
    darkBlue: colors.accentBlue,
    darkSuccess: colors.accentBlue,
    darkAlert: colors.accentBlue,
    darkError: colors.accentBlue,
    lightBlue: colors.darkBlue,
    lightSuccess: colors.darkSuccess,
    lightAlert: colors.darkAlert,
    lightError: colors.darkError,
    };
    
    return colorVariants[color]
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  height: 24px;
  width: auto;
  overflow: auto;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0px 16px 0px 16px;
  column-gap: 5px;
  background-color: ${(props) => colors[props.color]};
  color: ${(props) => setTagContainerColor(props.color)};

`
