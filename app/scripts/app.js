import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import 'object-fit-images';
import menu from '../blocks/menu/menu';
import mapInit from '../blocks/map/mapInit';
import main from '../pages/main/main';

$(() => {
  svg4everybody();
  menu();
  mapInit();
  main();
});
