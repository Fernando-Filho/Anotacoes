import styled from "styled-components";

export const MainContainer = styled.main`
    margin-top: 111px;
    padding-bottom: 81px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16rem;
    max-width: 95%;
`

export const AddButton = styled.button`
    position: fixed;
    display: flex;
    bottom: 90px;
    right: 25px;
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