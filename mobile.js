let addtodobutton = document.getElementById('추가버튼');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('검색창');

addtodobutton.addEventListener('click', function(){
        var paragraph = document.createElement('p')
        paragraph.classList.add('paragraph-styling');
                paragraph.innerText = inputfield.value;
        todocontainer.appendChild(paragraph);        
        inputfield.value = "";
        
})