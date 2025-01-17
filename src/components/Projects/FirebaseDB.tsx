import { database } from "./FirebaseConfig"; // Importa o arquivo de configuração
import { ref, set, onValue } from "firebase/database";
import BackAw from "../../assets/turn-back.png";
import { useEffect, useState } from "react";

// Função para adicionar produtos
const adicionarProdutos = async () => {
  try {
    await set(ref(database, "Produtos/"), {
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
};

adicionarProdutos();

type Props = {
  setRealTimeToggle: (value: boolean) => void;
};
type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
};

export const RealtimeDatabase = ({ setRealTimeToggle }: Props) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const produtosRef = ref(database, "Produtos");
    const unsubscribe = onValue(produtosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const produtosArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(value as Omit<Produto, "id">),
        }));
        setProdutos(produtosArray);
      } else {
        setProdutos([]);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex-col border rounded-xl flex  w-11/12 h-72">
      <button
        onClick={() => {
          setRealTimeToggle(true);
        }}
        className=" w-6 m-5"
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
      <button onClick={adicionarProdutos}>Adicionar Produto</button>
    </div>
  );
};
