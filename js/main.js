var medicineName,medicinePrice,medicineQty,placeofPosition,medicineSymptoms;

medicineName = document.querySelector('#mediName');
medicinePrice = document.querySelector('#mediPrice');
medicineQty = document.querySelector('#mediQty');
placeofPosition = document.querySelector('#placeOfTablet');
medicineSymptoms = document.querySelector('#mediSymptoms');

function validateForm() {
    alert(medicineName.value + medicinePrice.value + medicineQty.value +medicineSymptoms.value + placeofPosition.value);

}

function medicineType(){
    var x = document.getElementById("mediType").value;

    if( x === "Tablet" ){

        document.querySelector(".countOfTablet").style.display="block";
        document.querySelector(".quantityOfsyrub").style.display="none";
        }

    if(x==="Syrup"){
        document.querySelector(".quantityOfsyrub").style.display="block";
        document.querySelector(".countOfTablet").style.display="none";
    }


}

