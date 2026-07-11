/* Shared geographic data for Systems That Built Australia
   Simplified coastline (lng,lat) + city coordinates.
   Exposed as window.STBA. */
window.STBA = (function () {
  // Simplified Australia coastline, clockwise from Cape York. [lng, lat]
  const OUTLINE = [
    [142.5,-10.7],[145.3,-14.5],[146.3,-18.5],[148.9,-20.3],[149.5,-22.5],
    [152.9,-25.0],[153.6,-28.2],[152.5,-32.7],[151.0,-33.9],[150.0,-37.5],
    [147.9,-38.0],[146.4,-38.8],[144.5,-38.4],[141.6,-38.4],[139.8,-37.0],
    [139.0,-35.6],[137.8,-35.0],[137.5,-33.0],[136.0,-34.9],[134.2,-32.6],
    [131.5,-31.5],[126.0,-32.3],[123.5,-34.0],[120.0,-33.9],[115.9,-34.9],
    [115.0,-33.6],[114.9,-30.0],[114.1,-26.5],[113.4,-24.9],[117.2,-20.7],
    [121.0,-19.6],[122.2,-18.1],[123.6,-17.3],[125.9,-14.5],[128.5,-14.8],
    [130.6,-12.4],[132.5,-11.4],[135.5,-12.2],[136.9,-12.2],[137.0,-15.8],
    [139.5,-17.5],[140.9,-17.7],[141.5,-14.0]
  ];
  // Tasmania (separate loop)
  const TAS = [
    [145.3,-40.7],[148.3,-40.8],[148.3,-42.9],[146.9,-43.6],[145.5,-42.8],[144.7,-41.2]
  ];
  const CITIES = {
    Darwin:      [130.84,-12.46],
    AliceSprings:[133.88,-23.70],
    Adelaide:    [138.60,-34.93],
    Sydney:      [151.21,-33.87],
    Melbourne:   [144.96,-37.81],
    Brisbane:    [153.03,-27.47],
    Perth:       [115.86,-31.95],
    Canberra:    [149.13,-35.28],
    Snowy:       [148.35,-36.30]
  };
  // Overland Telegraph repeater stations (Adelaide -> Darwin), approx real sites
  const OTL = [
    ["Adelaide",       138.60,-34.93],
    ["Port Augusta",   137.77,-32.49],
    ["Beltana",        138.42,-30.80],
    ["Strangways",     136.10,-29.14],
    ["The Peake",      136.00,-28.10],
    ["Charlotte Waters",134.90,-25.92],
    ["Alice Springs",  133.88,-23.70],
    ["Barrow Creek",   133.88,-21.53],
    ["Tennant Creek",  134.19,-19.65],
    ["Powell Creek",   134.20,-18.10],
    ["Daly Waters",    133.37,-16.25],
    ["Katherine",      132.26,-14.47],
    ["Darwin",         130.84,-12.46]
  ];
  return { OUTLINE, TAS, CITIES, OTL };
})();
