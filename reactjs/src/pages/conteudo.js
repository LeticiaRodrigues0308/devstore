import Cabecalho from "../components/cabecalho";
import { ConteudoSite } from "./conteudo.styled";
import { ProdutosInput } from "../components/outros/inputs";
import { TabelaProdutos } from "../components/outros/table";

export default function Conteudo() {
    return (
        <ConteudoSite>
            <div className="container">

            <div class="box1">
            <div class="cabecalho-b1">
                <div class="logo"> <img src="./assets/logo.png" alt=""/> </div>
            </div>

            <div class="espaco"></div>
            <div class="gerenciamento">
                <div class="texto-gere">Gerenciamento</div>
                <div class="setinha"> <img src="./assets/setinha.png" alt=""/> </div>
            </div>

            <div class="ret"> <img src="./assets/ret.png" alt=""/> </div>
            <div class="produtos">
                <div class="titulo-produtos"><b>Produtos</b></div>
            </div>
        </div>


                <div class="box2">
                    <Cabecalho/>

                    <div class="box-produto">
                        <div class="box-novo-produto">
                            <div class="linha"> <img src="./assets/linha-azul.png" alt=""/> </div>
                            <div class="novo-produto">Novo Produto</div>
                        </div>

                        <div class="cadastro-produto">
                            <div class="inputs1">
                                <div class="input-nome">
                                    <div class="label">Nome: </div>
                                    <ProdutosInput/>
                                </div>

                                <div class="input-preco">
                                    <div class="label">Preço DE: </div>
                                    <ProdutosInput/>
                                </div>
                            </div>

                            <div class="inputs2">
                                <div class="input-categoria">
                                    <div class="label">Categoria: </div>
                                    <ProdutosInput/>
                                </div>

                                <div class="input-preco-por">
                                    <div class="label">Preco POR:</div>
                                    <ProdutosInput/>
                                </div>
                            </div>

                            <div class="inputs3">
                                <div class="input-avaliacao">
                                    <div class="label">Avaliação: </div>
                                    <ProdutosInput/>
                                </div>

                                <div class="input-estoque">
                                    <div class="label">Estoque: </div>
                                    <ProdutosInput/>
                                </div>
                            </div>

                            <div class="input-link">
                                <div class="label">Link Imagem: </div>
                                <ProdutosInput/>
                            </div>

                            <div class="input4">
                                <div class="textarea">
                                    <div class="label">Descrição: </div>
                                    <textarea name="descricao" id="descricao"></textarea>
                                </div>

                                <div class="botao-cadastrar"> <button>Cadastrar</button> </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-cadastrados">
                        <div class="cadastrados">
                            <div class="linha2"> <img src="./assets/linha-azul.png" alt=""/> </div>
                            <div class="produto-cadastrado">Produtos Cadastrados</div>
                        </div>

                        <TabelaProdutos>

                            <thead>
                                <tr class="cabecalho-table">
                                    <th></th>
                                    <th>ID</th>
                                    <th>Produto</th>
                                    <th>Categoria</th> 
                                    <th>Preço</th>
                                    <th>Estoque</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tr>
                                <td> <img src="./assets/esfera.png" alt=""/> </td>
                                <td>1</td>
                                <td>Esfera do Dragão</td>
                                <td>Acessórios</td>
                                <td>15,56</td>
                                <td>14</td>

                                <td><div class="icons">
                                    <div class="editar">
                                        <div class="icon-editar"> <button><img src="./assets/editar.png" alt=""/> </button></div>
                                    </div>
            
                                    <div class="deletar">
                                        <div class="icon-deletar"> <button> <img src="./assets/apagar.png" alt=""/> </button> </div>
                                    </div>
                                </div>
                                </td>
                            </tr>

                            <tr>
                                <td> <img src="./assets/esfera.png" alt=""/> </td>
                                <td>1</td>
                                <td>Esfera do Dragão</td>
                                <td>Acessórios</td>
                                <td>15,56</td>
                                <td>14</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td> <img src="./assets/esfera.png" alt=""/> </td>
                                <td>1</td>
                                <td>Esfera do Dragão</td>
                                <td>Acessórios</td>
                                <td>15,56</td>
                                <td>14</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td> <img src="./assets/esfera.png" alt=""/> </td>
                                <td>1</td>
                                <td>Esfera do Dragão</td>
                                <td>Acessórios</td>
                                <td>15,56</td>
                                <td>14</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td> <img src="./assets/esfera.png" alt=""/> </td>
                                <td>1</td>
                                <td>Esfera do Dragão</td>
                                <td>Acessórios</td>
                                <td>15,56</td>
                                <td>14</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td> <img src="./assets/esfera.png" alt=""/> </td>
                                <td>1</td>
                                <td>Esfera do Dragão</td>
                                <td>Acessórios</td>
                                <td>15,56</td>
                                <td>14</td>
                                <td></td>
                            </tr>
                        </TabelaProdutos>
                </div>
            </div>

                </div>

        </ConteudoSite>
    )
}