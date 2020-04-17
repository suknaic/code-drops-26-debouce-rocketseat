// escreva seu codigo aqui

const filterUsers = async (name) =>
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`, {
    mode: "cors",
  }).then((res) => res.json());

function debounceEvent(fn, wait = 1000) {
  let time = null;
  console.log("run debouce");
  // closure - padrao de projeto
  return function () {
    clearTimeout(time);
    time = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

function handleKeyUp(event) {
  filterUsers(event.target.value).then((users) =>
    console.log(users.map((user) => user.name))
  );
}

document
  .querySelector("input")
  .addEventListener("keyup", debounceEvent(handleKeyUp, 300));
