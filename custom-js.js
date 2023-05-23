document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Seed sale", "Presale", "Liquidity (Pancakeswap)", "RydeSwap Liquidity", "Ecosystem & Marketing", "Unlock", "Airdrop", "Partnerships", "Staking", "CEX listings"],
        datasets: [
          {
            data: [3, 14, 7.2, 7.2, 10, 8.6, 5, 5, 20, 20],
            backgroundColor: [
                '#ff6384', '#36a2eb', '#ffce56', '#594DAA', '#A2885D', '#1F1AE0', '#756E98', '#AEEFF0', '#E081EA', '#AB9053'
            ],
            borderColor: [
                '#ff6384', '#36a2eb', '#ffce56', '#594DAA', '#A2885D', '#1F1AE0', '#756E98', '#AEEFF0', '#E081EA', '#AB9053'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 12
          }
        },
        title: {
          display: true,
          text: "Animation Enabled"
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  });