import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import menu from '../blocks/menu/menu';
import mapInit from '../blocks/map/mapInit';
import main from '../pages/main/main';
import pagination from '../blocks/pagination/pagination'; // здесь так же записана инициализация слайдов
import productPreview from '../blocks/product-preview/product-preview';
import services from '../pages/services/services';
import selectbox from '../blocks/selectbox/selectbox';
import popup from './common/popup';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  menu();
  mapInit();
  main();
  pagination();
  productPreview();
  services();
  window.rebuildServicesGrid = services;
  selectbox();
  popup();
});
