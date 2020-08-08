# hexo-tag-chart

![npm](https://img.shields.io/npm/v/hexo-tag-chart)

Insert [Chartjs](https://www.chartjs.org/) in Hexo site by using tags.

## Install 

```bash
$ npm install hexo-tag-chart --save
```

## Usage

```
{% chart [width] [height] %}
\\Chartjs options goes here
{% endchart %}
```

## Example

```
{% chart 400 300 %}
{
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        }
    }
};
{% endchart %}
```