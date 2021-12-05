// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = 'Nunito'), '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById('chartWaktuStudiLanjut');
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['<2 thn', '2thn', '3thn', '4thn', '>4thn'],
    datasets: [
      {
        data: [2, 4, 5, 4, 1],
        backgroundColor: ['#00ccff', '#ff5722', '#764dbe', '#ffeb3b', '#03fc45'],
        hoverBackgroundColor: ['#006680', '#b73e18', '#470068', '#ccbc2f', '#02b030'],
        hoverBorderColor: 'rgba(234, 236, 1)',
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
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
    cutoutPercentage: 80,
  },
});
