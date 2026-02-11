let stats_abBtn = document.getElementById("statsABbutton");
let stats_rbBtn = document.getElementById("statsRBbutton");
let stats_topBtn = document.getElementById("stats_top_button");
let stats_baseBtn = document.getElementById("stats_base_button");

let stats_kmh = document.getElementById("stats_kmh");
let stats_engine = document.getElementById("stats_engine");
let stats_total = document.getElementById("stats_total");

let stats_kmh_values = [35, 38]; // РБ, АБ
let stats_engine_values = [500, 442, 795, 646]; // РБ-эталон, РБ-базовый, АБ-эталон, АБ-базовый
let stats_total_values = [13.2, 11.7, 21, 17.1];// РБ-эталон, РБ-базовый, АБ-эталон, АБ-базовый

let stats_modeFlag = 0;      // 0 - РБ; 1 - АБ
let stats_conditionFlag = 0; // 0 - Эталон; 1 - базовый

function changeStatValues() {
    if(!stats_conditionFlag)
    {
        if(!stats_modeFlag)
        {
            stats_engine.textContent = stats_engine_values[0]+" л.с.";
            stats_total.textContent = stats_total_values[0]+" л.с./т";
        }
        else
        {
            stats_engine.textContent = stats_engine_values[2]+" л.с.";
            stats_total.textContent = stats_total_values[2]+" л.с./т";
        }
    }
    else
    {
        if(!stats_modeFlag)
        {
            stats_engine.textContent = stats_engine_values[1]+" л.с.";
            stats_total.textContent = stats_total_values[1]+" л.с./т";
        }
        else
        {
            stats_engine.textContent = stats_engine_values[3]+" л.с.";
            stats_total.textContent = stats_total_values[3]+" л.с./т";
        }
    }
}

function rbStatsButton() {
    if(stats_modeFlag)
    {
        stats_modeFlag = 0;
        stats_abBtn.classList.remove("button-active");
        stats_rbBtn.classList.add("button-active");
        stats_kmh.textContent = stats_kmh_values[0]+" км/ч";
        changeStatValues();
        stats_kmh.style.color = "red";
        stats_engine.style.color = "red";
        stats_total.style.color = "red";
    }
}

function abStatsButton() {
    if(!stats_modeFlag)
    {
        stats_modeFlag = 1;
        stats_abBtn.classList.add("button-active");
        stats_rbBtn.classList.remove("button-active");
        stats_kmh.textContent = stats_kmh_values[1]+" км/ч";
        changeStatValues();
        stats_kmh.style.color = "green";
        stats_engine.style.color = "green";
        stats_total.style.color = "green";
    }
}

function topStatsButton() {
    if(stats_conditionFlag)
    {
        stats_conditionFlag = 0;
        stats_baseBtn.classList.remove("button-active");
        stats_topBtn.classList.add("button-active");
        changeStatValues();
        stats_engine.style.color = "green";
        stats_total.style.color = "green";
    }
}

function baseStatsButton() {
    if(!stats_conditionFlag)
    {
        stats_conditionFlag = 1;
        stats_baseBtn.classList.add("button-active");
        stats_topBtn.classList.remove("button-active");
        changeStatValues();
        stats_engine.style.color = "red";
        stats_total.style.color = "red";
    }
}

//let wpnry_aceBtn = document.getElementById("wpnry_aceButton");
//let wpnry_lohiBtn = document.getElementById("wpnry_lohiButton");
let wpnry_abBtn = document.getElementById("wpnry_abButton");
let wpnry_rbBtn = document.getElementById("wpnry_rbButton");
let wpnry_topBtn = document.getElementById("wpnry_topButton");
let wpnry_baseBtn = document.getElementById("wpnry_baseButton");

let wpnry_reload = document.getElementById("wpnry_reload");
let wpnry_horizontal = document.getElementById("wpnry_horizontal");
let wpnry_vertical = document.getElementById("wpnry_vertical");

let wpnry_reload_values;
let wpnry_horizontal_values;
let wpnry_vertical_values;

let wpnry_crewFlag = 0;      // 0 - Асы; 1 - лохи
let wpnry_modeFlag = 0;      // 0 - РБ; 1 - АБ
let wpnry_conditionFlag = 0; // 0 - Эталон; 1 - базовый

function rbWpnryButton() {
    if(wpnry_modeFlag)
    {
        wpnry_abBtn.classList.remove("button-active");
        wpnry_modeFlag = 0;
        wpnry_rbBtn.classList.add("button-active");
        // wpnry_kmh.textContent = stats_kmh_values[0]+" км/ч";
        // changeStatValues();
        // wpnry_kmh.style.color = "red";
        // wpnry_engine.style.color = "red";
        // wpnry_total.style.color = "red";
    }
}

function abWpnryButton() {
    if(!wpnry_modeFlag)
    {
        wpnry_modeFlag = 1;
        wpnry_abBtn.classList.add("button-active");
        wpnry_rbBtn.classList.remove("button-active");
        //wpnry_kmh.textContent = stats_kmh_values[1]+" км/ч";
        //changeStatValues();
        //wpnry_kmh.style.color = "green";
        //wpnry_engine.style.color = "green";
    }
}

function topWpnryButton() {
    if(wpnry_conditionFlag)
    {
        wpnry_conditionFlag = 0;
        wpnry_baseBtn.classList.remove("button-active");
        wpnry_topBtn.classList.add("button-active");
        // changeStatValues();
        // wpnry_engine.style.color = "green";
        // wpnry_total.style.color = "green";
    }
}

function baseWpnryButton() {
    if(!wpnry_conditionFlag)
    {
        wpnry_conditionFlag = 1;
        wpnry_baseBtn.classList.add("button-active");
        wpnry_topBtn.classList.remove("button-active");
        //changeStatValues();
        //wpnry_engine.style.color = "red";
        //wpnry_total.style.color = "red";
    }
}
