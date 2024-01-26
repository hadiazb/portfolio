import styled from 'styled-components'

export const StyledMenuMobile = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 0.25rem /** 4px */;
    padding-right: 0.25rem /** 4px */;
    box-shadow: 0px -1px 5px #00000029;

    @media (min-width: 768px) {
        display: none;
    }
`
