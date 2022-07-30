const $mytext = document.querySelector(".mytext");

// 글자 모음
const letters = ['G,I,R,I,B,O,Y'];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {
    const letter = letters[i].split(',');

    while (letter.length) {
        await wait(speed);
        $mytext.innerHTML += letter.shift();
    }

    // 잠시 대기
    await wait(100);

    // 지우는 효과
    if (letters[i + 1]) remove();
}

// 글자 지우는 효과
const remove = async () => {
    const letter = letters[i].split('');

    while (letter.length) {
        await wait(speed);

        letter.pop();
        $mytext.innerHTML = letter.join('');
    }

    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i++;
    typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1700);


// 키워드 시작
let target = document.querySelectorAll('.btn_open');
let btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
let targetID;

// 팝업 열기
for(let i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(let j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}