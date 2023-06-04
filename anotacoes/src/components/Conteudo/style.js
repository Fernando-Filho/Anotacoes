import styled from 'styled-components';

export const Content = styled.div`
    transition: 1s;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8rem;
    overflow: hidden;
    min-height: 80px;
    width: 650px;
    border-radius: 12rem;
    background-color: #ffffff;
    user-select: none;

    &:hover{
    transition: .2s;
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px rgb(51, 52, 56, 0.5);
    }

    @media screen and (max-width: 678px){
        transition: 1s;
        width: 350px;
    }
`

export const SingleCaracter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 15%;
    max-width: 150px;
    min-width: 100px;
    background-color: #212235;;
    color: #b3b3b3;
    font-size: 80rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    height: 100%;
    width: 85%;
    padding: 12rem;
    color: #212235;
`
export const Title = styled.h2`
    font-size: 20rem;
`
export const Text = styled.p`
    font-size: 16rem;
`
