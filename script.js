let abButton = document.getElementById("statsABbutton");
let rbButton = document.getElementById("statsRBbutton");
let topButton = document.getElementById("stats_TOP_button");
let baseButton = document.getElementById("stats_base_button");

let stat_kmh = document.getElementById("stat_kmh");
let stat_engine = document.getElementById("stat_engine");
let stat_total = document.getElementById("stat_total");

let stat_kmh_values = [35, 38]; // РБ, АБ
let stat_engine_values = [500, 442, 795, 646]; // РБ-эталон, РБ-базовый, АБ-эталон, АБ-базовый
let stat_total_values = [13.2, 11.7, 21, 17.1];// РБ-эталон, РБ-базовый, АБ-эталон, АБ-базовый

let mode_flag = 0;      // 0 - РБ; 1 - АБ
let condition_flag = 0; // 0 - Эталон; 1 - базов

rbButton.onclick = rbStatsButton;
abButton.onclick = abStatsButton;

function rbStatsButton() {
    if(mode_flag)
    {
        mode_flag = 0;
        abButton.classList.remove("button-active");
        rbButton.classList.add("button-active")
        stat_kmh.textContent = stat_kmh_values[0]+" км/ч";
        if(!condition_flag)
        {
            stat_engine.textContent = stat_engine_values[0]+" л.с.";
            stat_total.textContent = stat_total_values[0]+" л.с./т";
        }
        else
        {
            stat_engine.textContent = stat_engine_values[1]+" л.с.";
            stat_total.textContent = stat_total_value[1]+" л.с./т";
        }
        stat_kmh.style.color = "red";
        stat_engine.style.color = "red";
        stat_total.style.color = "red";
    }
}

function abStatsButton() {
    if(!mode_flag)
        {
            mode_flag = 1;
            abButton.classList.add("button-active");
            rbButton.classList.remove("button-active")
            stat_kmh.textContent = stat_kmh_values[1]+" км/ч";
            if(!condition_flag)
            {
                stat_engine.textContent = stat_engine_values[3]+" л.с.";
                stat_total.textContent = stat_total_values[3]+" л.с./т";
            }
            else
            {
                stat_engine.textContent = stat_engine_values[4]+" л.с.";
                stat_total.textContent = stat_total_value[4]+" л.с./т";
            }
            stat_kmh.style.color = "green";
            stat_engine.style.color = "green";
            stat_total.style.color = "green";
        }
}

