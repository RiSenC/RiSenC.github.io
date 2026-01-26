abButton = document.getElementById("statsABbutton");
rbButton = document.getElementById("statsRBbutton");
topButton = document.getElementById("stats_TOP_button");
baseButton = document.getElementById("stats_base_button");

stat_kmh = document.getElementById("stat_kmh");
stat_engine = document.getElementById("stat_engine");
stat_total = document.getElementById("stat_total");

stat_kmh_values = [35, 38]; // РБ, АБ
stat_engine_values = [500, 442, 795, 646]; // РБ-эталон, РБ-базовый, АБ-эталон, АБ-базовый
stat_total_values = [13.2, 11.7, 21, 17.1];// РБ-эталон, РБ-базовый, АБ-эталон, АБ-базовый

mode_flag = 0;
condition_flag = 0;

rbButton.onclick = rbStatsButton;
abButton.onclick = abStatsButton;

function rbStatsButton() {
    mode_flag = 0;
    if(condition_flag)
        a = 0
    else
        b = 0
}

function abStatsButton() {
    mode_flag = 1;
    
}

