import React, { useEffect, useState } from 'react';

type Tarefa = {
  id: number;
  titulo: string;
  descricao: string;
};

const API = 'https://harao.infy.uk/api'; 

const Tarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [idEditando, setIdEditando] = useState<number | null>(null);

  const carregarTarefas = async () => {
    const res = await fetch(`${API}/read.php`);
    const dados = await res.json();
    setTarefas(dados);
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const limparFormulario = () => {
    setTitulo('');
    setDescricao('');
    setIdEditando(null);
  };

  const salvarTarefa = async (e: React.FormEvent) => {
    e.preventDefault();

    const tarefa = { titulo, descricao };
    const endpoint = idEditando ? 'update.php' : 'create.php';
    const dados = idEditando ? { ...tarefa, id: idEditando } : tarefa;

    await fetch(`${API}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });

    limparFormulario();
    carregarTarefas();
  };

  const editarTarefa = (t: Tarefa) => {
    setIdEditando(t.id);
    setTitulo(t.titulo);
    setDescricao(t.descricao);
  };

  const deletarTarefa = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir esta tarefa?')) return;

    await fetch(`${API}/delete.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    carregarTarefas();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Tarefas</h1>

      <form onSubmit={salvarTarefa} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Título"
          className="w-full border rounded px-3 py-2"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrição"
          className="w-full border rounded px-3 py-2"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {idEditando ? 'Atualizar' : 'Salvar'}
          </button>
          <button
            type="button"
            onClick={limparFormulario}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
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
  );
};

export default Tarefas;
