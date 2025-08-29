
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

function getAlert (id, alert1, alert2, CallServiceName, callNum){
 
 document.getElementById(id)
   .addEventListener("click", function () {
    
     let currentCoins = parseInt(coin.innerText);
     if (currentCoins < 20) {
       alert(alert1);
     } else {
       coin.innerText = currentCoins - 20;
       alert(alert2);
      
       const callTime = new Date();
       const callHistory = document.createElement("div");
       callHistory.innerHTML = `<div>
                <p id="service-name" class="font-semibold">${CallServiceName}</p>
                <p id="service-num">${callNum}</p>
            </div>
                <p id ="time-para">${new Date().toLocaleTimeString()}</p>`;

       document.getElementById("history-container").appendChild(callHistory);
       callHistory.classList.add(
         "rounded-sm",
         "flex",
         "bg-[#FAFAFA]",
         "items-center",
         "p-[10px]",
         "gap-[60px]",
         "justify-between",
         "mb-[10px]",
         "history-parent"
       );
     }
   });
}
 
getAlert(
  "national-call",
  "❌ You do not have enough coins to make call",
  "📞 Calling National Emergency 999...", "National Emergency", "999"
);

getAlert(
  "police-call",
  "❌ You do not have enough coins to make call",
  "📞 Calling Police 999...", "Police", "999"
);

getAlert(
  "fire-call",
  "❌ You do not have enough coins to make call",
  "📞 Calling Fire Service 999...", "Fire Service", "999"
);

getAlert(
  "child-call",
  "❌ You do not have enough coins to make call",
  "📞 Calling Women and Child Helpline 109...", "Women and Child Helpline", "109"
);

getAlert(
  "ambulence-call",
  "❌ You do not have enough coins to make call",
  "📞 Calling Ambulence 1994-999999...", "Ambulence", "1994-999999"
);

getAlert(
  "anti-call",
  "❌ You do not have enough coins to make call",
  "📞 Calling Anti Corruption Helpline 106...", "AC Helpline", "106"
);

getAlert(
  "electricity-call",
  "❌ You do not have enough coins to make call",
  "📞 Calling Electricity Helpline 16216...", "Electricity Helpline", "16216"
);

getAlert(
  "brac-call",
  "❌ You do not have enough coins to make call",
  "📞 Calling BRAC 16445...", "BRAC", "16445"
);

getAlert(
  "railway-call",
  "❌ You do not have enough coins to make call",
  "📞 Calling Bangladesh Railway 163...", "Bangladesh Railway", "163"
);

document.getElementById("clear-btn").addEventListener("click",function(){
document.querySelectorAll(".history-parent").style.display = "none"
 
})