import React, { useEffect, useState } from "react";
import ProjectWrapper from "../wrapper/ProjectsWrapper";

type Tarefa = {
  id: number;
  titulo: string;
  descricao: string;
};

type Props = {
  onToggleProjectState: (value: boolean) => void;
};

const API = "https://backendphp-production.up.railway.app";

function Tarefas({ onToggleProjectState }: Props) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [idEditando, setIdEditando] = useState<number | null>(null);

  const carregarTarefas = async () => {
    try {
      const res = await fetch(`${API}/read.php`);
      const text = await res.text();
      console.log("Teste:", text);

      const dados = JSON.parse(text);

      if (Array.isArray(dados)) {
        setTarefas(dados);
      } else {
        console.error("Resposta não é uma lista de tarefas:", dados);
        setTarefas([]);
      }
    } catch (err) {
      console.error("Erro ao carregar tarefas:", err);
      setTarefas([]);
    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const limparFormulario = () => {
    setTitulo("");
    setDescricao("");
    setIdEditando(null);
  };

  const salvarTarefa = async (e: React.FormEvent) => {
    e.preventDefault();

    const tarefa = { titulo, descricao };
    const endpoint = idEditando ? "update.php" : "create.php";
    const dados = idEditando ? { ...tarefa, id: idEditando } : tarefa;

    try {
      const res = await fetch(`${API}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!res.ok) throw new Error("Erro ao salvar");

      limparFormulario();
      carregarTarefas();
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar tarefa");
    }
  };

  const editarTarefa = (t: Tarefa) => {
    setIdEditando(t.id);
    setTitulo(t.titulo);
    setDescricao(t.descricao);
  };

  const deletarTarefa = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir esta tarefa?")) return;

    try {
      const res = await fetch(`${API}/delete.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Erro ao deletar");

      carregarTarefas();
    } catch (err) {
      console.error(err);
      alert("Erro ao deletar tarefa");
    }
  };

  return (
    <ProjectWrapper>
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Lista de Tarefas</h1>
        <button
          onClick={() => onToggleProjectState(true)}
          className="mb-4 underline text-blue-600 hover:text-blue-800"
        >
          Voltar
        </button>

        <form onSubmit={salvarTarefa} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Título"
            className="w-full border-b focus:border-accent outline-none px-3 py-2 bg-transparent"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <textarea
            placeholder="Descrição"
            className="w-full border-b focus:border-accent outline-none px-3 resize-none py-2 bg-transparent"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="btn btn-lg md:text-2xl font-bold "
            >
              {idEditando ? "Atualizar" : "Salvar"}
            </button>
            <button
              type="button"
              onClick={limparFormulario}
              className="bg-gray-300 rounded-full px-10 font-bold hover:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {tarefas.map((tarefa) => (
            <div
              key={tarefa.id}
              className="border p-4 rounded shadow flex flex-col gap-2"
            >
              <h3 className="text-lg font-semibold">{tarefa.titulo}</h3>
              <p>{tarefa.descricao}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => editarTarefa(tarefa)}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </button>
                <button
                  onClick={() => deletarTarefa(tarefa.id)}
                  className="text-red-600 hover:underline"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectWrapper>
  );
}

export default Tarefas;
