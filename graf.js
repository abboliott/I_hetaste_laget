let hum
let temp
// var terrarietTempRef = firebase.database().ref('/Terrariet/Temperature')
// terrarietTempRef.on('value', (snapshot) => {
//     const data = snapshot.val()
// })
// window.onload = test()
window.onload = function funLoad () {
    console.log('The Script will load now.')
    getTemp()
    getHum()
    // terrarietHumRef2()
}


function updateChart (array) {
    for (let i = 0; i < array.length; i++) {
        chart.data.datasets[0].data[i] = array[0][i]
        chart.data.datasets[1].data[i] = array[1][i]
        chart.data.datasets[2].data[i] = array[2][i]
    }
}
function getTemp () {
    var terrarietTempRef2 = firebase.database().ref('/Klassrummet/Temperature')
    terrarietTempRef2.on('value', (snapshot) => {
        let data = snapshot.val()
        if (data != null) {
            console.log(temp)
            data = data.map(Number)
            temp = data
            console.log(temp)
            chart.data.datasets[0].data = temp
            chart.update()
        }
    })
}
function getHum () {
    var terrarietHumRef2 = firebase.database().ref('/Klassrummet/Humidity')
    terrarietHumRef2.on('value', (snapshot) => {
        let data = snapshot.val()
        if (data != null) {
            console.log(hum)
            data = data.map(Number)
            hum = datahum
            console.log(hum)
            chart.data.datasets[0].data = hum
            chart.update()
        }
    })
}





var xValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

let chart = new Chart("chart_kafeterian", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: temp,
            borderColor: "red",
            fill: false
        }, {
            data: hum,
            borderColor: "green",
            fill: false
        }
            // , {
            //     data: [30, 70, 200, 500, 600, 400, 200, 100, 200, 100],
            //     borderColor: "blue",
            //     fill: false
            // }
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
                    max: 50
                }
            }]
        },
        title: {
            display: true,
            text: 'Temperatur'
        }
    }
})




var xValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

let cart2 = new Chart("myChart2", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
            borderColor: "red",
            fill: false
        }, {
            data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
            borderColor: "green",
            fill: false
        }, {
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        legend: { display: false }
    }
})