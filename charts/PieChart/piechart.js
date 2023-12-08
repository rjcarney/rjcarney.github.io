function createPieChart(id, data, size) {
    const holder = document.getElementById(id);

    var pieChart = document.createElement('div');
    pieChart.classList.add('pie');
    pieChart.style.setProperty('--widget-size', size + 'px');

    holder.append(pieChart);

    populateChart(pieChart, data);
}

function populateChart(chart, data){
    for(i = 0; i < data.length; i++){
        var segment = document.createElement('div')
        segment.classList.add('pie_segment');
        segment.style.setProperty('--value', data[i].value);
        segment.style.setProperty('--bg', data[i].bg);
        chart.append(segment);
    }
}