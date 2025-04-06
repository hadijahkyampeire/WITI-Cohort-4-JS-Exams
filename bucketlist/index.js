function addItem() {
  const input = document.getElementById("itemInput");
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.className = "delete";
  btn.onclick = () => li.remove();

  li.appendChild(document.createTextNode(" "));
  li.appendChild(btn);

  document.getElementById("list").appendChild(li);
  input.value = "";
}
