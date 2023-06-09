let all = [];

function addElements(sub, obj, ass, treat) {
  // subjective
  sub.forEach((element) => {
    const button = document.createElement("button");
    button.classList.add(
      "SOAPBtn",
      "btn",
      "btn-outline-secondary",
      "btn-sm",
      "me-1",
      "mb-2"
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
      "me-1",
      "mb-2"
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
      "me-1",
      "mb-2"
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
      "me-1",
      "mb-2"
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
  icd_list.innerHTML = "";
}

function getActive() {
  let sub_arr_active = [];
  let obj_arr_active = [];
  let ass_arr_active = [];
  let treat_arr_active = [];

  const sActive = subjective.querySelectorAll(".SOAPBtn");
  sActive.forEach((element) => {
    sub_arr_active.push(element.innerText);
  });

  const oActive = objective.querySelectorAll(".SOAPBtn");
  oActive.forEach((element) => {
    obj_arr_active.push(element.innerText);
  });

  const aActive = assessment.querySelectorAll(".SOAPBtn");
  aActive.forEach((element) => {
    ass_arr_active.push(element.innerText);
  });

  const tActive = treatmentPlan.querySelectorAll(".SOAPBtn");
  tActive.forEach((element) => {
    treat_arr_active.push(element.innerText);
  });

  let result = [];
  result.push(sub_arr_active, obj_arr_active, ass_arr_active, treat_arr_active);

  return result;
}

function getSOAPModal() {
  myModal.show();
}
