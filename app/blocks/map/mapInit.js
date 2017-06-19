import map from './map';

export default () => {
  const mapElement = document.getElementById('map');

  if (!mapElement) {
    return;
  }
  const location = { lat: 48.465358, lng: 135.172631 };
  const image = 'assets/images/googlemap/marker.png';
  map.then((googleMaps) => {
    // eslint-disable-next-line no-new
    const mapFrame = new googleMaps.Map(mapElement, {
      zoom: 17,
      center: { lat: 48.466058, lng: 135.176531 },
      mapTypeId: googleMaps.MapTypeId.ROADMAP,
      scrollwheel: false,
      disableDefaultUI: true,
    });
    // eslint-disable-next-line no-new
    const marker = new googleMaps.Marker({
      position: location,
      title: 'Hello World!',
      icon: image,
    });
    marker.setMap(mapFrame);
  }).catch(f => f);
};
