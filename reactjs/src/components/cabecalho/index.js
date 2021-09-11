import { ContainerCabecalho, Perfil, Icones } from "./styled"

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <Perfil>
                <div class="notificacao">3</div>
                <img src='./assets/perfil.jpg' alt=""/> 
                <div class="nome">Olá, <b>Letícia Rodrigues</b></div>
             </Perfil>
            <Icones>
                <div class="bolinhas">
                    <div class="box-carregar">
                        <div class="carregar"><img src='/assets/carregar.png' alt="" /></div>
                    </div>
                    <div class="box-sair">
                        <div class="sair"><img src='/assets/logout.svg' alt="" /></div>
                    </div>
                </div>
            </Icones>
        </ContainerCabecalho>
    )
}