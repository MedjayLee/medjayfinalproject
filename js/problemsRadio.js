let radioCheck1 = document.querySelector("#problemsRadio1")
let radioCheck1Ul = document.querySelector(".pr-1")
let radioCheck2 = document.querySelector("#problemsRadio2")
let radioCheck2Ul = document.querySelector(".pr-2")
const problemsRadios = document.querySelectorAll(".problemsRadio")

problemsRadios.forEach((problemsRadio) => {
    if (radioCheck1.hasAttribute("checked")) {
        radioCheck1Ul.classList.remove("d-none")
        radioCheck2Ul.classList.add("d-none")
    }
  });
  