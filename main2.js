function criaCart(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cart = document.createElement('article');
    cart.className = "cart";
    cart.innerHTML = `
  <div class="cont-cart" onclick="resp(this)">
      <h3>${categoria}</h3>
      <div class="perg-cart">
          <p>${pergunta}</p>
      </div>
      <div class="res-cart">
          <p>${resposta}</p>
      </div>
  </div>`
  container.appendChild(cart)
}
function resp(card){
    let resposta = card.document.querySelector('.res-cart');
    if (resposta.style.display === 'none'){
        resposta.style.display = 'block';
    }
    else{
        resposta.style.display = 'none';
    }
}