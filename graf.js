var xValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
var yValues = [0, 5, 10, 15, 20, 25, 30, 35, 40]

let chart_kafeterian = new Chart(document.getElementById('myChart'), {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: 'temp',
            data: yValues,
            borderColor: "red",
            backgroundColor: "red",
            fill: false
        }, {
            label: 'hum',
            data: [1],
            borderColor: "green",
            backgroundColor: "green",
            fill: false
        }

        ]
    },

    options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Tid'
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 5,
                    max: 80
                }
            }]
        },
        title: {
            display: true,
            text: 'Temp/Hum'
        }
    }
})

let chart_översta_våningen = new Chart(document.getElementById('översta_våningen'), {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: 'temp',
            data: yValues,
            borderColor: "red",
            backgroundColor: "red",
            fill: false
        }, {
            label: 'hum',
            data: [1],
            borderColor: "green",
            backgroundColor: "green",
            fill: false
        }

        ]
    },

    options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Tid'
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 5,
                    max: 80
                }
            }]
        },
        title: {
            display: true,
            text: 'Temp/Hum'
        }
    }
})

let allTempValues = []
let allHumValues = []

function updateChartData (chart, data) {

    for (let i = 0; i < 48; i++) {
        chart.data.datasets[0].data[i] = Object.values(data['Temp'])[i]
        chart.data.datasets[1].data[i] = Object.values(data['Hum'])[i]
    }

    chart.update()
}

// Samlar alla noder för temperaturer och anger vilken Html-span värdet ska visas i.
let tempEvents = [
    {
        'nodePath': '/Cafeterian/nu/Temp',
        'element': 'KafeterianTemp'
    },
    {
        'nodePath': '/EntreplanPT/nu/Temp',
        'element': 'EntreplanPTTemp'
    },
    {
        'nodePath': '/Lab-10/nu/Temp',
        'element': 'Lab10Temp'
    },
    {
        'nodePath': '/Lab-ett/nu/Temp',
        'element': 'LabEttTemp'
    },
    {
        'nodePath': '/Kallaren/nu/Temp',
        'element': 'KallarenTemp'
    }
]

// Loopar genom alla events ovan för att hämta temperaturer från Firebase för uppdateringar mot span-tagg.
for (let i = 0; i < tempEvents.length; i++) {
    firebase.database().ref(tempEvents[i].nodePath).on('value', (snapshot) => {
        let value = snapshot.val()
        let element = document.getElementById(tempEvents[i].element)
        element.innerHTML = Math.round(value * 10) / 10 + "°C"
        // uppdaterar snittet:
        updateTempAverage(i, value)
    })
}

// Samlar alla noder för hum och anger vilken Html-span värdet ska visas i.
let humEvents = [
    {
        'nodePath': '/Cafeterian/nu/Hum',
        'element': 'KafeterianHum'
    },
    {
        'nodePath': '/EntreplanPT/nu/Hum',
        'element': 'EntreplanPTHum'
    },
    {
        'nodePath': '/Lab-10/nu/Hum',
        'element': 'Lab10Hum'
    },
    {
        'nodePath': '/Lab-ett/nu/Hum',
        'element': 'LabEttHum'
    },
    {
        'nodePath': '/Kallaren/nu/Hum',
        'element': 'KallarenHum'
    },
]

// Loopar genom alla events ovan för att hämta temperaturer från Firebase för uppdateringar mot span-tagg.
for (let i = 0; i < humEvents.length; i++) {
    firebase.database().ref(humEvents[i].nodePath).on('value', (snapshot) => {
        let value = snapshot.val()
        let element = document.getElementById(humEvents[i].element)
        element.innerHTML = Math.round(value * 10) / 10 + "%"
        updateHumAverage(i, value)
    })
}

// Samlar per angiven nyckel temperaturvärden och uppdaterar span-taggen med snitt
function updateTempAverage (key, value) {
    allTempValues[key] = Math.round(value * 10) / 10
    let sum = 0
    for (let i = 0; i < allTempValues.length; i++) {
        sum += allTempValues[i]
    }
    let result = sum / allTempValues.length
    let element = document.getElementById("averageTemp")
    element.innerHTML = Math.round(result * 10) / 10 + "°C"
}

// Samlar per nyckel luftfiktighetsvärden och uppdaterar span-taggen med snitt
function updateHumAverage (key, value) {
    allHumValues[key] = Math.round(value * 10) / 10
    let sum = 0
    for (let i = 0; i < allHumValues.length; i++) {
        sum += allHumValues[i]
    }
    let result = sum / allHumValues.length
    let element = document.getElementById("averageHum")
    element.innerHTML = Math.round(result * 10) / 10 + "%"
}

firebase.database().ref('/Cafeterian/previous').on('value', (snapshot) => {
    let data = snapshot.val()
    if (data != null) {
        // console.log("Update chart")
        updateChartData(chart_kafeterian, data)
    }
})

firebase.database().ref('/EntreplanPT/previous').on('value', (snapshot) => {
    let data = snapshot.val()
    if (data != null) {
        // console.log("Update chart")
        updateChartData(chart_översta_våningen, data)
    }
    HEAD
}


)



firebase.database().ref('/Cafeterian/nu/Temp').on('value', (snapshot) => {
    let visaTempkaf = snapshot.val()
    var nyTempkaf = document.getElementById("KafeterianTemp")
    nyTempkaf.innerHTML = Math.round(visaTempkaf * 10) / 10 + "ºC "
})

firebase.database().ref('/Cafeterian/nu/Hum').on('value', (snapshot) => {
    let visaHumKaf = snapshot.val()
    var nyHumKaf = document.getElementById("KafeterianHum")
    nyHumKaf.innerHTML = Math.round(visaHumKaf * 10) / 10 + "%"
})

firebase.database().ref('/EntreplanPT/nu/Temp').on('value', (snapshot) => {
    let visaTempEnt = snapshot.val()
    var nyTempEnt = document.getElementById("EntreplanPTTemp")
    nyTempEnt.innerHTML = Math.round(visaTempEnt * 10) / 10 + "ºC "
})

firebase.database().ref('/EntreplanPT/nu/Hum').on('value', (snapshot) => {
    let visaHumEnt = snapshot.val()
    var nyHumEnt = document.getElementById("EntreplanPTHum")
    nyHumEnt.innerHTML = Math.round(visaHumEnt * 10) / 10 + "%"
})

firebase.database().ref('/Lab-10/nu/Temp').on('value', (snapshot) => {
    let visaTempLab10 = snapshot.val()
    var nyTempLab10 = document.getElementById("Lab10Temp")
    nyTempLab10.innerHTML = Math.round(visaTempLab10 * 10) / 10 + "ºC "
})

firebase.database().ref('/Lab-10/nu/Hum').on('value', (snapshot) => {
    let visaHumLab10 = snapshot.val()
    var nyHumLab10 = document.getElementById("Lab10Hum")
    nyHumLab10.innerHTML = Math.round(visaHumLab10 * 10) / 10 + "%"
})

firebase.database().ref('/Lab-ett/nu/Temp').on('value', (snapshot) => {
    let visaTempLabEtt = snapshot.val()
    var nyTempLabEtt = document.getElementById("LabEttTemp")
    nyTempLabEtt.innerHTML = Math.round(visaTempLabEtt * 10) / 10 + "ºC "
})

firebase.database().ref('/Lab-ett/nu/Hum').on('value', (snapshot) => {
    let visaHumLabEtt = snapshot.val()
    var nyHumLabEtt = document.getElementById("LabEttHum")
    nyHumLabEtt.innerHTML = Math.round(visaHumLabEtt * 10) / 10 + "%"
})

firebase.database().ref('/Kallaren/nu/Temp').on('value', (snapshot) => {
    let visaTempKal = snapshot.val()
    var nyTempKal = document.getElementById("KallarenTemp")
    nyTempKal.innerHTML = Math.round(visaTempKal * 10) / 10 + "ºC "
})

firebase.database().ref('/Kallaren/nu/Hum').on('value', (snapshot) => {
    let visaHumKal = snapshot.val()
    var nyHumKal = document.getElementById("KallarenHum")
    nyHumKal.innerHTML = Math.round(visaHumKal * 10) / 10 + "%"
})

