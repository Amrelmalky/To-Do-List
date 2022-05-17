//===================================== adding task ==================================================

//! Selectors
const button = document.querySelector("button");
const container = document.getElementById("container");
const form = document.querySelector("form");
const input = document.querySelector("input");

// ! add event submit to form
form.addEventListener("submit", (eo) => {
  // !stop default setting
  eo.preventDefault();

  //! create task div using literal template (``)
  const task = `
<div class="task">
   <span class="icon-star icon"></span>
   <p class="task-text"> ${input.value} </p>
<div> 
    <span class="icon-trash icon"></span>
    <span class="icon-angry2 icon"></span>
</div>
`;
  //! adding task in container
  container.innerHTML += task;
  //! make input.value empty
  input.value = "";
});

// ================================= delete task ======================================

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.style.display = "none";

    const heart = `<span class="icon-heart icon"></span>`;

    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");

    eo.target.parentElement.innerHTML += heart;
  } else if (eo.target.className == "icon-heart icon") {
    eo.target.style.display = "none";
    const angry = `<span class="icon-angry2 icon"></span>`;

    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");
    eo.target.parentElement.innerHTML += angry;
  } else if (eo.target.className == "icon-star icon") {
    eo.target.classList.add("orange");
    container.prepend(eo.target.parentElement);
  } else if (eo.target.className == "icon-star icon orange") {
    eo.target.classList.remove("orange");
  }
});
