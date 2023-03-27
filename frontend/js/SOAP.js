function getSOAP() {
  removeAll();
  addElements(["1", "2"], ["3", "4"], ["5", "6"], ["7", "8"]);

  // ajax
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.open("GET", `./php/adminMedSelect.php`, false);
  xmlhttp.send(null);
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    result = JSON.parse(xmlhttp.responseText);
  }
}


function getICD() {
  let active = getActive();
  if (isArrayEmpty(active)) {
    Swal.fire({
      title: "Error!",
      text: "The SOAP Note is empty!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }
  icd_list.innerHTML = "";
  let test = ["icd 1", "icd 2", "icd 3", "icd 4", "icd 5"];
  test.forEach((element) => {
    let icd = document.createElement("li");
    icd.innerText = element;
    icd_list.appendChild(icd);
  });
}

function isArrayEmpty(arr) {
  if (Array.isArray(arr) && arr.length) {
    return arr.every((subArr) => Array.isArray(subArr) && !subArr.length);
  }
  return true;
}
