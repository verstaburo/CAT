import map from './map';

export default () => {
  const mapElement = document.getElementById('map');

  if (!mapElement) {
    return;
  }
  const markerPoint = {
    lat: 48.465358,
    lng: 135.172631,
  };
  /* eslint-disable */
  if (window.innerWidth > 1024) {
    var centerPoint = {
      lat: 48.466058,
      lng: 135.176531
    };
  } else {
    var centerPoint = {
      lat: 48.4666061,
      lng: 135.1726898
    };
  }
  const image = 'assets/images/googlemap/marker.png';
  map.then((googleMaps) => {
    // eslint-disable-next-line no-new
    const mapFrame = new googleMaps.Map(mapElement, {
      zoom: 17,
      center: centerPoint,
      mapTypeId: googleMaps.MapTypeId.ROADMAP,
      scrollwheel: false,
      disableDefaultUI: true,
      // zoomControl: true,
      // zoomControlOptions: {
      //   position: googleMaps.ControlPosition.BOTTOM_CENTER
      // }
    });
    // eslint-disable-next-line no-new
    const marker = new googleMaps.Marker({
      position: markerPoint,
      icon: image,
    });
    marker.setMap(mapFrame);
  }).catch(f => f);
};
