// cards
const subjective = document.querySelector("#subjective");
const objective = document.querySelector("#objective");
const assessment = document.querySelector("#assessment");
const treatmentPlan = document.querySelector("#treatmentPlan");
const subjectiveD = document.querySelector("#subjectiveD");
const objectiveD = document.querySelector("#objectiveD");
const assessmentD = document.querySelector("#assessmentD");
const treatmentPlanD = document.querySelector("#treatmentPlanD");
const icd_list = document.getElementById("icd");
// modal
const myModal = new bootstrap.Modal(document.getElementById("generateSOAP"));

// move cards
function move(elem) {
  switch (elem.parentNode.id) {
    case "subjective":
      subjectiveD.appendChild(elem);
      break;
    case "objective":
      objectiveD.appendChild(elem);
      break;
    case "assessment":
      assessmentD.appendChild(elem);
      break;
    case "treatmentPlan":
      treatmentPlanD.appendChild(elem);
      break;
    case "subjectiveD":
      subjective.appendChild(elem);
      break;
    case "objectiveD":
      objective.appendChild(elem);
      break;
    case "assessmentD":
      assessment.appendChild(elem);
      break;
    case "treatmentPlanD":
      treatmentPlan.appendChild(elem);
      break;
  }
}
