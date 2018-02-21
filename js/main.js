function validateForm() {
    var medicineName = document.getElementById('mediName').value;
    var medicinePrice=document.getElementsByClassName('mediPrice').value;
    var medicineQty=document.getElementsByClassName('mediQty').value;
    var placeofPosition=document.getElementsByClassName('placeOfTablet').value;
    var medicineSymptoms=document.getElementsByClassName('mediSymptoms').value;
    alert(medicineName + medicinePrice + medicineQty +medicineSymptoms + placeofPosition);

}

function medicineType(){
    var x = document.getElementById("mediType").value;
    // document.getElementById("demo").innerHTML = "You selected: " + x;
    if(x==="Tablet"){
        document.getElementsByClassName("countOfTablet").style.display = "block";

        }

    if(x==="Syrup"){
        document.getElementsByClassName("quantityOfsyrub").style.display = "block";

    }


}

