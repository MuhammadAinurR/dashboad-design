// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = 'Nunito'), '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
    dec = typeof dec_point === 'undefined' ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById('chartHistoryPrediksi');
var label = ['1: 20', '1: 25', '1: 33', '1:50'];
var dict = {};
dict['0.02'] = '1:50';
dict['0.03'] = '1:33';
dict['0.04'] = '1:25';
dict['0.05'] = '1:20';

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Rasio',
        lineTension: 0.3,
        backgroundColor: '#4e73de80',
        borderColor: '#4e73de',
        pointRadius: 3,
        pointBackgroundColor: '#4e73de',
        pointBorderColor: '#4e73de',
        pointHoverRadius: 3,
        pointHoverBackgroundColor: '#4e73de',
        pointHoverBorderColor: '#4e73de',
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: ['0.02', '0.03', '0.04', '0.03', '0.04'],
      },
      {
        label: 'Rasio',
        lineTension: 0.3,
        backgroundColor: 'rgba(244, 67, 54, 0.05)',
        borderColor: '#b89712',
        pointRadius: 3,
        pointBackgroundColor: '#b89712',
        pointBorderColor: '#b89712',
        pointHoverRadius: 3,
        pointHoverBackgroundColor: '#b89712',
        pointHoverBorderColor: '#b89712',
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: ['0.02', '0.03', '0.04', '0.03', '0.04', '0.05', '0.03', '0.04', '0.03', '0.05'],
        borderDash: [10, 5],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          time: {
            unit: 'date',
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 20,
          },
        },
      ],
      yAxes: [
        {
          beginAtZero: true,
          ticks: {
            maxTicksLimit: 4,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index) {
              return 'Rasio ' + label[index];
            },
          },
          gridLines: {
            color: 'rgb(234, 236, 244)',
            zeroLineColor: 'rgb(234, 236, 244)',
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + dict[tooltipItem.yLabel];
        },
      },
    },
  },
});
