"https://code.jquery.com/jquery-3.5.1.js"
"https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"
"https://cdn.datatables.net/1.13.1/js/dataTables.bootstrap5.min.js"
fetch('https://doc-back.onrender.com/patients')
.then(res=>res.json())
.then(data=>{
    console.log('data',data);

    displayProducts(data);
})

async function displayProducts(patient) {
let html = '';
await patient.forEach((patient, index, array) => {
    html += '<tr>';
    html += `
            <td>${patient.name}</td>
            <td>${patient.weight}</td>
            <td>${patient.gender}</td>
            <td>${patient.age}</td>
            <td>${patient.disease}</td>
            <td>Dr. ${patient.doctor.name}
                <td>${patient.doctor.specialization}</td>
            </td>`;
    html += '</tr>';
})
document.querySelector('tbody').innerHTML = await html;
// 
$(document).ready(function () {
    $('#example').DataTable();
});
}
