// Transaction Status
var ctx = document.getElementById('transactionStatusChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Successful', 'Unsuccessful'],
        datasets: [{
            label: 'Count',
            data: [800000, 200000],
            backgroundColor: ['#F55B62', '#1D3E73'],
            borderColor: ['#F55B62', '#1D3E73'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        cutout: '60%',
            plugins: {
                legend: {                       
                    display: false
                },
            }
    }
});

// Transaction Types
var ctx = document.getElementById('transactionTypesChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Send', 'Receive'],
        datasets: [{
            label: 'Count',
            data: [600000, 400000],
            backgroundColor: ['#F55B62', '#1D3E73'],
            borderColor: ['#F55B62', '#1D3E73'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        cutout: '0%',
            plugins: {
                legend: {                       
                    display: false
                },
            }
        }
});

//Transaction in the last 24 hours
var ctx = document.getElementById('transactionLastDay').getContext('2d');
var sendMoney = [0, 15, 30, 40, 50, 60];
var billsPayment = [20, 30, 40, 50, 60];
var topUp = [30, 40, 50, 60, 70];
var onlineCashIn = [40, 50, 60, 70, 80];
 var externalCashIn = [50, 60, 70, 80, 90];
var timeIntervals = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm'];

var mixedChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: timeIntervals,
    datasets: [{
        label: 'Send Money',
        data: sendMoney,
        yAxisID: 'y-axis-1',
        backgroundColor: '#f55b62',
        borderColor: '#eb232d',
        borderWidth: 1
    }, {
        label: 'Bills Payment',
        data: billsPayment,
        yAxisID: 'y-axis-1',
        type: 'line',
        backgroundColor: '#2772d0',
        borderColor: '#1d3e73',
        borderWidth: 1
    }, {
        label: 'Top Up',
        data: topUp,
        yAxisID: 'y-axis-1',
        type: 'line',
        backgroundColor: '#20c997',
        borderColor: '#198754',
        borderWidth: 1
    }, {
        label: 'Online Cash In',
        data: onlineCashIn,
        yAxisID: 'y-axis-1',
        type: 'line',
        backgroundColor: '#ffc107',
        borderColor: '#fd7e14',
        borderWidth: 1
    }, {
        label: 'Exteral Cash In',
        data: externalCashIn,
        yAxisID: 'y-axis-1',
        type: 'line',
        backgroundColor: '#6f42c1',
        borderColor: '#6610f2',
        borderWidth: 1
    }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                position: 'left',
                ticks: {
                    beginAtZero: true
                }
            }, {
                id: 'y-axis-2',
                type: 'linear',
                position: 'right',
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
    }
});

// Transactions Summaries Doughnut Chart + Dropdown
var data = {
    labels: ['PHP', 'JPY', 'GBP', 'USD'],
    datasets: [{
        label: 'Count',
        data: [2500, 2500, 2500, 2500],
        backgroundColor: ['#6f42c1', '#ffc107', '#d63384', '#1d3e73']
    }]
};

var options = {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
            legend: {                       
                display: false
            },
    }
};

var transactionChart = new Chart(document.getElementById('transactionSummariesChart'), {
    type: 'doughnut',
    data: data,
    options: options
});

var dropdownItems = document.querySelectorAll('#chart-type + .dropdown-menu .dropdown-item');
for (var i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click', function(event) {
        event.preventDefault();

        var chartType = event.target.dataset.chartType;

        document.getElementById('chart-type').textContent = event.target.textContent;

        if (chartType === 'transactions') {

            transactionChart.data.datasets[0].data = [2500, 2500, 2500, 2500];

            document.querySelector('#chart-data li:nth-of-type(1) span').textContent = '2,500';
            document.querySelector('#chart-data li:nth-of-type(2) span').textContent = '2,500';
            document.querySelector('#chart-data li:nth-of-type(3) span').textContent = '2,500';
            document.querySelector('#chart-data li:nth-of-type(4) span').textContent = '2,500';
        } else if (chartType === 'success') {

            transactionChart.data.datasets[0].data = [2000, 1750, 1750, 2000];

            document.querySelector('#chart-data li:nth-of-type(1) span').textContent = '80%';
            document.querySelector('#chart-data li:nth-of-type(2) span').textContent = '70%';
            document.querySelector('#chart-data li:nth-of-type(3) span').textContent = '70%';
            document.querySelector('#chart-data li:nth-of-type(4) span').textContent = '80%';
        } else if (chartType === 'failure') {

            transactionChart.data.datasets[0].data = [500, 750, 750, 500];

            document.querySelector('#chart-data li:nth-of-type(1) span').textContent = '20%';
            document.querySelector('#chart-data li:nth-of-type(2) span').textContent = '30%';
            document.querySelector('#chart-data li:nth-of-type(3) span').textContent = '30%';
            document.querySelector('#chart-data li:nth-of-type(4) span').textContent = '20%';
        }

        transactionChart.update();
    });
}