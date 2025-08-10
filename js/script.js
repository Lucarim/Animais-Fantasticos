import Modal from "./modules/modal.js";
import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/tab-nav.js";
import Tooltip from "./modules/tooltip.js";
import Acoordion from "./modules/accordion.js";
import initMenuMobile from "./modules/menu-mobile.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initFucionamento from "./modules/funcionamento.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initScrollAnimation from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave("[data-menu='list'] a[href^='#']");
scrollSuave.init();

const acorddion = new Acoordion("[data-anime='accordion'] dt");
acorddion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] div");
tabNav.init();

const modal = new Modal(
  "[data-modal='container']",
  "[data-modal='abrir']",
  "[data-modal='fechar']"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("animaisapi.json", ".numeros-grid");

fetchBitcoin("https://www.blockchain.com/ticker", ".btc-preco");

initMenuMobile();
initFucionamento();
initDropdownMenu();
initScrollAnimation();
