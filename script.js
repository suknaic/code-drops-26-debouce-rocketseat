// escreva seu codigo aqui

const filterUsers = async (name) =>
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`, {
    mode: "cors",
  }).then((res) => res.json());

function debounceEvent() {
  let time = null;
  // closure - padrao de projeto
  return function (fn, wait = 1000) {
    clearTimeout(time);

    time = setTimeout(() => {
      fn();
    }, wait);
  };
}

const debouce = debounceEvent();

function handleKeyUp(event) {
  debouce(() => {
    filterUsers(event.target.value).then((users) =>
      console.log(users.map((user) => user.name))
    );
  }, 2000);
}

document.querySelector("input").addEventListener("keyup", handleKeyUp);
