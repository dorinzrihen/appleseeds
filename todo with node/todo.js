let toDo = {
  undone: [
    { id: "2", task: "test2" },
    { id: "3", task: "test2" },
  ],
  done: [{ id: "1", task: "test" }],
};

function randomNumber() {
  const myRandom = Math.floor(Math.random() * 999) + 10;
  return myRandom;
}

function checkIfId(item) {
  return isNaN(item) ? false : true;
}

function addItem(item) {
  toDo.undone.push({ id: randomNumber(), task: item });
}

function removeFromApp(item, option) {
  for (const i in toDo) {
    for (let index = 0; index < toDo[i].length; index++) {
      if (item == toDo[i][index][option]) {
        const deletedItem = toDo[i].splice(index, 1);
        return deletedItem;
      }
    }
  }
}

function deleteItem(item) {
  if (checkIfId(item)) {
    removeFromApp(item, "id");
  } else {
    removeFromApp(item, "task");
  }
}

function markAsDone(item) {
  let savedItem = {};
  if (checkIfId(item)) {
    savedItem = removeFromApp(item, "id");
  } else {
    savedItem = removeFromApp(item, "task");
  }
  toDo.done.push(...savedItem);
}

function unmarkAsDone(item) {
    let savedItem = {};
    if (checkIfId(item)) {
      savedItem = removeFromApp(item, "id");
    } else {
      savedItem = removeFromApp(item, "task");
    }
    toDo.undone.push(...savedItem);
}

function listStatus() {
  const listStatus = [];
  for (const i in toDo) {
    listStatus.push(`### ${i} ###`);
    for (let index = 0; index < toDo[i].length; index++) {
      listStatus.push(`id:${toDo[i][index].id} task:${toDo[i][index].task}`);
    }
  }
  // Done items should be at the bottom of the list.
  return listStatus;
}

function main() {
  addItem("go to the vet");
  console.log(listStatus());
  deleteItem("go to the vet");
  console.log(listStatus());
  markAsDone("2");
  console.log(listStatus());
  unmarkAsDone("2");
  console.log(listStatus());
}

main();
