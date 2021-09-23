import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    
    async listarProdutos() {
        let r = await api.get('/produto/');
        return r.data
    }

    async inserirProduto(nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem) {
        let r = await api.post('/produto', {nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem});
        return r.data;
    }

    async alterarProduto(id, nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem) {
        let r = await api.put('/produto/' + id, {nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem});
        return r.data;
    }

    async removerProduto(id) {
        let r = await api.delete('/produto/' + id);
        return r.data;
    }
}