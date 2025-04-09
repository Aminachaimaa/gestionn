document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("serviceSelect");
    const formLinks = document.querySelectorAll(".form-link");
    const formFrames = document.querySelectorAll(".form-frame");

    serviceSelect.addEventListener("change", function () {
        const selectedService = serviceSelect.value;

        document.querySelectorAll(".service-forms").forEach(section => {
            section.style.display = "none";
        });

        if (selectedService) {
            document.getElementById(selectedService + "-forms").style.display = "block";
        }
    });

    formLinks.forEach(link => {
        link.addEventListener("click", function () {
            const targetFrame = document.getElementById(this.dataset.target);
            formFrames.forEach(frame => frame.style.display = "none");
            targetFrame.style.display = "block";
        });
    });
});

// ✅ الآن الدوال متاحة للـ HTML
function addTrainee() {
    let name = document.getElementById("name").value;
    let institution = document.getElementById("institution").value;
    let date = document.getElementById("date").value;

    if (name && institution && date) {
        let traineeList = document.getElementById("traineeList");

        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${institution}</td>
            <td>${date}</td>
            <td><button class="delete-btn" onclick="deleteTrainee(this)">❌</button></td>
        `;

        traineeList.appendChild(row);

        document.getElementById("successMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
        }, 2000);

        document.getElementById("name").value = "";
        document.getElementById("institution").value = "Fabricon Biomedical";
        document.getElementById("date").value = "";
    }
}

function deleteTrainee(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
