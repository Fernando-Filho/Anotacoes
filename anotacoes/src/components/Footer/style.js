import styled from 'styled-components';

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    height: 7%;
    min-width: 100vw;
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
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    font-size: 40rem;

    &:hover{
    transition: .5s;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
}
`