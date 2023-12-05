import Produto from '../core/produto';
let produtosList: Produto[] = [
  new Produto(1, "Blusa", 19, 1),
  new Produto(2, "Calça", 22, 2),
  new Produto(3, "Sapato", 35, 3)
]
let proximoId = produtosList.length + 1;
export const fetchProduto = async (): Promise<Produto[]> => {
  
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return produtosList;
  } catch (error) {
    throw new Error('Erro ao buscar produtos');
  }
};
export const cadastrarProduto = async (novoProduto: Produto): Promise<Produto> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    novoProduto.id = proximoId++;
    produtosList.push(novoProduto);
    return novoProduto;
  } catch (error) {
    console.error("Erro ao cadastrar produto:", error);
    throw error;
  }
};
export const atualizarProduto = async (produtoAtualizado: Produto): Promise<Produto> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = produtosList.findIndex((produto) => produto.id === produtoAtualizado.id);
    if (index !== -1) {
      produtosList[index] = produtoAtualizado;
      return produtoAtualizado;
    } else {
      throw new Error('Produto não encontrado');
    }
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    throw error;
  }
};
export const excluirProduto = async (id: number): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    produtosList = produtosList.filter((produto) => produto.id !== id);
  } catch (error) {
    console.error("Erro ao excluir produto:", error);
    throw error;
  }
};