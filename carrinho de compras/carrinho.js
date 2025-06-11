function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const container = document.getElementById('carrinho');
    container.innerHTML = '';

    if (carrinho.length === 0) {
      container.innerHTML = '<p>O carrinho está vazio.</p>';
      return;
    }

    carrinho.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <span>${item.nome} - R$${item.preco}</span>
        <button onclick="remover(${index})">Remover</button>
      `;
      container.appendChild(div);
    });
  }

  function remover(index) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
  }

  function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('carrinho');
    carregarCarrinho();
  }

  carregarCarrinho();