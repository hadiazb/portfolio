import styled from 'styled-components'

export const StyledCardProfile = styled.section`
    width: 100%;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;

    @media (min-width: 768px) {
        max-width: 28rem;
    }
`

export const StyledHomeImage = styled.img`
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    border-width: 4px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(17 34 34 / var(--tw-border-opacity));
    position: absolute;
    bottom: -80px;
    left: calc(50% - 104px);
`
