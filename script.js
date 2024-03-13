function openPopup() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popupContainer");
    overlay.style.display = "block";
    popup.style.display = "block";
    body.style.overflow = "hidden";
    setTimeout(function() {
        overlay.classList.add("active");
        popup.classList.add("active");
    }, 10);
}

function closePopup() {
    var overlay = document.getElementById("overlay");
    var calc = document.getElementById("calcContainer");
    var popup = document.getElementById("popupContainer");
    var calcChoise = document.getElementById("calcChoiseContainer");
    var sk_renessans = document.getElementById("sk_renessansContainer");
    calcChoise.classList.remove("active");
    sk_renessans.classList.remove("active");
    overlay.classList.remove("active");
    popup.classList.remove("active");
    calc.classList.remove("active");
    body.style.overflow = "visible";
    setTimeout(function() {
        overlay.style.display = "none";
        popup.style.display = "none";
        calc.style.display = "none";
        calcChoise.style.display = "none";
        sk_renessans.style.display = "none";
    }, 300);
}

function closeCalc() {
    var calc = document.getElementById("calcContainer");
    calc.classList.remove("active");
    setTimeout(function() {
        calc.style.display = "none";
    }, 300);
}

function closeCalcChoise() {
    var calcChoise = document.getElementById("calcChoiseContainer");
    var sk_renessans = document.getElementById("sk_renessansContainer");
    calcChoise.classList.remove("active");
    sk_renessans.classList.remove("active");
    setTimeout(function() {
        calcChoise.style.display = "none";
        sk_renessans.style.display = "none";
    }, 300);
}

function openCalcChoise() {
    var overlay = document.getElementById("overlay");
    var calc = document.getElementById("calcContainer");
    var calcChoise = document.getElementById("calcChoiseContainer");
    if(calc.classList.contains("active"))
       closeCalc();
    overlay.style.display = "block";
    calcChoise.style.display = "block";
    calc.classList.remove("active");
    body.style.overflow = "hidden";
    setTimeout(function() {
        calc.style.display = "none";
        overlay.classList.add("active");
        calcChoise.classList.add("active");
    }, 10);
}
function opensk_renessans() {
    var sk_renessans = document.getElementById("sk_renessansContainer");
    var calcChoise = document.getElementById("calcChoiseContainer");
    calcChoise.style.display = "none";
    sk_renessans.style.display = "block";
    setTimeout(function() {
        sk_renessans.classList.add("active");
    }, 10);
}

function openCalc() {
    var overlay = document.getElementById("overlay");
    var calc = document.getElementById("calcContainer");
    var calcChoise = document.getElementById("calcChoiseContainer");
    if(calcChoise.classList.contains("active"))
       closeCalcChoise();
    overlay.style.display = "block";
    calc.style.display = "block";
    body.style.overflow = "hidden";
    setTimeout(function() {
        overlay.classList.add("active");
        calc.classList.add("active");
    }, 10);
}

function navigate(url) {
    window.location.href = url;
}

/*Calculator*/
var Tb = 1
var KT = 1
var KBM = 1
var KO = 1
var KM = 1
var KP_KS = 1
var KVS = 1
function handleCategoryChange() {
    var categorySelect = document.getElementById("category");
    var taxiCheckbox = document.getElementById("taxiCheckbox");
    var maxWeightCheckbox = document.getElementById("maxWeightCheckbox");

    // Скрыть все элементы по умолчанию
    taxiCheckbox.classList.add("hidden");
    maxWeightCheckbox.classList.add("hidden");

    // Показать соответствующий элемент в зависимости от выбора категории
    if (categorySelect.value === "2") {
        taxiCheckbox.classList.remove("hidden");
    } else if (categorySelect.value === "3") {
        maxWeightCheckbox.classList.remove("hidden");
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------
const categoryValues = ["", 2536, 5722, 9934, 8526, 6823, 7535, 15756, 14957];
const entityValues = ["", 2.32, 1.97];
const cityValues = ["", 1.16, 1.08, 1.24, 1.64, 1];
const KBMValues = ["", 3.92, 2.94, 2.25, 1.76, 1.17, 1, 0.91, 0.83, 0.78, 0.74, 0.68, 0.63, 0.57, 0.52, 0.46];
const KOValues = ["", 1];
const TimeValues = ["", 0.2, 0.3, 0.4, 0.5, 0.6, 0.65, 0.7, 0.8, 0.9, 0.95, 1];
const KMValues = ["", 0.6, 1, 1.1, 1.2, 1.4, 1.6];
const KVSValues = [ [2.27, 1.92, 1.84, 1.65, 1.62, 0, 0, 0],
                    [1.88, 1.72, 1.71, 1.13, 1.10, 1.09, 0, 0],
                    [1.72, 1.60, 1.54, 1.09, 1.08, 1.07, 1.02, 0],
                    [1.56, 1.50, 1.48, 1.05, 1.04, 1.01, 0.97, 0.95],
                    [1.54, 1.47, 1.46, 1.00, 0.97, 0.95, 0.94, 0.93],
                    [1.50, 1.44, 1.43, 0.96, 0.95, 0.94, 0.93, 0.91],
                    [1.46, 1.40, 1.39, 0.93, 0.92, 0.91, 0.90, 0.86],
                    [1.43, 1.36, 1.35, 0.91, 0.90, 0.89, 0.88, 0.83] ]
//--------------------------------------------------------------------------------------------------------------------------------------
var tax = document.getElementById("taxi");
tax.addEventListener("change", CategoryChange)
var mass = document.getElementById("maxWeight");
mass.addEventListener("change", CategoryChange)
var entitySelect = document.getElementById("entity");
entitySelect.addEventListener("change", CategoryChange)
entitySelect.addEventListener("change", KOChange)
var follw = document.getElementById("followToRegistration");
follw.addEventListener("change", CategoryChange)
var reglok = document.getElementById("registrationLocation");
reglok.addEventListener("change", CategoryChange)
//--------------------------------------------------------------------------------------------------------------------------------------
var categoryS = document.getElementById("category");
var cityS = document.getElementById("city");
var KBMS = document.getElementById("bonusMalusClass");
var KOS = document.getElementById("limitedPersons");
var KMS = document.getElementById("enginePower");
var TimeS = document.getElementById("insuranceDuration");
var AgeS = document.getElementById("age");
var ExpS = document.getElementById("experience");
var ageS = document.getElementById("age");
var maxWeightSelect = document.getElementById("maxWeight");
//--------------------------------------------------------------------------------------------------------------------------------------
categoryS.addEventListener("change", CategoryChange);
cityS.addEventListener("change", CityChange);
KBMS.addEventListener("change", KBMChange);
KOS.addEventListener("change", KOChange);
KMS.addEventListener("change", KMChange);
TimeS.addEventListener("change", TimeChange);
AgeS.addEventListener("change", KVSChange);
ExpS.addEventListener("change", KVSChange);
//--------------------------------------------------------------------------------------------------------------------------------------
function CategoryChange() {
    // Получить выбранное значение Категории
    var selectedCategory = categoryS.value;
    if (selectedCategory === "2"){
        if (tax.checked){
            Tb = selectedCategory === "" ? "" : categoryValues[parseInt(selectedCategory)+5];
        }else if (entitySelect.value === "2"){
            Tb = selectedCategory === "" ? "" : categoryValues[parseInt(selectedCategory)+4];
        }else{
            Tb = selectedCategory === "" ? "" : categoryValues[parseInt(selectedCategory)];
        }
    }else if (selectedCategory === "3"){
        if (mass.value === "18"){
            Tb = selectedCategory === "" ? "" : categoryValues[parseInt(selectedCategory)+5];
        }else{
            Tb = selectedCategory === "" ? "" : categoryValues[parseInt(selectedCategory)];
        }
    }else{
        Tb = selectedCategory === "" ? "" : categoryValues[parseInt(selectedCategory)];
    }
    Total(Tb, KT, KBM, KVS, KO, KM, KP_KS)
}
//--------------------------------------------------------------------------------------------------------------------------------------
function CityChange() {
    // Получить выбранное значение Города
    var selectedCity = cityS.value;
    KT = selectedCity === "" ? "" : cityValues[parseInt(selectedCity)];
    Total(Tb, KT, KBM, KVS, KO, KM, KP_KS)
}
//--------------------------------------------------------------------------------------------------------------------------------------
function KBMChange() {
    // Получить выбранное значение КБМ
    var selectedKBM = KBMS.value;
    KBM = selectedKBM === "" ? "" : KBMValues[parseInt(selectedKBM)];
    Total(Tb, KT, KBM, KVS, KO, KM, KP_KS)
}
//--------------------------------------------------------------------------------------------------------------------------------------
function KOChange() {
    // Получить выбранное значение количества лиц
    var selectedKO = KOS.checked;
    if (selectedKO === false){
        KO = selectedKO === "" ? "" : entityValues[parseInt(entitySelect.value)];
    }else{
        KO = selectedKO === "" ? "" : KOValues[1];
    }
    Total(Tb, KT, KBM, KVS, KO, KM, KP_KS)
}
//--------------------------------------------------------------------------------------------------------------------------------------
function KMChange() {
    // Получить выбранное значение Мощности
    var selectedKM = KMS.value;
    KM = selectedKM === "" ? "" : KMValues[parseInt(selectedKM)];
    Total(Tb, KT, KBM, KVS, KO, KM, KP_KS)
}
//--------------------------------------------------------------------------------------------------------------------------------------
function TimeChange() {
    // Получить выбранное значение срока страхования
    var selectedTime = TimeS.value;
    KP_KS = selectedTime === "" ? "" : TimeValues[parseInt(selectedTime)];
    Total(Tb, KT, KBM, KVS, KO, KM, KP_KS)
}
//--------------------------------------------------------------------------------------------------------------------------------------
function KVSChange() {
    // Получить выбранное значение возраст/стаж
    var selectedAge = AgeS.value;
    var selectedExp = ExpS.value;
    if (entitySelect.value === "2"){
        KVS = KVSValues[parseInt(selectedAge)][parseInt(selectedExp)]*1.8;
    }else{
        KVS = KVSValues[parseInt(selectedAge)][parseInt(selectedExp)];
    }
    Total(Tb, KT, KBM, KVS, KO, KM, KP_KS)
}
//--------------------------------------------------------------------------------------------------------------------------------------
function Total(Tb, KT, KBM, KVS, KO, KM, KP_KS){
    // Итоговый подсчёт
    var tot = 1
    if (categoryS.value === "2"){
        if (reglok.value === "ru" && !follw.checked){
            tot = Tb * KT * KBM * KVS * KO * KM * KP_KS;
        }else if (reglok.value === "ru" && follw.checked){
            tot = Tb * KBM * KVS * KO * KM * KP_KS;
        }else{
            tot = Tb * KT * KBM * KVS * KO * KM * KP_KS;
        }
    }else{
        if (reglok.value === "ru" && !follw.checked){
            tot = Tb * KT * KBM * KVS * KO * KP_KS;
        }else if (reglok.value === "ru" && follw.checked){
            tot = Tb * KBM * KVS * KO * KP_KS;
        }else{
            tot = Tb * KT * KBM * KVS * KO * KP_KS;
        }
    }
    document.getElementById('total').innerText = tot.toFixed(2);
    //console.log(tot,Tb, KT, KBM, KVS, KO, KM, KP_KS)
    //console.log(follw.checked)
}
