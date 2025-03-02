
document.getElementById("btn-discover").addEventListener("click", function(){
    window.location.href = "blog.html";
});

let time = new Date();
let formattedTime = time.toLocaleString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true,
    day: '2-digit',
    month: 'long',
    year: 'numeric'
});
const dateTime = document.getElementById("date-time").innerText = formattedTime;

const buttonComplete = document.querySelectorAll(".btn-compleate");

for(const completeButton of buttonComplete){
    const btnComplete = completeButton;
    btnComplete.addEventListener("click", function(){

        btnComplete.disabled = true;
        btnComplete.innerText = "Completed"

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
        // activity log 
        const activityLog = document.getElementById("activityLog");
        const activities = document.createElement("p");
        activities.classList.add(
            "p-4",
            "bg-[#F4F7FF]",
            "rounded-xl",
            "shadow-md"
        )
        // get card-title
        let card = btnComplete.closest('.card');
        let title = card.querySelector('.card-title').innerText;

        activities.innerText = `You have complete the task ${title} successfully at ${formattedTime} `;
        activityLog.appendChild(activities);
                        
    });    
}
// random background color added
document.getElementById("random-bg").addEventListener("click", function(){
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
})
// clear history
document.getElementById("clear-history").addEventListener("click", function(){
    document.getElementById("activityLog").innerHTML = "";
})