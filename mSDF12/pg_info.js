var total_page = 9;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

//오디오 배열 선언, 페이지 수 대로 배열에 mp3 넣기
const audioArray = [];
for (j = 1; j <= total_page; j++) {
    audio = new Audio(`./assets/audios/${j}.mp3`);
    audioArray.push(audio);
}

//정답 처리할 영역 클래스 명
//-> 후에 for 문 써서 pg_n_answer 로 통일하기
const pageClickArea = [
    {
        page: 0,
        correctAnswer: "pg_0_answer"
    },
    {
        page: 1,
        correctAnswer: "pg_1_answer"
    },
    {
        page: 2,
        correctAnswer: "pg_2_answer"
    },
    {
        page: 3,
        correctAnswer: "pg_3_answer"
    },
    {
        page: 4,
        correctAnswer: "pg_4_answer"
    },
    {
        page: 5,
        correctAnswer: "pg_5_answer"
    },
    {
        page: 6,
        correctAnswer: "pg_6_answer"
    },
    {
        page: 7,
        correctAnswer: "pg_7_answer"
    },
    {
        page: 8,
        correctAnswer: "pg_8_answer"
    },
    {
        page: 9,
        correctAnswer: "pg_9_answer"
    },
];

const inputAnswer = [
    {},
    {},
    {},
    {
        page: 3,
        inputableAnswer: "서울디지털재단"
    },
    {},
    {},
    {},
    {},
    {},
    {},
];

const modalCont = [
    {
        page: 0,
        instruction: "‘시작하기’ 버튼을 클릭하세요."
    },
    {
        page: 1,
        instruction: "노란 택시 버튼을 눌러주세요."
    },
    {
        page: 2,
        instruction: "출발지와 도착지 설정입니다. GPS의 내 위치가 현재 위치로 자동으로 선택됩니다. 현재 위치가 맞는지 확인하고, 도착지 입력창을 눌러주세요."
    },
    {
        page: 3,
        instruction: "도착지 입력창에 ‘서울디지털재단’을 입력하고 키보드에 확인 또는 이동을 눌러주세요."
    },
    {
        page: 4,
        instruction: "지도에 표시된 위치를 확인하고, ‘도착지로 설정’ 버튼을 눌러주세요."
    },
    {
        page: 5,
        instruction: "택시의 유형을 선택할 수 있는 화면입니다. 설명을 읽고 알맞은 택시를 선택합니다. 실습에서는 ‘일반호출’을 눌러주세요."
    },
    {
        page: 6,
        instruction: "일반 택시를 호출합니다. 예상 가격을 확인하고 호출하기 버튼을 눌러주세요."
    },
    {
        page: 7,
        instruction: "호출할 택시를 찾고있습니다. 실습에서는 화면을 눌러 다음으로 진행해 주세요."
    },
    {
        page: 8,
        instruction: "택시가 호출되었습니다. 택시의 번호, 현재 위치, 그리고 내 위치까지 예상 소요시간을 확인할 수 있습니다. 택시 번호를 꼭 확인하고 탑승해주세요."
    },
];



//*******************************************************************************
//**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_pos_6 = document.querySelector('.cursor_pos_6');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
cursor_wrap_4.style.zIndex = "100";
cursor_wrap_5.style.zIndex = "100";
cursor_wrap_6.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,0],
            },
        },
    ],
});
createPopper(cursor_pos_2, cursor_wrap_2, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-35,100],
            },
        },
    ],
});
createPopper(cursor_pos_3, cursor_wrap_3, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [70,80],
            },
        },
    ],
});
//cursor_wrap_4.style.left="60%";

createPopper(cursor_pos_4, cursor_wrap_4, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [250,10],
            },
        },
    ],
});
createPopper(cursor_pos_5, cursor_wrap_5, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [25,200],
            },
        },
    ],
});
createPopper(cursor_pos_6, cursor_wrap_6, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [250,10],
            },
        },
    ],
});