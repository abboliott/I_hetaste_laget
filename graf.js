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



function updateChartData (chart, data) {

    for (let i = 0; i < 48; i++) {
        chart.data.datasets[0].data[i] = Object.values(data['Temp'])[i]
        chart.data.datasets[1].data[i] = Object.values(data['Hum'])[i]
    }

    chart.update()
}

firebase.database().ref('/Cafeterian/previous').on('value', (snapshot) => {
    let data = snapshot.val()
    if (data != null) {
        console.log("Update chart")
        updateChartData(chart_kafeterian, data)
    }
})

firebase.database().ref('/EntreplanPT/previous').on('value', (snapshot) => {
    let data = snapshot.val()
    if (data != null) {
        console.log("Update chart")
        updateChartData(chart_översta_våningen, data)
    }
})

let KafeterianTemp = document.getElementById("KafeterianTemp")

}


function kafeterian_temp = { }




function kafeterian_button {
    Document.getElementByClass("kafeterian").innerHTML = firebase.database().ref('/kafeterian/previous').on('value', (snapshot) => {
        let data = snapshot.val()
        if (data != null) {
            console.log("kafeterian_temp")
        }
    })
}


}
