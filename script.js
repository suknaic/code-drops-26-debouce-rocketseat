// escreva seu codigo aqui

const filterUsers = async (name) =>
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`, {
    mode: "cors",
  }).then((res) => res.json());

let time = null;

function handleKeyUp(event) {
  clearTimeout(time);

  time = setTimeout(() => {
    filterUsers(event.target.value).then((users) =>
      console.log(users.map((user) => user.name))
    );
  }, 1000);
}

document.querySelector("input").addEventListener("keyup", handleKeyUp);
