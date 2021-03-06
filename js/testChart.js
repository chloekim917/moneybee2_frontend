var ctx = document.getElementById('chart').getContext('2d');
var w = 1000, h = 800, maxR = 10, numItems = 500;

var chart = new Chart(ctx, {
  type: 'bubble',
  // type: 'bar',
  // type: 'doughnut',
  // type: 'line',
  options: {
    legend: {
      display: false
    }
  },
  data: {
    datasets: [
      {
        data: [],
      }
    ]
  }
});

function getData(numItems) {
  let data = [];
  
  for(var i = 0; i < numItems; i++) {
    data.push({
      x: w * Math.random(),
      y: h * Math.random(),
      r: maxR * Math.random()
    });
  }
  
  return data;
}

function updateChart(data) {
  chart.data.datasets[0].data = data;
  chart.update();
}

updateChart(getData(numItems));

document.getElementById('num-items-input').addEventListener('change', function(e) {
  numItems = +e.target.value;
  updateChart(getData(numItems));
});

document.getElementById('update-button').addEventListener('click', function() {
  updateChart(getData(numItems));
});



// For a pie chart
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});

