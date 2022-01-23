const data = {
  labels: ['<3thn', '3thn', '4thn', '>4thn'],
  datasets: [
    {
      label: 'Waktu Studi Lanjut',
      data: [2, 5, 4, 1],
      backgroundColor: ['#00ccffcc', '#764dbe80', '#ffeb3bcc', '#03fc45cc'],
      hoverBackgroundColor: ['#006680', '#470068', '#ccbc2f', '#02b030'],
      hoverBorderColor: 'rgba(234, 236, 1)',
      borderWidth: 2,
      cutout: '70',
    },
  ],
};
// Pie Chart Example
var ctx = document.getElementById('chartWaktuStudiLanjut');
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: 'white',
        bodyColor: '#858796',
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false,
      },
      datalabels: {
        color: 'black',
        labels: {
          title: {
            font: {
              weight: 'bold',
            },
          },
          value: {
            color: 'white',
          },
        },
        formatter: (value, context) => {
          const datapoints = context.chart.data.datasets[0].data;
          function totalSum(total, datapoint) {
            return total + datapoint;
          }
          const totalPercentage = datapoints.reduce(totalSum, 0);
          const percentageValue = ((value / totalPercentage) * 100).toFixed(1);
          return [percentageValue + '%'];
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});
