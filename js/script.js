import Modal from "./modules/modal.js";
import SlideNav from "./modules/slide.js";
import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/tab-nav.js";
import Tooltip from "./modules/tooltip.js";
import Acoordion from "./modules/accordion.js";
import MenuMobile from "./modules/menu-mobile.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import fetchAnimais from "./modules/fetch-animais.js";
import Funcionamento from "./modules/funcionamento.js";
import ScrollAnima from "./modules/scroll-anima.js";
import DropdownMenu from "./modules/dropdown-menu.js";

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

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");

fetchAnimais("animaisapi.json", ".numeros-grid");

fetchBitcoin("https://www.blockchain.com/ticker", ".btc-preco");
