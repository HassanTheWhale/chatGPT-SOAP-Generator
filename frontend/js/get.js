let all = [];
let sub_arr_active = [];
let obj_arr_active = [];
let ass_arr_active = [];
let treat_arr_active = [];

function addElements(sub, obj, ass, treat) {
  // subjective
  sub.forEach((element) => {
    const button = document.createElement("button");
    button.classList.add(
      "SOAPBtn",
      "btn",
      "btn-outline-secondary",
      "btn-sm",
      "me-1"
    );
    button.textContent = element;
    button.onclick = function () {
      move(button);
    };
    subjective.appendChild(button);
    all.push(button);
  });
  //objective
  obj.forEach((element) => {
    const button = document.createElement("button");
    button.classList.add(
      "SOAPBtn",
      "btn",
      "btn-outline-danger",
      "btn-sm",
      "me-1"
    );
    button.textContent = element;
    button.onclick = function () {
      move(button);
    };
    objective.appendChild(button);
    all.push(button);
  });
  //assessment
  ass.forEach((element) => {
    const button = document.createElement("button");
    button.classList.add(
      "SOAPBtn",
      "btn",
      "btn-outline-info",
      "btn-sm",
      "me-1"
    );
    button.textContent = element;
    button.onclick = function () {
      move(button);
    };
    assessment.appendChild(button);
    all.push(button);
  });
  //treatment plan
  treat.forEach((element) => {
    const button = document.createElement("button");
    button.classList.add(
      "SOAPBtn",
      "btn",
      "btn-outline-success",
      "btn-sm",
      "me-1"
    );
    button.textContent = element;
    button.onclick = function () {
      move(button);
    };
    treatmentPlan.appendChild(button);
    all.push(button);
  });
}

function removeAll() {
  all.forEach((element) => {
    element.remove();
  });
}

function getActive() {
  sub_arr_active.length = 0;
  const sActive = subjective.querySelectorAll(".SOAPBtn");
  sActive.forEach((element) => {
    sub_arr_active.push(element.innerText);
  });

  obj_arr_active.length = 0;
  const oActive = objective.querySelectorAll(".SOAPBtn");
  oActive.forEach((element) => {
    obj_arr_active.push(element.innerText);
  });

  ass_arr_active.length = 0;
  const aActive = assessment.querySelectorAll(".SOAPBtn");
  aActive.forEach((element) => {
    ass_arr_active.push(element.innerText);
  });

  treat_arr_active.length = 0;
  const tActive = treatmentPlan.querySelectorAll(".SOAPBtn");
  tActive.forEach((element) => {
    treat_arr_active.push(element.innerText);
  });

  console.log(sub_arr_active);
  console.log(obj_arr_active);
  console.log(ass_arr_active);
  console.log(treat_arr_active);
}
