function showOnly(id){
    const all = document.getElementById('all-job')
    const interview = document.getElementById('interview')
    const rejected = document.getElementById('rejected')
    
    

    all.classList.add('hidden')
    interview.classList.add('hidden')
    rejected.classList.add('hidden')
    
    
 

    const select = document.getElementById(id)
    select.classList.remove('hidden')

}


const all = document.getElementById('all-job')
const allState = document.getElementById('all-state')
const interviewState = document.getElementById('interview-state')
const rejectedState = document.getElementById('rejected-state')
const emptyState = document.getElementById('empty-state')

if(allState.children.length<1){
    emptyState.classList.remove("hidden")
}
if(interviewState.children.length<1){
    emptyState.classList.remove("hidden")
}
if(rejectedState.children.length<1){
    emptyState.classList.remove("hidden")
}


document.getElementById('all-job').addEventListener('click',function(event){    
    const clickElement = event.target;
    const card = clickElement.closest(".card")
    const parent = card.parentNode;
    const status = card.querySelector(".status")

    if(clickElement.classList.contains("interview")){
        status.innerText = "Interviewed"
        interview.appendChild(card)
        updateState()
    }
    if(clickElement.classList.contains("rejected")){
        status.innerText = "Rejected"
        rejected.appendChild(card)
        updateState()
    }
    if(clickElement.classList.contains("delete")){
        parent.removeChild(card);
        updateState()
    }
})

function updateState(){
    allState.innerText = all.children.length;
    interviewState.innerText = interview.children.length;
    rejectedState.innerText = rejected.children.length;
}
updateState()
