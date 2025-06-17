
function showInfo(titulo, descricao) {
  // Verifica se já existe um modal e remove
  const antigoModal = document.querySelector("#produto-info");
  if (antigoModal) {
    antigoModal.remove();
  }

  // Criação do elemento modal
  const modal = document.createElement("div");
  modal.id = "produto-info";
  modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

  // Conteúdo do modal
  modal.innerHTML = `
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
      <h3 class="text-green-700 font-bold text-xl mb-2">${titulo}</h3>
      <p class="text-green-800 mb-4">${descricao}</p>
      <button class="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded" onclick="fecharModal()">Fechar</button>
    </div>
  `;

  // Adiciona ao body
  document.body.appendChild(modal);
}

function fecharModal() {
  const modal = document.querySelector("#produto-info");
  if (modal) {
    modal.remove();
  }
}
