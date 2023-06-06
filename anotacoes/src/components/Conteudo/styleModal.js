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
    backdrop-filter: blur(15px);
    color: #212235;
`
export const Modal = styled.div`
    transition: 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 500px;
    width: 600px;
    border-radius: 10rem;
    background-color: #fffafa;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);

    h2{ font-size: 20rem; }

    p { font-size: 16rem; }
`
