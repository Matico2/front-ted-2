import Produto from "@/core/produto";
import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";

interface FormularioProps {
    produto: Produto
    produtoMudou?: (produto: Produto) => void
    cancelado?: () => void
}
export default function Formulario(props: FormularioProps) {
    const id = props.produto?.id;
    const [nome, setNome] = useState(props.produto?.nome);
    const [valor, setValor] = useState(props.produto?.valor);
    const [quantidade, setQuantidade] = useState(props.produto?.quantidade);
  

    return (<div>
        {id ? (<Entrada texto="id" valor={id} somenteLeitura ></Entrada>) : false}
        <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
        <Entrada texto="Valor" valor={valor} onChange={setValor}></Entrada>
        <Entrada texto="Quantidade" valor={quantidade} onChange={setQuantidade}></Entrada>
        <div className="flex justify-end mt-5" >
            <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                onClick={() => props.produtoMudou?.(new Produto(
                    id, nome, valor, quantidade))}>
                {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700"
                onClick={props.cancelado}> Cancelar
            </Botao>
        </div>
    </div>
    )
}