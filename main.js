// 컴퓨터는 게임이 시작할때 랜덤한 숫자를 뽑는다
// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That's right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI

// 변수
let computerNumber = 0; // 램덤숫자
let guessButton = document.getElementById("guessButton"); // 게임시작한는 버튼
let resetButton = document.getElementById("resetButton"); // 리셋버튼
let guess = document.querySelector("#guess"); // 입력한 숫자
let resultMessage = document.querySelector("#resultMessage"); // 단축된 상태
let mainImg = document.querySelector(".main-img"); // 이미지
let statusArea = document.querySelector(".status-area"); // 남은횟수
let chances = 5; // 남은횟수
let userGuessList = []; // 입력한 숫자의 목록

// 이벤트
guessButton.addEventListener("click", checkGuess); // go 버튼 클릭시
resetButton.addEventListener("click", resetGame); // reset 버튼 클릭시
guess.addEventListener("focus", function (event) {
    event.target.value = "";
}); // 입력상장 클릭시 비우기

// 램덤 숫자 가져오기
function pickNumber() {
    computerNumber = Math.floor(Math.random() * 100) + 1; // 숫자를 뽑립니다. 1~100 범위 밖의 숫자를 뽑립니다.
    console.log("램덤숫자 : ", computerNumber);
}

function checkGuess() {
    let userGuess = parseInt(guess.value);
    console.log("입력한 숫자 : ", userGuess);

    if (userGuess < 1 || userGuess > 100) {
        alert("1~100 범위 밖의 숫자를 입력해야 합니다.");
        return;
    }
    if (userGuessList.includes(userGuess)) {
        resultMessage.textContent = "중복된 번호 입니다. 다시 입력해주세요";
        return;
    }

    chances--; // 1개씩 감소
    userGuessList.push(userGuess); // 입력한 숫자를 목록(배열)에 추가
    statusArea.textContent = "남은횟수 : " + chances + "회";
    console.log("입력한 숫자 목록 : ", userGuessList);

    // 참여횟수 종료시
    if (chances < 1) {
        mainImg.src = "https://blog.kakaocdn.net/dn/bdLa2o/btqCKzRHK5c/LMQaVBNjPHYQsPVzS6Znvk/img.gif";
        resultMessage.textContent = "GAME OVER";
        guessButton.disabled = true; //버튼 비활성화
        return;
    }

    // 입력한 숫자 비교
    if (computerNumber > userGuess) {
        // 컴퓨터가 뽑은 숫자보다 작으면
        mainImg.src = "https://cacidsign.kr/web/product/big/cacidsign_2799.gif";
        resultMessage.textContent = "Up!";
    } else if (computerNumber < userGuess) {
        // 컴퓨터가 뽑은 숫자보다 크면
        mainImg.src = "https://cacidsign.kr/web/product/big/201808/32b44658155b1187f624713cb0aa675c.gif";
        resultMessage.textContent = "Down!";
    } else {
        // 정답인 경우
        mainImg.src = "https://img.extmovie.com/files/attach/images/148/259/848/048/70c550dd315752ea24d1269e62068478.gif";
        resultMessage.textContent = "That's right!";
    }
}
function resetGame() {
    mainImg.src = "https://crepe.land/tiptap/v/vh/vht4zfraeziufhxs12zwpdorcjvmxyjd_slotmachine_color.spine.gif";
    resultMessage.textContent = "여기에 결과 표시 됩니다.";
    chances = 5; // 남은횟수
    userGuessList = []; // 입력한 숫자의 목록 초기화
    statusArea.textContent = "남은횟수 : " + chances + "회";
    guessButton.disabled = false; //  버튼  활성화
    guess.value = ""; // 입력 초기화
}
pickNumber();

// 게임설명 팝업열기
function showPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}
// 게임설명 팝업닫기
function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}
