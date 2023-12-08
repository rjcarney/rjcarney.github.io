function createLineChart(id, data, size, yMax, title) {
    const holder = document.getElementById(id);

    var figcaption = document.createElement('figcaption');
    figcaption.innerText = title;

    var figure = document.createElement('figure');
    figure.classList.add('css-chart');
    figure.style.setProperty('--widget-size', size + 'px');

    holder.append(figcaption);
    holder.append(figure);

    var ul = document.createElement('ul');
    ul.classList.add('line-chart');
    figure.append(ul);

    populateChart(ul, data, size, yMax);
}

function populateChart(ul, data, size, yMax){
    var xStep = size / data.length

    for(i = 0; i < data.length; i++){
        var li = document.createElement('li');
        
        var x = xStep * (i + 1);
        var y = (data[i].value / yMax) * size;
        li.style.setProperty('--x', x + 'px');
        li.style.setProperty('--y', y + 'px');

        var point = document.createElement('div');
        point.classList.add('data-point');
        point.setAttribute('data-value', data[i].value);
        li.append(point);

        var tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerText = data[i].label + ': ' + data[i].value;
        point.append(tooltip);

        if(i < data.length - 1){
            var line = document.createElement('div');
            line.classList.add('line-segment');
            
            var rise = ((data[i+1].value / yMax) * size) - y;
            var hypotenuse = Math.sqrt((rise * rise) + (xStep * xStep));
            line.style.setProperty('--hypotenuse', hypotenuse);

            var angle = Math.asin(rise/hypotenuse) * (180 / Math.PI);
            line.style.setProperty('--angle', angle);

            li.prepend(line);
        }

        ul.append(li);
    }
}