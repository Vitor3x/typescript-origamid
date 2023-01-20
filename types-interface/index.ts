// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

type Empresa = {
  nome: string,
  fundacao: number,
  país: string
}

type Product = {
  nome: string,
  preco: number,
  descricao: string,
  garantia: string,
  seguroAcidentes: boolean,
  empresaFabricante: Empresa,
  empresaMontadora: Empresa
}


async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(produto: Product) {

  document.body.innerHTML = `
    <div>
      <h1>${produto.nome}</h1>
      <p>${produto.preco}</p>
      <p>${produto.descricao}</p>
      <p>${produto.garantia}</p>
      <p>${produto.seguroAcidentes}</p>
      <p>${produto.empresaFabricante.nome}</p>
      <p>${produto.empresaMontadora.nome}</p>
    </div>
  `
}