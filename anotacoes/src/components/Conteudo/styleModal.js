import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 101%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2rem);
    cursor: default;
    color: #212235;
`
export const Modal = styled.div`
    height: 500px;
    width: 500px;
    padding: 40rem;
    border-radius: 12rem;
    background-color: var(--Branco);
`
export const ModalTitle = styled.h2`
    font-size: 20rem;
`
export const ModalText = styled.p`
    font-size: 16rem;
`
