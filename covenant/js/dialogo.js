// Função para atualizar os níveis de vitalidade e sanidade
function atualizarNiveis(vitalidade, sanidade) {
    const valorVitalidadeSpan = document.getElementById('valorVitalidade');
    const valorSanidadeSpan = document.getElementById('valorSanidade');
  
    if (valorVitalidadeSpan) {
      valorVitalidadeSpan.textContent = vitalidade ? vitalidade.toString() + '%' : '';
    }
  
    if (valorSanidadeSpan) {
      valorSanidadeSpan.textContent = sanidade ? sanidade.toString() + '%' : '';
    }
  
    // Atualizar o comprimento das barras
    const barraVitalidade = document.querySelector('.barra_Vitalidade span');
    const barraSanidade = document.querySelector('.barra_Sanidade span');
  
    if (barraVitalidade) {
      barraVitalidade.style.width = vitalidade ? vitalidade.toString() + '%' : '0%';
    }
  
    if (barraSanidade) {
      barraSanidade.style.width = sanidade ? sanidade.toString() + '%' : '0%';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.botao_menu');
    const telaDesfoque = document.querySelector('.tela_desfoque');
    const menu = document.querySelector('.menu');
  
    menuButton.addEventListener('click', () => {
      telaDesfoque.style.display = 'block';
      menu.style.display = 'block';
    });
  
    telaDesfoque.addEventListener('click', () => {
      telaDesfoque.style.display = 'none';
      menu.style.display = 'none';
    });
  
    const continueButton = document.getElementById('botaoContinuar');
  
    continueButton.addEventListener('click', () => {
      telaDesfoque.style.display = 'none';
      menu.style.display = 'none';
    });
  
    // Obter os valores iniciais de vitalidade e sanidade
    const personagensString = localStorage.getItem('personagem');
    const personagens = personagensString ? JSON.parse(personagensString) : [];
    const ultimoPersonagem = personagens.length > 0 ? personagens[personagens.length - 1] : {};
    const { vitalidade, sanidade } = ultimoPersonagem;
  
    // Atualizar os níveis iniciais
    atualizarNiveis(vitalidade, sanidade);
  });
