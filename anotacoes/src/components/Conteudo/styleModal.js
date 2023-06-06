import styled, { css } from 'styled-components'

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
    z-index: 1;
    cursor: default;
    user-select: text;
`
export const Modal = styled.div`
    transition: 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 600px;
    width: 600px;
    overflow: hidden;
    padding: 5rem 35rem;
    border-radius: 10rem;
    background-color: #fffafa;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);

    h2{ 
        display: flex;
        align-items: end;
        justify-content: end;
        overflow: hidden;
        height: 100px;
        font-size: 40rem; 
        border-bottom: solid 1px black;
    }

    p { 
        height: 400px;
        font-size: 20rem; 
    }
`


export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 12rem;
    height: 100px;
    width: 100%;
    padding-right: 12rem;
    user-select: none;
`

export const Buttons = styled.button`
    height: 50rem;
    width: 100rem;
    border-radius: 8rem;
    border: solid 1rem var(--Cinza);
    
    ${props => props.$Exit && css`
        background-color: rgb(46,164,79);
        color: #ffffff;

        &:hover{
            transition: .1s;
            background-color: rgb(46,164,79,0.8);
            box-shadow: 0 0 10px rgb(46,164,79,0.8);
        }
    `

}
    ${props => props.$Delete && css`
        background-color: rgb(229,10,30);
        color: #ffffff;
        
        &:hover{
            transition: .4s;
            background-color: rgb(229,10,30,0.8);
            box-shadow: 0 0 10px rgb(229,10,30,0.8);
        }
    `}

`
