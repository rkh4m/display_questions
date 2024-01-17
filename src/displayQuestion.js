function DisplayQuestions(data, boxId){
    var box = document.getElementById(boxId);

    box.innerHTML = data;
}

export default DisplayQuestions;