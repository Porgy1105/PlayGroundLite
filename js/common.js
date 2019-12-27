// pre内のタブ文字削除(タブインデントが出来る)
window.addEventListener("DOMContentLoaded", function () {
	// preを取得
	var pres = document.getElementsByTagName("code");
	// 反復処理
	for (var i = 0; i < pres.length; i++) {
		// タブ文字を消す
		pres[i].firstChild.data = pres[i].firstChild.data.replace(/^\t+/gm, "");
	}
}, false);


/* Materialize */
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.fixed-action-btn');
	var instances = M.FloatingActionButton.init(elems, {
		direction: 'left'
	});
});

/* Chart.js */
document.addEventListener('DOMContentLoaded', function () {
	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			events: ['click']
		}
	});

	var ctx2 = document.getElementById('mixedChart').getContext('2d');
	var mixedChart = new Chart(ctx2, {
		type: 'bar',
		data: {
			datasets: [{
				label: 'Bar Dataset',
				data: [10, 20, 30, 40],
				// this dataset is drawn below
				order: 1
			}, {
				label: 'Line Dataset',
				data: [10, 10, 10, 10],
				type: 'line',
				// this dataset is drawn on top
				order: 2
			}],
			labels: ['January', 'February', 'March', 'April']
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			events: ['click']
		}
	});
});