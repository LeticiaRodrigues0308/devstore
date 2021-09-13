import Cabecalho from "../components/cabecalho";
import { ConteudoSite } from "./conteudo.styled";
import { ProdutosInput } from "../components/outros/inputs";
import { TabelaProdutos, IconesTabela } from "../components/outros/table";

import LoadingBar from 'react-top-loading-bar';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { useState, useEffect, useRef } from "react";

import Api from "../service/api"
const api = new Api();

export default function Conteudo() {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [precode, setPrecode] = useState('');
    const [precopor, setPrecopor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [imagem, setImagem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

   const loading = useRef(null)

    async function listarProdutos() {
        loading.current.complete();

        let r = await api.listarProdutos();
        console.log(r)
        setProdutos(r)
    }

    async function inserirProduto() {
        loading.current.complete();


        if(idAlterando == 0) {
            let r = await api.inserirProduto(nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem);

            if(r.erro){
                toast.error(r.erro);
            } else {
                toast.success('✔️ Produto inserido com sucesso!');
            }
        } else {
            let r = await api.alterarProduto(idAlterando, nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem);

            if(r.erro){
                toast.error(r.erro);
            } else {
                toast.success('✔️ Produto alterado com sucesso!');
            }
        }

        limparCampos();
        listarProdutos();
    }

    function limparCampos() {
        setNome('');
        setCategoria('');
        setPrecode('');
        setPrecopor('');
        setAvaliacao('');
        setDescricao('');
        setEstoque('');
        setImagem('');
        setIdAlterando(0);
    }

    async function alterarProduto(item) {
        loading.current.complete();

        setNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPrecode(item.vl_preco_de);
        setPrecopor(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setDescricao(item.ds_produto);
        setEstoque(item.qtd_estoque);
        setImagem(item.img_produto);
        setIdAlterando(item.id_produto);
    }

    async function removerProduto(id) {
        loading.current.complete();

        confirmAlert({
            title: 'Remover Produto',
            message: `Tem certeza que deseja remover o produto ${id} ?`, 
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.removerProduto(id);
                        if(r.erro)
                            toast.error(`${r.erro}`);
                        else {
                            toast.success('🗑️ Produto removido com sucesso!');
                            listarProdutos();
                        }
                    }
                },
                {
                    label: 'Não'
                }
            ]
        });
    }

    useEffect(() => {
        listarProdutos();
    },[])

    return (
        <ConteudoSite>
            <ToastContainer/>
            <LoadingBar  color='#13D3D3' ref={loading}/>
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
                            <div class="novo-produto"> {idAlterando == 0 ? "Novo Produto" : "Alterando Produto" + idAlterando}</div>
                        </div>

                        <div class="cadastro-produto">
                            <div class="inputs1">
                                <div class="input-nome">
                                    <div class="label">Nome: </div>
                                    <ProdutosInput type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                                </div>

                                <div class="input-preco">
                                    <div class="label">Preço DE: </div>
                                    <ProdutosInput type="text" value={precode} onChange={e => setPrecode(e.target.value)}/>
                                </div>
                            </div>

                            <div class="inputs2">
                                <div class="input-categoria">
                                    <div class="label">Categoria: </div>
                                    <ProdutosInput type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                                </div>

                                <div class="input-preco-por">
                                    <div class="label">Preço POR:</div>
                                    <ProdutosInput type="text" value={precopor} onChange={e => setPrecopor(e.target.value)}/>
                                </div>
                            </div>

                            <div class="inputs3">
                                <div class="input-avaliacao">
                                    <div class="label">Avaliação: </div>
                                    <ProdutosInput type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/>
                                </div>

                                <div class="input-estoque">
                                    <div class="label">Estoque: </div>
                                    <ProdutosInput type="text" value={estoque} onChange={e => setEstoque(e.target.value)}/>
                                </div>
                            </div>

                            <div class="input-link">
                                <div class="label">Link Imagem: </div>
                                <ProdutosInput type="text" value={imagem} onChange={e => setImagem(e.target.value)}/>
                            </div>

                            <div class="input4">
                                <div class="textarea">
                                    <div class="label">Descrição: </div>
                                    <textarea name="descricao" id="descricao" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
                                </div>

                                <div class="botao-cadastrar"> <button onClick={inserirProduto}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button> </div>
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

                            <tbody>

                                {produtos.map(item =>
                                    <tr>
                                        <td> <img src={item.img_produto} alt="" style={{width: '80px', height: 'auto', borderRadius: '20px'}}/> </td>
                                        <td>{item.id_produto}</td>
                                        <td title={item.nm_produto}>
                                            {item.nm_produto != null && item.nm_produto.length >= 25 
                                                    ? item.nm_produto.substr(0, 25) + '...'
                                                    : item.nm_produto}
                                         </td>
                                        <td>{item.ds_categoria}</td>
                                        <td>{item.vl_preco_por}</td>
                                        <td>{item.qtd_estoque}</td>

                                        <IconesTabela>
                                            <td class="acao"> <button onClick={() => alterarProduto(item)}><img src="./assets/editar.png" alt=""/> </button> </td>
                                            <td class="acao"> <button onClick={() => removerProduto(item.id_produto)}> <img src="./assets/apagar.png" alt=""/> </button> </td>
                                        </IconesTabela>
                                    </tr>
                                )}
                            </tbody>
                        </TabelaProdutos>
                </div>
            </div>

                </div>

        </ConteudoSite>
    )
}