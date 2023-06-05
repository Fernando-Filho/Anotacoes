import styled from 'styled-components';

export const ModalCreateNewNote = styled.form`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 101%;
    width: 101%;
    backdrop-filter: blur(2rem);
    background-color: rgba(0, 0, 0, 0.5);
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 500px;
    width: 350px;
    border-radius: 10rem;
    background-color: var(--Branco);
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);

    h1{
    font-size: 24px;
    color: black;
    }
`
export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16rem;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 90%;

    input, textarea{
        width: 90%;
        padding: 12rem;
        border-radius: 12rem;
        font-size: 20rem;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16rem;
    }
`

export const InputText = styled.input`
    height: 40rem;

    &:focus{
        box-shadow: 3px 3px 10px -1px var(--Preto_2);
    }
`
export const InputTextArea = styled.textarea`
    height: 250rem;
    resize: none;

    &:focus{
        box-shadow: 3px 3px 10px -1px var(--Preto_2);
    }
`