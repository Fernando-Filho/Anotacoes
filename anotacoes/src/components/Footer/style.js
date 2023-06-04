import styled from 'styled-components';

export const FooterContainer = styled.footer`
    height: 7%;
    width: 100%;
    background-color: #fffafa;
`

export const Copyright = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    height: 100%;
    width: 100%;
    color: black;
    font-size: 16px;

`
export const Link = styled.a`
    color: #5E60CE;
`

export const AddButton = styled.button`
    position: fixed;
    right: 25rem;
    bottom: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60rem;
    width: 60rem;
    border-radius: 50%;
    border: solid 1rem rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 0px var(--Preto_2);

    &:hover{
    transition: .5s;
    box-shadow: 1px 1px 10px 2px var(--Preto_2);
}
`