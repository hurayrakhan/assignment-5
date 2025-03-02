
document.getElementById("btn-discover").addEventListener("click", function(){
    window.location.href = "/questions.html";
})

const buttonCompleate = document.querySelectorAll(".btn-compleate");

let time = new Date();
let formattedTime = time.toLocaleString();
const dateTime = document.getElementById("date-time").innerText

const liveDateTime = formattedTime;
console.log(liveDateTime)


for(const compleatebutton of buttonCompleate){
    const btnCompleate = compleatebutton;
    btnCompleate.addEventListener("click", function(){

        btnCompleate.disabled = true;

        alert("Board Updated Successfully.");

        let taskNumber = getElementTextById("task-number");
        const taskSum = taskNumber - 1;
        if(taskSum >= 0) {
            document.getElementById("task-number").innerText = taskSum;
        }

        let credit = getElementTextById("credit");
        const sum = credit + 1;
        if(sum > 0){
            document.getElementById("credit").innerText = sum;
        }

        if(sum >= 29){
            alert("Congrats!!! You have completed all the current task.")
        }


        
        
        

        const activityLog = document.getElementById("activityLog");
        const activities = document.createElement("p");
        activities.classList.add(
            "p-4",
            "bg-[#F4F7FF]",
            "rounded-xl",
            "shadow-md"
        )

        const cardTitle = document.querySelectorAll(".card-title")
        for(const title of cardTitle){
            textTitle = title.innerText
            console.log(textTitle)
            
        }
        activities.innerText = `You have complete the tast ${textTitle} at ${liveDateTime} `
        activityLog.appendChild(activities);

        
        
    

        
        
    });
    
}

document.getElementById("clear-history").addEventListener("click", function(){
    document.getElementById("activityLog").innerHTML = "";
})