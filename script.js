// ========== СТАТИСТИКА ==========
let stats_modeFlag = 0;      // 0 - РБ; 1 - АБ
let stats_conditionFlag = 0; // 0 - Эталон; 1 - базовый

// Значения
const stats_kmh_values = [35, 38]; // РБ, АБ
const stats_engine_values = [500, 442, 795, 646]; // РБ-эталон, РБ-базовый, АБ-эталон, АБ-базовый
const stats_total_values = [13.2, 11.7, 21, 17.1]; // РБ-эталон, РБ-базовый, АБ-эталон, АБ-базовый

// Элементы
const stats_kmh = document.getElementById("stats_kmh");
const stats_engine = document.getElementById("stats_engine");
const stats_total = document.getElementById("stats_total");

function updateStats() {
    // Вычисляем индекс: (modeFlag * 2) + conditionFlag
    // mode=0(РБ), condition=0(эталон) -> индекс 0
    // mode=0(РБ), condition=1(базовый) -> индекс 1
    // mode=1(АБ), condition=0(эталон) -> индекс 2
    // mode=1(АБ), condition=1(базовый) -> индекс 3
    const index = stats_modeFlag * 2 + stats_conditionFlag;
    
    stats_kmh.textContent = stats_kmh_values[stats_modeFlag] + " км/ч";
    stats_engine.textContent = stats_engine_values[index] + " л.с.";
    stats_total.textContent = stats_total_values[index] + " л.с./т";
    
    // Цвета: кмч зависит от режима, остальное от условия
    stats_kmh.style.color = stats_modeFlag ? "green" : "red";
    stats_engine.style.color = stats_conditionFlag ? "red" : "green";
    stats_total.style.color = stats_conditionFlag ? "red" : "green";
}

// кнопки статистики
function rbStatsButton() {
    if (stats_modeFlag) {
        stats_modeFlag = 0;
        document.getElementById("statsABbutton").classList.remove("button-active");
        document.getElementById("statsRBbutton").classList.add("button-active");
        updateStats();
    }
}

function abStatsButton() {
    if (!stats_modeFlag) {
        stats_modeFlag = 1;
        document.getElementById("statsABbutton").classList.add("button-active");
        document.getElementById("statsRBbutton").classList.remove("button-active");
        updateStats();
    }
}

function topStatsButton() {
    if (stats_conditionFlag) {
        stats_conditionFlag = 0;
        document.getElementById("stats_base_button").classList.remove("button-active");
        document.getElementById("stats_top_button").classList.add("button-active");
        updateStats();
    }
}

function baseStatsButton() {
    if (!stats_conditionFlag) {
        stats_conditionFlag = 1;
        document.getElementById("stats_base_button").classList.add("button-active");
        document.getElementById("stats_top_button").classList.remove("button-active");
        updateStats();
    }
}

// ========== ВООРУЖЕНИЕ ==========
let wpnry_crewFlag = 0;      // 0 - Асы; 1 - лохи   
let wpnry_modeFlag = 0;      // 0 - РБ; 1 - АБ
let wpnry_conditionFlag = 0; // 0 - Эталон; 1 - базовый

// Значения
const wpnry_reload_values = [5, 6.5]; // [лохи, асы]

// [crew][mode][condition]
const wpnry_horizontal_values = [
    [ // crew=0 (асы)
        [24, 20.4], // mode=0 (РБ): [эталон, базовый]
        [38.4, 27.7] // mode=1 (АБ): [эталон, базовый]
    ],
    [ // crew=1 (лохи)
        [16.8, 14.3], // mode=0 (РБ): [эталон, базовый]
        [26.9, 19.4] // mode=1 (АБ): [эталон, базовый]
    ]
];

const wpnry_vertical_values = [
    [ // crew=0 (асы)
        [4, 3.2],    // mode=0 (РБ): [эталон, базовый]
        [10.4, 6.7]  // mode=1 (АБ): [эталон, базовый]
    ],
    [ // crew=1 (лохи)
        [2.8, 2.2],  // mode=0 (РБ): [эталон, базовый]
        [7.3, 4.7]   // mode=1 (АБ): [эталон, базовый]
    ]
];

// Элементы
const wpnry_reload = document.getElementById("wpnry_reload_m3");
const wpnry_horizontal = document.getElementById("wpnry_horizontal_m3");
const wpnry_vertical = document.getElementById("wpnry_vertical_m3");

function updateWpnry() {
    // Перезарядка зависит только от crewFlag
    wpnry_reload.textContent = wpnry_reload_values[wpnry_crewFlag] + " с";
    
    // Горизонтальная и вертикальная наводка
    wpnry_horizontal.textContent = wpnry_horizontal_values[wpnry_crewFlag][wpnry_modeFlag][wpnry_conditionFlag] + " °/с";
    wpnry_vertical.textContent = wpnry_vertical_values[wpnry_crewFlag][wpnry_modeFlag][wpnry_conditionFlag] + " °/с";
    
    // Цвета
    wpnry_reload.style.color = wpnry_crewFlag ? "red" : "green";
    
    // Для наводки: зеленый если (АБ и эталон) или (асы), иначе красный
    const isGreen = (wpnry_modeFlag && !wpnry_conditionFlag) || !wpnry_crewFlag;
    wpnry_horizontal.style.color = isGreen ? "green" : "red";
    wpnry_vertical.style.color = isGreen ? "green" : "red";
}

// Кнопки вооружения
function aceWpnryButton() {
    if (wpnry_crewFlag) {
        wpnry_crewFlag = 0;
        document.getElementById("wpnry_lohiButton").classList.remove("button-active");
        document.getElementById("wpnry_aceButton").classList.add("button-active");
        updateWpnry();
    }
}

function lohiWpnryButton() {
    if (!wpnry_crewFlag) {
        wpnry_crewFlag = 1;
        document.getElementById("wpnry_lohiButton").classList.add("button-active");
        document.getElementById("wpnry_aceButton").classList.remove("button-active");
        updateWpnry();
    }
}

function rbWpnryButton() {
    if (wpnry_modeFlag) {
        wpnry_modeFlag = 0;
        document.getElementById("wpnry_abButton").classList.remove("button-active");
        document.getElementById("wpnry_rbButton").classList.add("button-active");
        updateWpnry();
    }
}

function abWpnryButton() {
    if (!wpnry_modeFlag) {
        wpnry_modeFlag = 1;
        document.getElementById("wpnry_abButton").classList.add("button-active");
        document.getElementById("wpnry_rbButton").classList.remove("button-active");
        updateWpnry();
    }
}

function topWpnryButton() {
    if (wpnry_conditionFlag) {
        wpnry_conditionFlag = 0;
        document.getElementById("wpnry_baseButton").classList.remove("button-active");
        document.getElementById("wpnry_topButton").classList.add("button-active");
        updateWpnry();
    }
}

function baseWpnryButton() {
    if (!wpnry_conditionFlag) {
        wpnry_conditionFlag = 1;
        document.getElementById("wpnry_baseButton").classList.add("button-active");
        document.getElementById("wpnry_topButton").classList.remove("button-active");
        updateWpnry();
    }
}