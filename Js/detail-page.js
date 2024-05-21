let selected_seat = null;


//쿼리 스트링으로부터 영화 정보를 가져옴.
const urlParams = new URLSearchParams(window.location.search); 
let movie_name = null;
const id = urlParams.get("id");
if (id == '1') {
    movie_name = "하이큐";
} else if(id == '2') {
    movie_name = "범죄도시4";
}else {
    movie_name = "그녀가 죽었다";
}


document.getElementById("a1").addEventListener("click", function() {
    console.log(this.id);
})

document.addEventListener('DOMContentLoaded', function() {
    // seat_a 클래스 내 모든 div 요소에 대해 클릭 이벤트 추가
    document.querySelectorAll('.seat_a > div').forEach(function(div) {
        div.addEventListener('click', function() {
            alert(this.id + ' 버튼이 클릭되었습니다!');
        });
    });
});

const buttons = document.querySelectorAll(".seat-button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // 모든 버튼의 선택 효과 제거
        buttons.forEach(btn => btn.classList.remove("selected-seat"));
        
        // 클릭한 버튼에 선택 효과 추가
        this.classList.add("selected-seat");
        
        // 선택된 좌석 업데이트
        selected_seat = this.id;

        // 좌석 선택 후 URL 생성
        const movie_amount = 12000;
        const params = new URLSearchParams();
        params.append("movie_name", movie_name);
        params.append("movie_amount", movie_amount);
        params.append("selected_seat", selected_seat);
        const queryString = params.toString();

        const url = "../HTML/pay.html?" + queryString;
        console.log(url);
    });
});











