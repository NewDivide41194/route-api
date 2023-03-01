const getRoute = async (geometryData) => {
  const mapBoxKey = process.env.MAPBOX_KEY;
  const allDist = [];
  const allRoute = [];
  for (var i = 0; i < geometryData.length; i++) {
    // console.log(i);
    var graph = [];
    var routeArr = [];
    for (var a = 0; a < geometryData.length; a++) {
      console.log("from", i, "to", a);
      const start = geometryData[a].geometry.coordinates;

      const destinations = geometryData[i].geometry.coordinates;
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${destinations[0]},${destinations[1]}?geometries=geojson&access_token=${mapBoxKey}`,
        { method: "GET" }
      );
      const json = await query.json();
      const data = json.routes[0];
      const { distance } = data;
      const route = data.geometry.coordinates;
      if (a === 0 || a < i) {
        graph.push(0);
      } else {
        graph.push(distance);
      }
      if (a === i ) {
        routeArr.push(0);
      } else {
        routeArr.push(route);
      }
    }
    allDist.push(graph);
    allRoute.push(routeArr);
  }
  const nodeToNodeIndex = allDist.map((v, k) => {
    return {
      [k]: v.indexOf(
        Math.min.apply(
          Math,
          v.filter((a) => a !== 0)
        )
      ),
    };
  });
  const shortestRoute = nodeToNodeIndex.map(
    (d, i) =>
      allRoute.filter((r, index) => {
        if (Object.values(d)[0] === index) {
          return allRoute[index];
        }
      })[0]
  );
  console.log("SSSSSSSSSSSSSs",nodeToNodeIndex);
  // console.log("===========>",nodeToNodeIndex);
  return shortestRoute;
};
module.exports = { getRoute };
