var options = {
  responsive: true, // Instruct chart js to respond nicely.
  maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height

  scales: {
    x: {
      type: 'linear',
      offset: false,
      grid: {
        offset: false,
      },
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
      },
      title: {
        display: true,
        text: 'Progress in %',
      },
    },
    y: {
      min: 0,
      max: 7,
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        callback: function (val, index) {
          // Hide every 2nd tick label
          return index % 2 === 0 ? this.getLabelForValue(val) : '';
        },
      },
      title: {
        display: true,
        text: 'Jumlah Dosen Studi',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

var ctx = document.getElementById('chartDosenProgress').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Jumlah dosen studi: ',
        data: [
          { x: 12.5, y: 4 },
          { x: 37.5, y: 3 },
          { x: 62.5, y: 6 },
          { x: 87.5, y: 5 },
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1,
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  },
  options: options,
});
