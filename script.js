const inputNode = document.querySelector(".input");
const btnNode = document.querySelector(".btn");
const outputNode = document.querySelector(".output");

let state = {
    title: ''
}

let title = '';

function changeState(newState) {
    state = {...newState};
}

function render() {
    outputNode.innerHTML = `
        <h1>${state.title}</h1>
    `;
}

btnNode.addEventListener("click", function(){
    changeState({
        title: inputNode.value
    });
    render();
});