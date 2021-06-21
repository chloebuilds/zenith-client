import styled from 'styled-components'

export const ToggleContainer = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 10px;
  overflow: hidden;
  padding: 0.5rem;
  position: left;
  /* width: 8rem;
  height: 4rem; */

  span {
    height: auto;
    width: auto;
    transition: all 0.3s linear;

    // light-mode

    // dark-mode
  }
  .light {
    color: #d38a84;
    transform: ${({ lightTheme }) =>
    lightTheme ? 'translateY(0)' : 'translateY(100px)'};
  }
  .dark {
    color: #7b81ec;
    transform: ${({ lightTheme }) =>
    lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
  }
`
