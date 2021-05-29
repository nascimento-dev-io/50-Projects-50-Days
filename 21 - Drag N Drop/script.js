// **************** Aprendendo a manipular o drag'n drop **********************

// Torna um elemento draggable no HTML com o atributo draggable = "true"

// adicionar o event dragStart ao elemento draggable

const itemDraggable = document.querySelector(".item-draggable");
itemDraggable.addEventListener("dragstart", dragStartHandler);
itemDraggable.addEventListener("drag", dragHandler);
itemDraggable.addEventListener("dragend", dragEndHandler);

// dragstart - ocorre quando o usuário começa a arrastar um elemento
function dragStartHandler(event) {
  // console.log("iniciado o arraste do elemento");

  // Adicionar o Id do elemento ao objeto de transferência de dados, pode adicionar outro itens ao elemento, conforme necessidade
  event.dataTransfer.setData("text/plain", event.target.id);

  // adicionando uma imagem que pode ser personalizada no arraste
  // const img = new Image();
  // img.src = "./.github/perfil.jpg";
  // event.dataTransfer.setDragImage(img, 10, 10);

  // determinando o tipo de efeito de arraste, podendo ser copy, move e link
  event.dataTransfer.dropEffect = "move";
}

// drag - ocorre quando um elemento está sendo arrastado
function dragHandler(event) {
  // console.log("Elemento sendo arrastado ..");
}

// dragend - ocorre quando o usuário termina de arrastar o elemento
function dragEndHandler(event) {
  // console.log("Elemento solto no alvo");
}

// ************************ Dropzones *************************

// Manipulando eventos das drop zone
const dropzones = document.querySelectorAll("[data-dropzone]");

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("drop", dropHandler);
  dropzone.addEventListener("dragover", dragOverHandler);
  dropzone.addEventListener("dragleave", dragLeaveHandler);
});

//******************

// ondrop - ocorre quando o elemento arrastado é solto no destino de soltar
function dropHandler(event) {
  event.preventDefault();
  // console.log("Soltando o item arrastado na dropzone");

  // pega o Id do alvo e adiciona o elemento que foi movido para o DOM do alvo
  const data = event.dataTransfer.getData("text");

  event.target.appendChild(document.getElementById(data));
  event.target.classList.remove("dragzone-active");
}

// ondragover - ocorre quando o elemento arrastado está sobre o destino de soltar
function dragOverHandler(event) {
  event.preventDefault();
  // console.log("item sendo arrastado na dropzone");

  event.target.classList.add("dragzone-active");

  // Define o dropEffect para ser do tipo move
  event.dataTransfer.dropEffect = "move";
}

// ondragenter - ocorre quando o elemento arrastado entra no destino de soltar
// function dragEnterHandler(event) {
//   event.preventDefault();
//   console.log("Elemento entrou na dropzone");

//   event.target.classList.add("dragzone-active");
// }

// dragleave - ocorre quando o elemento arrastado deixa o destino de soltar
function dragLeaveHandler(event) {
  event.preventDefault();
  // console.log("Elemento saiu da dropzone");

  event.target.classList.remove("dragzone-active");
}

function dragEnterHandler(event) {
  // console.log("elemento entrou na area de drop");
}
