
import { } from 'https://www.gstatic.com/charts/loader.js'


// const cors = require('cors')({ origin: true })
// Acces - Constrol - Allow - Orgin,*


//const cors = require('cors')






// let database = firebase.database()

// let person = database.ref("/person").once("value").then(function (temp_hum))
// {
//     console.log(temp_hum.val().firstname));
//}

function get_temp_hum () {
    let myCheckBox = document.getElementById("checkbox")

}


function drawChart () {

    // Create the data table.
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'name')
    data.addColumn('number', 'temp_value')
    data.addRows([
        ['temp'],
        ['hum']
    ])

    // let tider = ["10", "11", "12", "13"]
    // let temp = [12, 14, 15, 16]
    // let hum = [45, 46, 65, 45]
    // let together = []
    // let togetherhum = []
    // for (let i = 0; i < tider.length; i++) {
    //     together.push([tider[i], temp[i]])
    //     togetherhum.push([tider[i], hum[i]])

    // }
    // let faketempArray = [['10:00', 3], ['11.20', 1], ['kafeterian', 5], ['kafeterian', 3]]

    var chartKafeterian = new google.visualization.LineChart(document.getElementById('chart_kafeterian'))
    chartKafeterian.draw(data, options)


}

var options = { 'title': 'Temp (celsius)', 'width': 400, 'height': 300 }

// Instantiate and draw our chart, passing in some options.
//var chartKafeterian = new google.visualization.LineChart(document.getElementById('chart_kafeterian'));
//chartKafeterian.draw(data, options);

google.charts.load('current', { 'packages': ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

var chartGenomsnitt_temp = new google.visualization.LineChart(document.getElementById('chart_genomsnitt_temp'))
chartGenomsnitt_temp.draw(data, options)

// Instantiate and draw our chart, passing in some options.
var chartterrariet = new google.visualization.LineChart(document.getElementById('chart_Terrariet'))
chartTerrariet.draw(data, options)

var chartlab_10 = new google.visualization.LineChart(document.getElementById('chart_lab_10'))
chartlab_10.draw(data, options)

var chartkällaren = new google.visualization.LineChart(document.getElementById('chart_källaren'))
chartkällaren.draw(data, options)

// Instantiate and draw our chart, passing in some options.
var chartÖversta_våningen = new google.visualization.LineChart(document.getElementById('chart_översta_våningen'))
chartÖversta_våningen.draw(data, options)




