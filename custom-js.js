
var ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Seed sale: 5%', 'Presale: 12%', 'Liquidity: 7.2% (Pancakeswap)', 'RydeSwap Liquidity: 7.2%', 'Ecosystem & Marketing: 10%', 'Unlock: 8.6%', 'Airdrop: 5%', 'Partnerships: 5%', 'Staking: 20%', '1st CEX listing: 10%', '2nd CEX listing: 10%'], // Replace with your own labels
      datasets: [{
        data: [5, 12, 7.2, 7.2, 10, 8.6, 5, 5, 20, 10, 10], 
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#594DAA', '#A2885D', '#1F1AE0', '#756E98', '#AEEFF0', '#E081EA', '#AB9053', '#64549C'], // Replace with your own colors
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            display: true 
          },
          pieceLabel: {
            render: 'label',
            fontStyle: 'bold',
            fontSize: 12,
            position: 'inside',
            arc: true,
            overlap: true,
            textMargin: 8,
            fontColor: function(context) {
              return context.dataset.backgroundColor;
            }
          }
        }
      }
  });