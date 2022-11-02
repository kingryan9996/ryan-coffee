let arr = [];
let num = arrow;

//1. 클릭이벤트 만들기
//2. 클릭한 아이템의 값 알아내기
//3. 알아낸 값을 담을 변수 만들기
//4. 담은 변수를 이용해서 조건문 함수만들기
//5. 


const yellow = document.getElementById("menu-board");

function arrow(e){
    const result = e.target.dataset.value;
    count(result)      
    return;
}

yellow.addEventListener("click",arrow);


function count (i) {
    if (i < 6) {
        console.log('false');
    } else {
        console.log('true');
    }
}



