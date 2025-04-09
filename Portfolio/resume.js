const projects = document.getSelection();

function openProject(){
    switch(projects){
        case "project1":
            window.open('https://github.com/Chipsyyyyy/JavaScript/tree/2052285c71aeacfc4b95394792a01019e22f4a90/Advanced%20Calculator', '_blank');
            break;
        case "project2":
            window.open('', '_blank');
    }

}