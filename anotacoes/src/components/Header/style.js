import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 95px;
    min-width: 100vw;
    background-color: #fffafa;
    box-shadow: 0px -1px 5px 2px rgba( 0, 0, 0, 0.5);

    .IconSearch{
        transform: translate(-40px)
    }
    @media screen and (min-width: 75%){
        .IconSearch{
            transition: 1s;
            right: 30%
        }
    }
`
export const Search = styled.input`
    transition: 1s;
    height: 36%;
    width: 370px;
    border-radius: 8rem;
    padding-left: 10rem;
    font-size: 16rem;

    &:hover{
        transition: .5s;
        box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.5);
    }
    &:focus{
        box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 678px){
        transition: 1s;
        width: 250px;
    }
`