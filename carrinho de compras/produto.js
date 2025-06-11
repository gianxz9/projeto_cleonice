function adicionar(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert('Produto adicionado ao carrinho!');
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
  }