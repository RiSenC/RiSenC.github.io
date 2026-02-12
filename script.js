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

let wpnry_aceBtn = document.getElementById("wpnry_aceButton");
let wpnry_lohiBtn = document.getElementById("wpnry_lohiButton");
let wpnry_abBtn = document.getElementById("wpnry_abButton");
let wpnry_rbBtn = document.getElementById("wpnry_rbButton");
let wpnry_topBtn = document.getElementById("wpnry_topButton");
let wpnry_baseBtn = document.getElementById("wpnry_baseButton");

let wpnry_reload_m3 = document.getElementById("wpnry_reload_m3");
let wpnry_horizontal_m3 = document.getElementById("wpnry_horizontal_m3");
let wpnry_vertical_m3 = document.getElementById("wpnry_vertical_m3");

let wpnry_reload_m3_values = [6.5, 5];
let wpnry_horizontal_m3_values = [[[24, 20.4], [38.4, 27.7]], [[16.8, 14.3], [26.9, 19.4]]];
let wpnry_vertical_m3_values = [[[4, 3.2], [10.4, 6.7]], [[2.8, 2.2], [7.3, 4.7]]];


let wpnry_crewFlag = 0;      // 0 - Асы; 1 - лохи   
let wpnry_modeFlag = 0;      // 0 - РБ; 1 - АБ
let wpnry_conditionFlag = 0; // 0 - Эталон; 1 - базовый

function changeWpnryValues() {
    if(!wpnry_crewFlag) 
    {
        wpnry_reload_m3.textContent = wpnry_reload_m3_values[1] + " с";
        if(!wpnry_modeFlag)
        {
            if(!wpnry_conditionFlag)
            {
                wpnry_horizontal_m3.textContent = wpnry_horizontal_m3_values[0][0][0] + " °/с";
                wpnry_vertical_m3.textContent = wpnry_vertical_m3_values[0][0][0] + " °/с";
            }
            else
            {
                wpnry_horizontal_m3.textContent = wpnry_horizontal_m3_values[0][0][1] + " °/с";
                wpnry_vertical_m3.textContent = wpnry_vertical_m3_values[0][0][1] + " °/с";
            }
        }
        else
        {
            if(!wpnry_conditionFlag)
            {
                wpnry_horizontal_m3.textContent = wpnry_horizontal_m3_values[0][1][0] + " °/с";
                wpnry_vertical_m3.textContent = wpnry_vertical_m3_values[0][1][0] + " °/с";
            }
            else
            {
                wpnry_horizontal_m3.textContent = wpnry_horizontal_m3_values[0][1][1] + " °/с";
                wpnry_vertical_m3.textContent = wpnry_vertical_m3_values[0][1][1] + " °/с";
            }
        }       
    }
    else
    {
        wpnry_reload_m3.textContent = wpnry_reload_m3_values[0] + " с";
        if(!wpnry_modeFlag)
        {
            if(!wpnry_conditionFlag)
            {
                wpnry_horizontal_m3.textContent = wpnry_horizontal_m3_values[1][0][0] + " °/с";
                wpnry_vertical_m3.textContent = wpnry_vertical_m3_values[1][0][0] + " °/с";
            }
            else
            {
                wpnry_horizontal_m3.textContent = wpnry_horizontal_m3_values[1][0][1] + " °/с";
                wpnry_vertical_m3.textContent = wpnry_vertical_m3_values[1][0][1] + " °/с";
            }
        }
        else
        {
            if(!wpnry_conditionFlag)
            {
                wpnry_horizontal_m3.textContent = wpnry_horizontal_m3_values[1][1][0]  + " °/с";
                wpnry_vertical_m3.textContent = wpnry_vertical_m3_values[1][1][0] + " °/с";
            }
            else
            {
                wpnry_horizontal_m3.textContent = wpnry_horizontal_m3_values[1][1][1] + " °/с";
                wpnry_vertical_m3.textContent = wpnry_vertical_m3_values[1][1][1] + " °/с";
            }
        }
    }
}

function aceWpnryButton() {
    if(wpnry_crewFlag)
    {
        wpnry_crewFlag = 0;
        wpnry_lohiBtn.classList.remove("button-active");
        wpnry_aceBtn.classList.add("button-active");
        changeWpnryValues();
        wpnry_reload_m3.style.color = "green";
        wpnry_horizontal_m3.style.color = "green";
        wpnry_vertical_m3.style.color = "green";
    }
}

function lohiWpnryButton() {
    if(!wpnry_crewFlag)
    {
        wpnry_crewFlag = 1;
        wpnry_lohiBtn.classList.add("button-active");
        wpnry_aceBtn.classList.remove("button-active");
        changeWpnryValues();
        wpnry_reload_m3.style.color = "red";
        wpnry_horizontal_m3.style.color = "red";
        wpnry_vertical_m3.style.color = "red";
    }
}

function rbWpnryButton() {
    if(wpnry_modeFlag)
    {
        wpnry_modeFlag = 0;
        wpnry_abBtn.classList.remove("button-active");
        wpnry_rbBtn.classList.add("button-active");
        changeWpnryValues();
        wpnry_horizontal_m3.style.color = "red";
        wpnry_vertical_m3.style.color = "red";
    }
}

function abWpnryButton() {
    if(!wpnry_modeFlag)
    {
        wpnry_modeFlag = 1;
        wpnry_abBtn.classList.add("button-active");
        wpnry_rbBtn.classList.remove("button-active");
        changeWpnryValues();
        wpnry_horizontal_m3.style.color = "green";
        wpnry_vertical_m3.style.color = "green";
    }
}

function topWpnryButton() {
    if(wpnry_conditionFlag)
    {
        wpnry_conditionFlag = 0;
        wpnry_baseBtn.classList.remove("button-active");
        wpnry_topBtn.classList.add("button-active");
        changeWpnryValues();
        wpnry_horizontal_m3.style.color = "green";
        wpnry_vertical_m3.style.color = "green";
    }
}

function baseWpnryButton() {
    if(!wpnry_conditionFlag)
    {
        wpnry_conditionFlag = 1;
        wpnry_baseBtn.classList.add("button-active");
        wpnry_topBtn.classList.remove("button-active");
        changeWpnryValues();
        wpnry_horizontal_m3.style.color = "red";
        wpnry_vertical_m3.style.color = "red";
    }
}
