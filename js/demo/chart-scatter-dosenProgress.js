var ctx = document.getElementById('chartDosenProgress').getContext('2d');

// Define the data
var data1 = [
  { x: 5, y: 1 },
  { x: 10, y: 1 },
  { x: 10, y: 2 },
  { x: 10, y: 3 },
  { x: 15, y: 1 },
  { x: 15, y: 2 },
  { x: 20, y: 1 },
]; // Add data values to array
// End Defining data

var data2 = [
  { x: 25, y: 1 },
  { x: 25, y: 2 },
  { x: 25, y: 3 },
  { x: 25, y: 4 },
  { x: 25, y: 1 },
  { x: 30, y: 1 },
  { x: 35, y: 1 },
  { x: 40, y: 1 },
];
var data3 = [
  { x: 55, y: 1 },
  { x: 60, y: 1 },
];
var data4 = [
  { x: 65, y: 1 },
  { x: 70, y: 1 },
  { x: 75, y: 1 },
  { x: 75, y: 2 },
  { x: 80, y: 1 },
];
var data5 = [
  { x: 85, y: 1 },
  { x: 90, y: 1 },
  { x: 95, y: 1 },
  { x: 95, y: 2 },
  { x: 95, y: 3 },
  { x: 95, y: 4 },
  { x: 95, y: 5 },
  { x: 95, y: 6 },
];

var options = {
  responsive: true, // Instruct chart js to respond nicely.
  maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height

  scales: {
    x: {
      min: 0,
      max: 100,
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
        text: 'Quantity',
      },
    },
  },
};

// End Defining data
var myChart = new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [
      {
        label: '0-20%', // Name the series
        data: data1, // Specify the data values array
        backgroundColor: '#ed2938', // Add custom color background (Points and Fill)
        pointRadius: 6,
      },
      {
        label: '21-40%',
        data: data2,
        backgroundColor: '#b25f4a',
        pointRadius: 6,
      },
      {
        label: '41-60%',
        data: data3,
        backgroundColor: '#77945c',
        pointRadius: 6,
      },
      {
        label: '61-80%',
        data: data4,
        backgroundColor: '#3bca6d',
        pointRadius: 6,
      },
      {
        label: '81-100%',
        data: data5,
        backgroundColor: '#00ff7f',
        pointRadius: 6,
      },
    ],
  },
  options: options,
});
