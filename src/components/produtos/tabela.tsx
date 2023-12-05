import Produto from "@/core/produto";
import { IconeEdicao, IconeLixo } from "../icones/tabela";

interface TabelaProps {
    produtos: Produto[]
    produtoSelecionado?: (produto: Produto) => void
    produtoExcluido?: (produto: Produto) => void
}

export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.produtoSelecionado || props.produtoExcluido

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">nome</th>
                <th className="text-left p-3">valor</th>
                <th className="text-left p-3">quantidade</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        );
    }

    function renderDados() {
        return props.produtos?.map((produto, i) => {
            return (
                <tr key={produto.id} className={`${i % 2 === 0 ? 'bg-violet-400' : 'bg-purple-700'}`}>
                    <td className="text-left p-3">{produto.id}</td>
                    <td className="text-left p-3">{produto.nome}</td>
                    <td className="text-left p-3">{produto.valor}</td>
                    <td className="text-left p-3">{produto.quantidade}</td>
                    {exibirAcoes ? renderizarAcoes(produto) : false}

                </tr>
            );
        });
    }
    function renderizarAcoes(produto: Produto) {
      return (
          <td className="flex justify-center">
              {props.produtoSelecionado ? (
                  <button onClick={() => props.produtoSelecionado?.(produto)} className={`flex justify-center items
                  text-green-600 rounded-full p-2 m-1
                  hover:bg-gray-100`}>{IconeEdicao}</button>
              ) : false }
              {props.produtoExcluido ? (
                  <button onClick={() => props.produtoExcluido?.(produto)} className={`flex justify-center items
                  text-red-600 rounded-full p-2 m-1
                  hover:bg-gray-100`}>{IconeLixo}</button>
              ) : false}
          </td>
      )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`text-gray-100 bg-gradient-to-r from-yellow-400 to-purple-800`}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderDados()}
      </tbody>
    </table>
  )

}
