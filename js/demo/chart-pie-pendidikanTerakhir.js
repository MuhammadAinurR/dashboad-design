// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = 'Nunito'), '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById('chartPendidikanTerakhirDosen');
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['S1', 'S2', 'S3'],
    datasets: [
      {
        data: [30, 60, 80],
        backgroundColor: ['#ffc107', '#6573c3', '#73c365'],
        hoverBackgroundColor: ['#cc9a05', '#3f51b5', '#508846'],
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
