import svg4everybody from 'svg4everybody';
import 'object-fit-images';
import 'jscroll';
import menu from '../blocks/menu/menu';
import mapInit from '../blocks/map/mapInit';
import main from '../pages/main/main';
import pagination from '../blocks/pagination/pagination'; // здесь так же записана инициализация слайдов
import productPreview from '../blocks/product-preview/product-preview';
// import loading from '../pages/park-technics/park-technics';

const $ = window.$;
$(() => {
  svg4everybody();
  menu();
  mapInit();
  main();
  pagination();
  productPreview();
  // loading();
});
