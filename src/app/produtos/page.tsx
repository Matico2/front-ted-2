'use client';


import Botao from "@/components/produtos/botao";
import Formulario from "@/components/produtos/formulario";
import Layout from "@/components/produtos/layout";
import Tabela from "@/components/produtos/tabela";
import Produto from "@/core/produto";
import { fetchProduto, cadastrarProduto, excluirProduto, atualizarProduto } from "@/service/produtoService";
import { useEffect, useState } from "react";
import React from 'react';

export default function Produtos() {

  const [produto, setProduto] = useState<Produto>(Produto.vazio());
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
  if (visivel === 'tabela') {
    (async () => {
      try {
        const dados = await fetchProduto();
        setProdutos(dados); 
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    })();
  }
}, [visivel]);

  function produtoSelecionado(produto: Produto) {
    setProduto(produto);
    setVisivel('form');
  }

  async function produtoExcluido(produto: Produto) {
    const confirmacao = window.confirm("Tem certeza de que deseja excluir este produto?");
    if (confirmacao) {
      try {
        if (produto.id !== null) {
          await excluirProduto(produto.id);
        } else {
          console.error("produto Id é null!");
        }
        setProdutos((prevProdutos) => prevProdutos.filter((ev) => ev.id !== produto.id));
      } catch (error) {
        console.error("Erro ao excluir produto:", error);
      }
    }
  }

  function salvarOuAlterarProduto(produto: Produto) {
    if (produto.id) {
      alterarProduto(produto);
    } else {
      salvarProduto(produto);
    }
  }

  async function alterarProduto(produto: Produto) {
    try {
      const produtoAtualizado = await atualizarProduto(produto);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  }

  async function salvarProduto(produto: Produto) {
    try {
      const novoProduto = await cadastrarProduto(produto);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  }

  function novoProduto() {
    setProduto(Produto.vazio());
    setVisivel("form");
  }

  return (
    <div
    className={`
  flex justify-center items-center h-screen
  bg-gradient-to-bl from-purple-800 via-purple-500 to-purple-800
  text-gray-200
`}

    >
      <Layout titulo="Cadastro de produtos">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-4"
                cor="bg-gradient-to-r from-green-500 to-green-700"
                onClick={() => novoProduto()}
              >
                Novo produto
              </Botao>
            </div>
            <Tabela
              produtos={produtos}
              produtoSelecionado={produtoSelecionado}
              produtoExcluido={produtoExcluido}
            ></Tabela>
          </>
        ) : (
            <Formulario
            produto={produto}
            produtoMudou={salvarOuAlterarProduto}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  );
}
