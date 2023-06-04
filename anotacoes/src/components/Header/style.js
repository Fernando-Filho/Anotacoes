import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 100%;
    background-color: #FEFEFE;

    .IconSearch{
        position: absolute;
        right: 31%;
    }
    @media screen and (max-width: 630px){
        .IconSearch{
            transition: 2s;
            display: none
        }
    }
`
export const Search = styled.input`
    height: 36%;
    width: 40%;
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
`

