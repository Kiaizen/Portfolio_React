import { database } from "./FirebaseConfig";
import { ref, set, onValue } from "firebase/database";
import BackAw from "../../assets/turn-back.png";
import { useEffect, useState } from "react";
import ProjectWrapper from "../wrapper/ProjectsWrapper";

// Definição do tipo Produto
type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
};

// Classe para gerenciar os produtos no Firebase
class ProdutoService {
  private dbRef = ref(database, "Produtos");

  async adicionarProdutos(): Promise<void> {
    try {
      await set(this.dbRef, {
        "1": {
          nome: "Cadeira de Escritório",
          descricao: "Cadeira ergonômica ajustável",
          preco: 599.9,
        },
        "2": {
          nome: "Mesa de Jantar",
          descricao: "Mesa de madeira para 6 pessoas",
          preco: 1200.0,
        },
      });
      console.log("Produtos adicionados com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar produtos:", error);
    }
  }

  observarProdutos(callback: (produtos: Produto[]) => void): () => void {
    return onValue(this.dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const produtosArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(value as Omit<Produto, "id">),
        }));
        callback(produtosArray);
      } else {
        callback([]);
      }
    });
  }
}

// Componente principal
const produtoService = new ProdutoService();

type Props = {
  onToggleProjectState: (value: boolean) => void;
};

export const RealtimeDatabase = ({ onToggleProjectState }: Props) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const unsubscribe = produtoService.observarProdutos(setProdutos);
    return () => unsubscribe();
  }, []);

  return (
    <ProjectWrapper>
      <button
        onClick={() => onToggleProjectState(true)}
        className="w-6 m-5"
      >
        <img src={BackAw} alt="Back button" />
      </button>
      <table>
        <thead>
          <tr>
            <th className="border">Nome</th>
            <th className="border">Descrição</th>
            <th className="border">Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id} className="border">
              <td className="border">{produto.nome}</td>
              <td className="border">{produto.descricao}</td>
              <td className="border">R${produto.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => produtoService.adicionarProdutos()}>
        Adicionar Produto
      </button>
    </ProjectWrapper>
  );
};
