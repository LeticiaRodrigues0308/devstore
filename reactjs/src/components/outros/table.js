import styled from "styled-components";

const TabelaProdutos = styled.table`
    width: 90%;
    margin-left: 5em;

    border-left: 1px solid #E2E2E2;
    border-right: 1px solid #E2E2E2;
    border-bottom: 1px solid #E2E2E2;

    border-collapse: collapse;
`

const IconesTabela = styled.table`
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;
    padding: 10px 25px;

    .editar img {
        margin-right: 10px;
    }

    button {
        background-color: #565656;

        border: 0px;
        border-radius: 50px;

        cursor: pointer;
}
`

export {TabelaProdutos, IconesTabela}