import styled from 'styled-components';

export const Content = styled.div`
    transition: 1s;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    width: 650px;
    border-radius: 12rem;
    background-color: #ffffff;
    user-select: none;

    &:hover{
    transition: .2s;
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px rgb(51, 52, 56, 0.5);
    }

    .lixeira{
        transition: 2s;
        font-size: 40rem;
    }

    @media screen and (max-width: 678px){
        width: 350px;

        .lixeira{
            transition: 2s;
            font-size: 100rem;
        }
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
    border-radius: 12rem 0 0 12rem;
    background-color: #212235;;
    color: #b3b3b3;
    font-size: 68rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 8rem;
    height: 100%;
    width: 600px;
    padding: 12rem;
    color: #212235;

    h2{
        font-size: 20rem;
    }
    p{
        font-size: 16rem;
    }
`
