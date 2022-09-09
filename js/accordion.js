const accordionTitles = document.querySelectorAll('[data-name="accordion-title"]')
console.log(accordionTitles);

accordionTitles.forEach(accordionTitle => accordionTitle.addEventListener('click', openAccordion))

function openAccordion(event) {
    console.log('ban');
    hideAll(event.target);
    this.classList.toggle("active-acc");
    const closestHiddenLi = event.target.nextElementSibling;;
    closestHiddenLi.classList.toggle("d-none");
};

function hideAll(currentHeader) {
    accordionTitles.forEach(header => {
        if (header !== currentHeader) {
            const closestHiddenLi = header.nextElementSibling;
            closestHiddenLi.classList.add('d-none');
            header.classList.remove("active-acc");
        }
    })
}
