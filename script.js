const items = [];


function isValid(text){
    return Boolean(text);
}


function doesContains(text) {
    return items.includes(text);
}


function showOutput(text){
    const list = document.getElementById("list__show");
    list.append(text);
}


function userInput(){
    const user__value = document.getElementById("user__input").value;
   
    document.getElementById("user__input").value = "";


    if(!isValid(user__value)){
        window.alert("invalid input");
        return;
    }


    if(doesContains(user__value)){
        window.alert(`${user__value} already exist`);
        return;
    }


    items.push(user__value);
    let lii = document.createElement("h2");
    lii.innerText = user__value;


    showOutput(lii);
}
