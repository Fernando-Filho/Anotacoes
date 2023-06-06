import styled, { css } from 'styled-components'

export const ModalCreateNewNote = styled.form`
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

    h1{ font-size: 24px; }

    @media screen and (max-width: 678px){
        width: 400px;
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

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 12rem;
    height: 20%;
    width: 100%;
    padding-right: 12rem;
    `
export const Buttons = styled.button`
    height: 40rem;
    width: 100rem;
    border-radius: 8rem;
    border: solid 1rem var(--Cinza);
    
    ${props => props.$submit && css`
        background-color: rgb(46,164,79);
        color: #ffffff;

        &:hover{
            transition: .1s;
            background-color: rgb(46,164,79,0.8);
        }
    `

}
    ${props => props.$reset && css`
        background-color: rgb(229,10,30);
        color: #ffffff;
        
        &:hover{
            transition: .1s;
            background-color: rgb(229,10,30,0.8);
        }
    `}

`