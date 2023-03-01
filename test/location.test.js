const {
  addCustomLocationService,
  deleteCustomLocationService,
} = require("../service/location.service");
const db = require("../database/model");

const locationModel = db.location;
const routeModel = db.route;

const correctCreate = [
  {
    type: "test",
    geometry: {
      type: "Point",
      coordinates: [103.70304676245479, 1.3507163548200936],
    },
  },
];

const wrongGeometryCreate = [
  {
    type: "test",
    geometry: {},
  },
];

const wrongTypeCreate = [
  {
    type: "test",
    geometry: {
      type: "wrongType",
      coordinates: [103.70304676245479, 1.3507163548200936],
    },
  },
];

describe("delete Location", () => {
  it("Should success delete location", async () => {
    const originalRow = await locationModel.count();
    await deleteCustomLocationService();
    const newRow = await locationModel.count();
    expect(newRow).toBe(originalRow);

    const routeRow = await routeModel.count();
    expect(routeRow).toBe(0);
  });
});

describe("Create Location", () => {
  it("Should success create location", async () => {
    const originalRow = await locationModel.count();
    const data = await addCustomLocationService(correctCreate);
    expect(data).not.toBeNull();
    const newRow = await locationModel.count();
    console.log(newRow);
    expect(newRow).toBe(originalRow + 1);
  });

  it("Should fail create location geometry", async () => {
    const originalRow = await locationModel.count();
    await expect(addCustomLocationService(wrongGeometryCreate)).rejects.toThrow(
      new Error("GeometryType undefined not supported")
    );
    const newRow = await locationModel.count();
    expect(newRow).toBe(originalRow);
  });

  it("Should fail create location type", async () => {
    const originalRow = await locationModel.count();
    await expect(addCustomLocationService(wrongTypeCreate)).rejects.toThrow(
      new Error(
        `GeometryType ${wrongTypeCreate[0].geometry.type} not supported`
      )
    );
    const newRow = await locationModel.count();
    expect(newRow).toBe(originalRow);
  });
});
