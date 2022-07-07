// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = 'Nunito'), '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById('chartJabatanDosen');
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Tenaga Pengajar', 'Asisten Ahli', 'Profesor', 'Lektor Kepala', 'Lektor'],
    datasets: [
      {
        data: [55, 26, 8, 11, 16],
        backgroundColor: ['#0063CC', '#2978CC', '#528CCC', '#7AA1CC', '#A3B7CC'],
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
