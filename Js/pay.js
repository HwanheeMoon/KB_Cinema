// URL 쿼리스트링에서 영화 정보 가져오기
const urlParams = new URLSearchParams(window.location.search);
const movieName = urlParams.get('movie_name');
const movieAmount = urlParams.get('movie_amount');
const seat = urlParams.get('selected_seat')

// 영화 정보를 페이지에 표시
document.getElementById('movie-name').textContent = movieName;
document.getElementById('movie-amount').textContent = movieAmount;
document.getElementById('movie-seat').textContent = seat;
// 결제 폼 제출 처리
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('결제 완료 되었습니다! 영화 재밌게 보세요.');
    window.location.href = '../HTML/movie_list.html'; // 적절한 경로로 수정
});
