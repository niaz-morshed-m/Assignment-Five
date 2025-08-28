
// heart button functionality



const heartClass = document.getElementsByClassName('heart')
 let heartCount = document.getElementById("heart-count")

for(const items of heartClass){
    items.addEventListener('click', function (){
        let currentHeartCount = parseInt(heartCount.innerText)
        heartCount.innerText = currentHeartCount + 1
        
    
    })
}


// call button functionality

const callBtn = document.getElementsByClassName('call')
let coin = document.getElementById('coin')




// function getAlert (id, CoinAlert, CallAlert){
//  document.getElementById(id).addEventListener("click", function () {
//     console.log('hello')
//   let currentCoins = parseInt(coin.innerText);
//   if (currentCoins < 20) {
//     alert(CoinAlert);
//   } else {
//     coin.innerText = currentCoins - 20;
//     alert(CallAlert);
//   }
// });
// }


  document
    .getElementById("national-call")
    .addEventListener("click", function () {
      let currentCoins = parseInt(coin.innerText);
      console.log("hello");
      if (currentCoins < 20) {
        alert("❌ You do not have enough coins to make call");
      } else {
        coin.innerText = currentCoins - 20;
        alert("📞 Calling National Emergency 999...");

        const callHistory = document.createElement('div')
        callHistory.innerHTML = `<div>
                <p class="font-semibold">National Emergency</p>
                <p>999</p>
            </div>

                <p>11:36:AM</p>`;

                document.getElementById('history-container').appendChild(callHistory)
                callHistory.classList.add("rounded-sm", "flex", "bg-[#FAFAFA]", 'items-center', 'p-[10px]', 'gap-[60px]', 'justify-between');
      }
    });














// getAlert(
//   "national-call",
//   "❌ You do not have enough coins to make call",
//   "📞 Calling National Emergency 999..."
// );

// getAlert(
//   "police-call",
//   "❌ You do not have enough coins to make call",
//   "📞 Calling Police 999..."
// );

// getAlert(
//   "fire-call",
//   "❌ You do not have enough coins to make call",
//   "📞 Calling Fire Service 999..."
// );

// getAlert(
//   "child-call",
//   "❌ You do not have enough coins to make call",
//   "📞 Calling Women an Child Helpline 109..."
// );

// getAlert(
//   "ambulence-call",
//   "❌ You do not have enough coins to make call",
//   "📞 Calling Ambulence 1994-999999..."
// );

// getAlert(
//   "anti-call",
//   "❌ You do not have enough coins to make call",
//   "📞 Calling Anti Corruption Helpline 16216..."
// );

// getAlert(
//   "electricity-call",
//   "❌ You do not have enough coins to make call",
//   "📞 Calling Electricity Helpline 16216..."
// );

// getAlert(
//   "brac-call",
//   "❌ You do not have enough coins to make call",
//   "📞 Calling BRAC 16445..."
// );

// getAlert(
//   "railway-call",
//   "❌ You do not have enough coins to make call",
//   "📞 Calling Bangladesh Railway 163..."
// );