# hexo-tag-chart

![npm](https://img.shields.io/npm/v/hexo-tag-chart)
![npm](https://img.shields.io/npm/dt/hexo-tag-chart)

Insert [Chartjs](https://www.chartjs.org/) in Hexo site by using tags.

English | [中文说明](https://shen-yu.gitee.io/2020/chartjs/)

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

|  Name   | Type  | Default  | Description  |
|  ----  | ----  | ----  | ----  |
| width  | decimal | 100% | The width of chart, responsive in window.  |
| height  | number | 300 | The height of chart (px). |

## Example

### Line

```
{% chart 80% 300 %}
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

![line chart](screenshots/1.png)


## For more details, visit [Demo](https://shen-yu.gitee.io/2020/chartjs/) here.