import styled from "styled-components";

const ConteudoSite = styled.div`
.container {
    display: flex;
    flex-direction: row;
}

.box1 {
    display: flex;
    flex-direction: column;

    background-color: #2B3031;
    color: white;

    width: 360px;
    height: 100vh;

    position: sticky;
    top: 0px;
}

.cabecalho-b1 {
    display: flex;
    justify-content: center;
    margin: 3em 0em 3em 0em;
}

.espaco {
    width: 360px;
    height: 60px;

    background-color: #262626;
}

.gerenciamento {
    display: flex;
    flex-direction: row;

    margin: 2em 0em 2em 4em;
    font-size: 18px;
}

.setinha img {
    margin-left: 7em;
}

.produtos {
    display: flex;
    flex-direction: row;
    width: 288px;
    height: 24px;
    padding: 1em 0em 1em 4em;

    background-color: white;
    color: #1a1a1a;
    border: 5px;
    font-size: 18px;
}

.ret img {
    position: absolute;
    width: 4px;
    height: 60px;
}



.box2 {
    display: flex;
    flex-direction: column;

    background-color: #F5F5F5;
    width: 100%;
}

.box-produto {
    width:  90%;
    height: auto;

    margin: 2em 0em 0em 4em;
    background-color: #FFFFFF;

    padding: 1.5em;
    color: #3C3939;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
}

.box-novo-produto {
    display: flex;
    flex-direction: row;

    font-size: 32px;
    font-weight: 700;
    padding: 1em 0em 1em 1em;
}

.linha img {
    margin-right: 10px;
}

.inputs1, .inputs2, .inputs3, .input4 {
    display: flex;
    flex-direction: row;
}

.input-nome, .input-preco, .input-categoria, .input-preco-por, .input-avaliacao, .input-estoque, .input-link, .textarea {
    display: flex;
    flex-direction: row;
}

.label {
    font-size: 18px;
    font-weight: 700;
    color: #615858;

    margin-right: 15px;
}

.inputs1 {
    padding-left: 4em;
}

.inputs2, .inputs3 {
    margin: 1em 0em 0em 0em;
    padding-left: 2em;
}

.input-preco {
    margin-left: 2.5em;
}

.input-preco-por {
    margin-left: 1.7em;
}

.input-estoque {
    margin-left: 3em;
}

.input-link input{
    width: 39em;
}

.input-link, .textarea {
    margin:  1em 0em 0em 0.2em;
}

.textarea {
    margin:  1em 0em 0em 1.9em;
}

textarea {
    border-radius: 5px;
    border: 1px solid #A8A8A8;
    outline: none;
    cursor: pointer;

    width: 38.5em;
    height: 15em;

    resize: none;
}

.botao-cadastrar button {
    width: 106px;
    height: 36px;
    margin-left: 3em;

    border-radius: 45px;
    border: none;

    background-color: #119FDC;
    color: #FFFFFF;

    font-weight: bold;
    cursor: pointer;

    margin-top: 13.5em;
}

.box-cadastrados {
    width: 93%;
    height: auto;

    margin: 2em 4em;
    padding-bottom: 50px;

    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
}


.cadastrados {
    display: flex;
    flex-direction: row;
    margin: 2em;

    font-size: 32px;
    font-weight: bold;
    color: #3C3939;
}

.linha2 {
    margin-right: 10px;
}

.cabecalho-table{
    height: 67px;
    color: #FFFFFF;
}

td{
    padding: 20px 0px 20px 30px;

    font-size: 18px;
}

th {
    text-align: left;
    padding-left: 30px;
    font-size: 18px;

    background-color: #6CC3DF;
}

.icons {
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;
}

.icons button {
    background-color: #565656;

    border: 0px;
    border-radius: 50px;
}

table tr:nth-child(odd){
    background-color: #F5F5F5;
}

table tr:nth-child(even) {
    background-color: #FFFFFF;
}
`

const Icones = styled.div`
    .bolinhas {
    display: flex;
    flex-direction: row;
    margin-left: 70em;
}

    .box-carregar {
        display: flex;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50px;

        background-color: #986CDF;
    }

    .box-sair {
        display: flex;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50px;

        background-color: #986CDF;
    }

    .box-carregar {
        margin-right: 0.5em;
    }

    .carregar, .sair {
        padding-left: 10px;
    }
`

export {ConteudoSite, Icones}