// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = 'Nunito'), '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById('chartStatusKepegawaianDosen');
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Dosen Tetap', 'Dosen Tidak Tetap', 'Dosen Honorer'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#03fc45', '#00ccff', '#ae00ff'],
        hoverBackgroundColor: ['#008022', '#006680', '#630091'],
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
