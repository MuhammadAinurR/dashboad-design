// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = 'Nunito'), '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById('chartPerkiraanPensiun');
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['-5 thn', '5-10 thn', '10-15 thn', '15+ thn'],
    datasets: [
      {
        data: [4, 12, 25, 14],
        backgroundColor: ['#8e78d6', '#30a4fc', '#30e8aa', '#febf44'],
        hoverBackgroundColor: ['#5f5090', '#1f659a', '#1d9069', '#a97f2b'],
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
