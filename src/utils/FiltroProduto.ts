import IProduto from "../model/IProduto";

export default class FiltroProduto {
  id: number | null;
  nome: string;
  private _precoMaximo: number;
  private _precoMinimo: number;
  private _quantidadeMaxima: number;
  private _quantidadeMinima: number;
  constructor(filtroProduto: FiltroProduto | null = null) {
    this.id = filtroProduto ? filtroProduto.id : null;
    this.nome = filtroProduto ? filtroProduto.nome : "";
    this._precoMaximo = filtroProduto ? filtroProduto.precoMaximo : Infinity;
    this._precoMinimo = filtroProduto ? filtroProduto.precoMinimo : 0;
    this._quantidadeMaxima = filtroProduto ? filtroProduto.quantidadeMaxima : Infinity;
    this._quantidadeMinima = filtroProduto ? filtroProduto.quantidadeMinima : 0;
  }

  get precoMaximo(): number {
    return this._precoMaximo;
  }

  set precoMaximo(precoMaximo: number) {
    if (isNaN(precoMaximo) || precoMaximo < 0) {
      this._precoMaximo = Infinity;
      return;
    }
    this._precoMaximo = precoMaximo;
  }

  get precoMinimo(): number {
    return this._precoMinimo;
  }

  set precoMinimo(precoMinimo: number) {
    if (isNaN(precoMinimo) || precoMinimo < 0) {
      this._precoMinimo = 0;
      return;
    }
    this._precoMinimo = precoMinimo;
  }

  get quantidadeMaxima() {
    return this._quantidadeMaxima;
  }

  set quantidadeMaxima(quantidadeMaxima: number) {
    if (isNaN(quantidadeMaxima) || quantidadeMaxima < 0) {
      this._quantidadeMaxima = Infinity;
      return;
    }
    this._quantidadeMaxima = quantidadeMaxima;
  }

  get quantidadeMinima() {
    return this._quantidadeMinima;
  }

  set quantidadeMinima(quantidadeMinima: number) {
    if (isNaN(quantidadeMinima) || quantidadeMinima < 0) {
      this._quantidadeMinima = 0;
      return;
    }
    this._quantidadeMinima = quantidadeMinima;
  }

  comparaProduto(produto: IProduto) {
    let id = !this.id || (this.id && produto.id === this.id);
    let nome =
      !(this.nome && produto.nome && this.nome.length > 0) ||
      (this.nome && produto.nome && produto.nome.toLowerCase().includes(this.nome.toLowerCase()));
    let preco = produto.preco <= this.precoMaximo && produto.preco >= this.precoMinimo;
    let quantidade = produto.quantidadeDisponivel <= this.quantidadeMaxima && produto.quantidadeDisponivel >= this.quantidadeMinima;
    return id && nome && preco && quantidade;
  }
}
