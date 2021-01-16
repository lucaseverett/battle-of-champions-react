function getChampions(route, search = "") {
  if (search) search = `/search/${search}`;
  return fetch(`/api/champions/${route}${search}`)
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

function getChampion(route, id) {
  return fetch(`/api/champions/${route}/${id}`)
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

async function getTop(search = "") {
  if (search) search = `/search/${search}`;
  return fetch(`/api/champions/top${search}`)
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

function updateChampion(route, id, name) {
  fetch(`/api/champions/${route}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ id, name }),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((e) => console.log(e));
}

function addChampion(route, name) {
  fetch(`/api/champions/${route}`, {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((e) => console.log(e));
}

function deleteChampion(route, id) {
  fetch(`/api/champions/${route}/${id}`, {
    method: "DELETE",
  }).catch((e) => console.log(e));
}

export {
  getChampion,
  getChampions,
  getTop,
  updateChampion,
  addChampion,
  deleteChampion,
};
