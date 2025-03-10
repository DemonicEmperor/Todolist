const addtask = () => {
  let p1 = document.getElementById("tasks");
  let p2 = document.createElement("tr");
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");
  let s = document.createElement("select");
  let delbtn = document.createElement("button");
  if (document.getElementById("task-name").value == "") {
    alert("bitch fill up the task name");
    document.getElementById("task-name").value = "";
    document.getElementById("task-date").value = "";
    return;
  } else if (document.getElementById("task-date").value == "") {
    alert("laude date tera baap fill kare kya....");
    document.getElementById("task-name").value = "";
    document.getElementById("task-date").value = "";

    return;
  }
  s.innerHTML = `<option value="Not Started">Not Started</option>
              <option value="Progress">Progress</option>
              <option value="Completed">Completed</option>`;
  delbtn.innerText = "\u274C";
  delbtn.style.border = "none";
  delbtn.style.backgroundColor = "transparent";
  delbtn.style.color = "black";
  c1.innerText = document.getElementById("task-name").value;
  c2.innerText = document.getElementById("task-date").value;
  c3.appendChild(s);
  c4.appendChild(delbtn);
  p2.appendChild(c1);
  p2.appendChild(c2);
  p2.appendChild(c3);
  p2.appendChild(c4);
  p1.appendChild(p2);
  delbtn.onclick = () => {
    p2.remove();
  };
  p2.style.backgroundColor = "#FFB3B3";
  s.addEventListener("change", function () {
    let selected = s.value;
    switch (selected) {
      case "Not Started":
        p2.style.backgroundColor = "#FFB3B3";
        break;
      case "Progress":
        p2.style.backgroundColor = "#FFEB99";
        break;
      case "Completed":
        p2.style.background = "#B5EAD7";
        break;
    }
  });

  document.getElementById("task-name").value = "";
  document.getElementById("task-date").value = "";
};
