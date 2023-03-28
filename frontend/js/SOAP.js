function getSOAP() {
  let formMSG = document.getElementById("soapInput").value;

  // ajax
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.open("GET", `../backend/generateSOAP.php?msg=${formMSG}`, false);
  xmlhttp.send(null);

  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    let result = JSON.parse(xmlhttp.responseText);
    removeAll();
    if (isArrayEmpty(result)) {
      addElements(result["S"], result["O"], result["A"], result["P"]);
      Swal.fire({
        title: "Done!",
        text: "Here is your SOAP Note!",
        icon: "success",
        confirmButtonText: "OK",
      });
      return;
    }
  }
  Swal.fire({
    title: "Error!",
    text: "The SOAP Note couldn't be generated!",
    icon: "error",
    confirmButtonText: "OK",
  });
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

  // ajax
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.open("GET", `../backend/generateICD.php?msg=${active}`, false);
  xmlhttp.send(null);

  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    let result = JSON.parse(xmlhttp.responseText);
    icd_list.innerHTML = "";

    result.forEach((element) => {
      let icd = document.createElement("li");
      icd.innerText = element["code"] + ": " + element["explanation"];
      icd_list.appendChild(icd);
    });

    return;
  }

  Swal.fire({
    title: "Error!",
    text: "The ICD-10 couldn't be generated: ",
    icon: "error",
    confirmButtonText: "OK",
  });
}

// check if array of array is empty 100%
function isArrayEmpty(arr) {
  if (Array.isArray(arr) && arr.length) {
    return arr.every((subArr) => Array.isArray(subArr) && !subArr.length);
  }
  return true;
}
