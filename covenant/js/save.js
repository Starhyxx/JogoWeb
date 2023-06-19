document.addEventListener('DOMContentLoaded', function() {
    
    const personagensArmazenados = localStorage.getItem('personagem');
    console.log('Personagens armazenados:', personagensArmazenados);
    const personagens = JSON.parse(personagensArmazenados);
    console.log('Personagens parseados:', personagens);
  

    if (personagens && personagens.length > 0) {
      const ultimoPersonagem = personagens[personagens.length - 1];
  
      document.getElementById('nomeSave').textContent = ultimoPersonagem.nome || '';
      document.getElementById('habilidadeSave').textContent = ultimoPersonagem.habilidade || '';
      document.getElementById('vitalidadeSave').textContent = ultimoPersonagem.vitalidade || '';
      document.getElementById('sanidadeSave').textContent = ultimoPersonagem.sanidade || '';
    } else {
      console.log('Nenhum personagem encontrado');
    }
  });
  