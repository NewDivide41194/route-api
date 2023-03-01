const { addRoute } = require("../database/provider/route.provider");
const { deleteRouteService } = require("../service/route.service");
const db = require("../database/model");

const routeModel = db.route;

const correctCreate = [
  {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [103.70304676245479, 1.3507163548200936],
        [103.70304676245479, 1.3507163548200936],
      ],
    },
  },
];

const wrongGeometryCreate = [
  {
    type: "Feature",
    geometry: {},
  },
];

const wrongTypeCreate = [
  {
    type: "Feature",
    geometry: {
      type: "wrongType",
      coordinates: [103.70304676245479, 1.3507163548200936],
    },
  },
];

describe("delete Route", () => {
  it("Should success delete Route", async () => {
    await deleteRouteService();
    const routeRow = await routeModel.count();
    expect(routeRow).toBe(0);
  });
});

describe("Create Route", () => {
  it("Should success create Route", async () => {
    const originalRow = await routeModel.count();
    const data = await addRoute(correctCreate);
    expect(data).not.toBeNull();
    const newRow = await routeModel.count();
    expect(newRow).toBe(originalRow + 1);
  });

  it("Should fail create Route geometry", async () => {
    const originalRow = await routeModel.count();
    await expect(addRoute(wrongGeometryCreate)).rejects.toThrow(
      new Error("GeometryType undefined not supported")
    );
    const newRow = await routeModel.count();
    expect(newRow).toBe(originalRow);
  });

  it("Should fail create Route type", async () => {
    const originalRow = await routeModel.count();
    await expect(addRoute(wrongTypeCreate)).rejects.toThrow(
      new Error(
        `GeometryType ${wrongTypeCreate[0].geometry.type} not supported`
      )
    );
    const newRow = await routeModel.count();
    expect(newRow).toBe(originalRow);
  });
});
