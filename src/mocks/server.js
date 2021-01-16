import Pretender from "pretender";
import { champions } from "./champions.js";

function response(code, body) {
  return body
    ? [code, { "Content-Type": "application/json" }, JSON.stringify(body)]
    : [code];
}

function getTopChampions(req) {
  let result = [
    ...champions["sparta"]
      .slice(0, 1)
      .map(({ id, name }) => ({ id, name, city: "sparta" })),
    ...champions["argos"]
      .slice(0, 2)
      .map(({ id, name }) => ({ id, name, city: "argos" })),
  ];

  if (req.params.name) {
    result = result.filter(({ name }) =>
      name.toLowerCase().includes(req.params.name.toLowerCase())
    );
  }

  return response(200, result);
}

function getChampions(req) {
  let result = champions[req.params.type].map(({ id, name }) => ({
    id,
    name,
    city: req.params.type,
  }));

  if (req.params.name) {
    result = result.filter(({ name }) =>
      name.toLowerCase().includes(req.params.name.toLowerCase())
    );
  }

  return response(200, result);
}

function getChampion(req) {
  return response(
    200,
    champions[req.params.type].filter(
      ({ id }) => id === Number(req.params.id)
    )[0]
  );
}

function addChampion(req) {
  const id =
    champions[req.params.type].length > 0
      ? Math.max(...champions[req.params.type].map(({ id }) => id)) + 1
      : 1;
  champions[req.params.type] = [
    ...champions[req.params.type],
    { id, name: JSON.parse(req.requestBody).name },
  ];

  return response(204);
}

function updateChampion(req) {
  champions[req.params.type] = champions[req.params.type].map(({ id, name }) =>
    id === Number(req.params.id)
      ? {
          id: Number(JSON.parse(req.requestBody).id),
          name: JSON.parse(req.requestBody).name,
        }
      : { id, name }
  );

  return response(204);
}

function deleteChampion(req) {
  champions[req.params.type] = champions[req.params.type].filter(
    ({ id }) => id !== Number(req.params.id)
  );

  return response(204);
}

// random timing to make response more realistic
const timing = Math.floor(Math.random() * (400 - 100) + 100);

export function server() {
  new Pretender(function () {
    this.get("/api/champions/top", getTopChampions, timing);
    this.get("/api/champions/top/search/:name", getTopChampions, timing);
    this.get("/api/champions/:type", getChampions, timing);
    this.get("/api/champions/:type/search/:name", getChampions, timing);
    this.post("/api/champions/:type", addChampion);
    this.get("/api/champions/:type/:id", getChampion, timing);
    this.put("/api/champions/:type/:id", updateChampion);
    this.delete("/api/champions/:type/:id", deleteChampion);
  });
}
