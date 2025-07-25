export default function initFetchBitcoin() {
  fetch("https://www.blockchain.com/ticker")
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / json.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
