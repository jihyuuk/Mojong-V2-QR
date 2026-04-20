import React, { createContext, useState, useContext, useEffect } from "react";
import api from "./api";

//1. Context 생성
const MenuContext = createContext();

//2. Provider 컴포넌트 생성
export function MenuProvider({ children }) {

    const [isLoading, setIsLoading] = useState(false);
    // const [menu, setMenu] = useState([]);

    const [menu, setMenu] = useState([
    {
        "categoryId": 1,
        "name": "일반고추",
        "items": [
            {
                "id": 14,
                "name": "복합매끄니",
                "description": "50구(무색) / 맵기-중",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/0a637c59-5302-41b2-bf92-d79a5cf1a93f.jpg",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 82,
                "name": "왕조",
                "description": "50구(무색) / 맵기-중 / 하우스용",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/2ad04128-7ccd-41fb-bea0-5ad7eb88b899.jpg",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 18,
                "name": "티탄스트롱",
                "description": "50구(금색줄) / 맵기-상/선",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/f620111c-0a71-4715-941e-fc1d7f90ca49.jpg",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 16,
                "name": "케이스타",
                "description": "72구/초록판/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/f3987482-5fbc-4b1a-9e2e-fcdd35a0fb2c.jpg",
                "price": 400,
                "stock": 100000
            },
            {
                "id": 83,
                "name": "불꽃스타",
                "description": "50구(빨간줄) / 맵기 - 하/선",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/b796a683-2208-4c24-b860-96bb5b302c94.jpg",
                "price": 500,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 2,
        "name": "청양고추",
        "items": [
            {
                "id": 6,
                "name": "PR큰청양",
                "description": "50구 / 빨간판",
                "photo": "",
                "price": 600,
                "stock": 100000
            },
            {
                "id": 7,
                "name": "큰청양",
                "description": "50구/흐린빨간판 + 파란줄",
                "photo": "",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 8,
                "name": "청양",
                "description": "72구/ 빨간판",
                "photo": "",
                "price": 400,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 3,
        "name": "풋고추",
        "items": [
            {
                "id": 9,
                "name": "오이맛풋고추",
                "description": "50구 / 초록판",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/6eb44935-b775-49be-9f05-a5c4243ac9ec.jpg",
                "price": 600,
                "stock": 100000
            },
            {
                "id": 10,
                "name": "미인풋고추",
                "description": "50구 / 파란판",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/b4109a8b-9f5b-40de-9805-2c101f88ffdd.jpg",
                "price": 600,
                "stock": 100000
            },
            {
                "id": 19,
                "name": "가지고추",
                "description": "컵/무색/1판-15개/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/dae5e377-11b4-4468-9ac6-f98ecebec60b.jpg",
                "price": 2000,
                "stock": 100000
            },
            {
                "id": 20,
                "name": "당조고추",
                "description": "컵/하늘(파란줄)/1판-16개/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/7a0de2f3-f751-45b4-bf76-e05789f8253a.jpg",
                "price": 2000,
                "stock": 100000
            },
            {
                "id": 21,
                "name": "롱그린풋고추",
                "description": "50구/연두판/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/b41588fd-07a5-4ec5-ac70-a77755bf4b29.jpg",
                "price": 600,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 6,
        "name": "토마토",
        "items": [
            {
                "id": 25,
                "name": "큰토마토(도태랑)",
                "description": "50구/파랑판/무색판/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/03f4edd1-e076-4f02-bafc-0908db0efd93.jpg",
                "price": 800,
                "stock": 100000
            },
            {
                "id": 24,
                "name": "블랙아톰",
                "description": "40구 / 무색 /선",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/ea29ca8b-9c0a-418c-8b7f-9c3ab24541bd.jpg",
                "price": 3000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 7,
        "name": "방울토마토",
        "items": [
            {
                "id": 41,
                "name": "대추방울(빨강)",
                "description": "50구/빨강판",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/5b2116a9-9bbd-4fd0-b3e1-b4ab9c4f835d.jpg",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 43,
                "name": "대추방울(노랑)",
                "description": "40구/주황줄/로얄골드/선",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/8a580fa9-8176-4cf8-9c4d-0feec80e665e.jpg",
                "price": 1500,
                "stock": 100000
            },
            {
                "id": 42,
                "name": "대추방울(주황색)",
                "description": "40구/무색판에금색/비타골드/선",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/d4283a9e-d3a3-4848-8cf9-110aa0fad0b5.jpg",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 45,
                "name": "샤인머스켓",
                "description": "40구/금색줄/그린슈가/선",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/378f70df-3b4b-432f-b431-11c526488caa.jpg",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 44,
                "name": "망고대추(노랑)",
                "description": "40구/노랑줄/선",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/b25f1b3c-71b1-4aea-8514-8323d4ee2b1d.jpg",
                "price": 1500,
                "stock": 100000
            },
            {
                "id": 48,
                "name": "흑색대추방울",
                "description": "32구/작은흑방울/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/e8600afd-9950-494e-b695-50eb4086d2d6.jpg",
                "price": 2000,
                "stock": 100000
            },
            {
                "id": 47,
                "name": "젤리방울토마토",
                "description": "컵(1판 20개)/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/6e3bf3eb-9ac7-4617-a94b-5818e6b9f527.jpg",
                "price": 3000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 15,
        "name": "꽈리고추",
        "items": [
            {
                "id": 34,
                "name": "꽈리고추",
                "description": "50구/찐노랑-식/회색판-귀",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/62e0d680-d9ce-467d-8d20-4d7fa23bff1e.jpg",
                "price": 400,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 14,
        "name": "파프리카",
        "items": [
            {
                "id": 30,
                "name": "파프리카(빨강)",
                "description": "컵/1판12개/빨간칠/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/ada5ea8b-9d8b-4a70-85ac-36fb09d7c777.jpg",
                "price": 1500,
                "stock": 100000
            },
            {
                "id": 31,
                "name": "파프리카(주황)",
                "description": "컵/1판12개/은색칠/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/8b9820d7-15e6-4acf-95b8-bc1f86397cd3.jpg",
                "price": 1500,
                "stock": 100000
            },
            {
                "id": 29,
                "name": "파프리카(노랑)",
                "description": "컵/1판12개/노란칠/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/410a105e-3238-4baa-9939-b8b9aec018f8.jpg",
                "price": 1500,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 8,
        "name": "오이/가지",
        "items": [
            {
                "id": 28,
                "name": "오이",
                "description": "50구/백다다기",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/a22a0f29-e01c-4d93-976c-02b844afbb67.jpg",
                "price": 400,
                "stock": 100000
            },
            {
                "id": 26,
                "name": "장가지",
                "description": "50구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/0e786b00-f677-410b-a678-f6dcaa7ad5c8.jpg",
                "price": 400,
                "stock": 100000
            },
            {
                "id": 85,
                "name": "단가지",
                "description": "50구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/6df3acbf-aadf-4757-84ca-6e87d09bc95c.jpg",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 27,
                "name": "노각오이",
                "description": "50구/노랑판/찐노랑판/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/dc96fd0e-4ace-4e91-a017-f246c5ef8f62.jpg",
                "price": 400,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 11,
        "name": "호박",
        "items": [
            {
                "id": 2,
                "name": "애호박",
                "description": "50구 / 초록판",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/5098913f-769b-4175-91e7-82cf676e4010.jpg",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 3,
                "name": "풋호박",
                "description": "50구/파란판/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/c01b1109-bb9e-4ddf-b53f-1104bce418c8.jpg",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 4,
                "name": "맷돌호박",
                "description": "50구/ 노랑판/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/7f397278-9f6b-47ed-a224-89f6c3f38112.jpg",
                "price": 600,
                "stock": 100000
            },
            {
                "id": 22,
                "name": "단호박",
                "description": "50구/무색/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/0be32941-a922-4d48-99b5-e698bd613acf.jpg",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 23,
                "name": "보우짱",
                "description": "컵 /1판-20개/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/2cf7a625-809e-4ce2-95a4-f9387793aa84.jpg",
                "price": 3000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 13,
        "name": "수박",
        "items": [
            {
                "id": 11,
                "name": "수박",
                "description": "32구/50구-32/꿀/무색/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/dcd72153-7180-4839-baa1-ff7482a0c94d.jpg",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 12,
                "name": "복수박",
                "description": "50구/더존복/무파/귀",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/ce1b3ca4-4b6a-4b95-bef9-16c5e21b08e8.jpg",
                "price": 2000,
                "stock": 100000
            },
            {
                "id": 49,
                "name": "망고수박",
                "description": "32구 / 금색칠 / 속이 노란색/선",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/744faf45-44ff-432f-a35e-64107732bcc2.jpg",
                "price": 2000,
                "stock": 100000
            },
            {
                "id": 13,
                "name": "애플수박",
                "description": "32구/캣치볼/귀",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/a5b5ad20-725c-463b-b578-2160488097d0.jpg",
                "price": 3000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 12,
        "name": "참외",
        "items": [
            {
                "id": 33,
                "name": "참외",
                "description": "32구/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/ffdfee12-81fc-40f3-a34c-fc03299b26f8.jpg",
                "price": 500,
                "stock": 100000
            },
            {
                "id": 32,
                "name": "애플참외",
                "description": "32구/무색노란줄/그린볼/귀",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/4ab0b798-33b0-43c5-a362-8895b767d787.jpg",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 84,
                "name": "망고참외",
                "description": "컵/한판20/식",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/79f39e08-f785-40e6-a6ac-dc904f2ae5de.jpg",
                "price": 3000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 17,
        "name": "옥수수",
        "items": [
            {
                "id": 37,
                "name": "얼룩찰옥수수(1줄)",
                "description": "72구/귀",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/1bd6c8b1-0a34-4756-bbc8-f0d195b0e480.jpg",
                "price": 1500,
                "stock": 100000
            },
            {
                "id": 38,
                "name": "얼룩찰옥수수(한판)",
                "description": "72구/귀",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/37fc56c5-bb32-41f2-9df4-8b161f3d077b.jpg",
                "price": 16000,
                "stock": 100000
            },
            {
                "id": 39,
                "name": "옥수수(1줄)",
                "description": "72구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/b1f3d8de-6689-4b26-a956-27da53c39b0e.jpg",
                "price": 1500,
                "stock": 100000
            },
            {
                "id": 40,
                "name": "옥수수(한판)",
                "description": "72구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/a80b0bb6-c127-4929-8461-6b9d881b805e.jpg",
                "price": 16000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 18,
        "name": "기타모종",
        "items": [
            {
                "id": 54,
                "name": "당귀(소)",
                "description": "주황컵",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/d3e07de8-20f9-424b-a3e4-2f56245fa040.jpg",
                "price": 3000,
                "stock": 100000
            },
            {
                "id": 53,
                "name": "당귀(대)",
                "description": "흰컵",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/3ce0e160-1c4f-407d-b2eb-ab9e2395191e.jpg",
                "price": 5000,
                "stock": 100000
            },
            {
                "id": 55,
                "name": "대파반판(100개)",
                "description": "100개",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/ac584656-0881-4d93-bdc2-60e8ab95e5d9.jpg",
                "price": 6000,
                "stock": 100000
            },
            {
                "id": 56,
                "name": "대파한판(200개)",
                "description": "200개",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/2e98ba34-cec5-45d1-af72-081d1175f9be.jpg",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 51,
                "name": "강낭콩(1줄-5개)",
                "description": "50구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/c1f89742-565b-4cfb-a50b-bb05dc8a957c.jpg",
                "price": 1500,
                "stock": 100000
            },
            {
                "id": 52,
                "name": "강낭콩(한판-50개)",
                "description": "50구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/f9987294-50a1-4072-95c1-511a0a0a8253.jpg",
                "price": 12000,
                "stock": 100000
            },
            {
                "id": 35,
                "name": "땅콩(1줄-5개)",
                "description": "50구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/336afcfe-240a-4376-87af-5c2108649e74.jpg",
                "price": 1500,
                "stock": 100000
            },
            {
                "id": 36,
                "name": "땅콩(한판-50개)",
                "description": "50구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/40bb672d-85c0-4c77-bbf7-d1e0a4396143.jpg",
                "price": 14000,
                "stock": 100000
            },
            {
                "id": 50,
                "name": "감자",
                "description": "컵",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/24ac6aef-7cc4-4329-ad90-fe0ba23b1fe4.jpg",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 57,
                "name": "딸기",
                "description": "트레이",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/a81e09bd-dd7f-4299-a935-abedde7b3a6e.jpg",
                "price": 2000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 22,
        "name": "쌈채류",
        "items": [
            {
                "id": 58,
                "name": "쌈채(1줄-6개)",
                "description": "72구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/c9faf1b8-d4fd-4a37-aa2b-364a9a88789e.jpg",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 59,
                "name": "쌈채(한판-72개)",
                "description": "72구",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/bfb8cb73-02b2-4d48-94c2-396f639a91a9.jpg",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 92,
                "name": "꽃상추(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 93,
                "name": "꽃상추(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 94,
                "name": "청상추 (1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 95,
                "name": "청상추(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 96,
                "name": "청로메인(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 97,
                "name": "청로메인(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 102,
                "name": "적로메인(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 103,
                "name": "적로메인(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 98,
                "name": "청생채 (1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 99,
                "name": "청생채(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 101,
                "name": "적생채(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 100,
                "name": "적생채 (1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 104,
                "name": "먹치마(1줄- 6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 105,
                "name": "먹치마(1판-72개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 106,
                "name": "적오크(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 107,
                "name": "적오크(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 108,
                "name": "청오크(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 109,
                "name": "청오크(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 122,
                "name": "청치커리(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 123,
                "name": "청치커리(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 110,
                "name": "적치커리(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 111,
                "name": "적치커리(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 112,
                "name": "레드치커리(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 113,
                "name": "레드치커리(1판72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 114,
                "name": "쑥갓(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 115,
                "name": "쑥갓(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 116,
                "name": "양상추(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 117,
                "name": "양상추(1판-72개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 118,
                "name": "양배추(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 119,
                "name": "양배추(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 120,
                "name": "적양배추(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 121,
                "name": "적양배추(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            },
            {
                "id": 124,
                "name": "적겨자(1줄-6개)",
                "description": "",
                "photo": "",
                "price": 1000,
                "stock": 100000
            },
            {
                "id": 125,
                "name": "적겨자(1판-72개)",
                "description": "",
                "photo": "",
                "price": 10000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 21,
        "name": "고구마순",
        "items": [
            {
                "id": 87,
                "name": "꿀고구마",
                "description": "베니하루까 / 꿀밤고구마",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/102deb37-3f11-4c9b-b42c-3d5d23051ab6.jpg",
                "price": 9000,
                "stock": 100000
            },
            {
                "id": 89,
                "name": "호박고구마",
                "description": "호풍미",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/5c2f76e8-3e6f-47d5-a114-cc64b58cc4c2.jpg",
                "price": 9000,
                "stock": 100000
            },
            {
                "id": 88,
                "name": "밤고구마",
                "description": "진율미",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/b23b9ca6-41da-4b5f-90c2-81890c4f41a7.jpg",
                "price": 9000,
                "stock": 100000
            },
            {
                "id": 91,
                "name": "황금고구마",
                "description": "",
                "photo": "",
                "price": 9000,
                "stock": 100000
            },
            {
                "id": 90,
                "name": "고구마주입기",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/f1c79674-6301-4830-a8af-62e8418c1429.jpg",
                "price": 3000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 19,
        "name": "자재",
        "items": [
            {
                "id": 60,
                "name": "고추대 1.2m",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/6d817aeb-5851-4203-8708-219da9269fa6.jpg",
                "price": 600,
                "stock": 100000
            },
            {
                "id": 61,
                "name": "고추대 1.5m",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/f4a829f1-e64f-4da0-9b89-f3980cdcc3dd.jpg",
                "price": 700,
                "stock": 100000
            },
            {
                "id": 62,
                "name": "고추대 1.8m",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/c0ed65a8-d171-4c5c-b71c-cf74afad6287.jpg",
                "price": 800,
                "stock": 100000
            },
            {
                "id": 63,
                "name": "고추대 2m",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/2390698a-89e3-436f-81cb-4f74ae2862c4.jpg",
                "price": 900,
                "stock": 100000
            },
            {
                "id": 65,
                "name": "흑0.015*90*500",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/c37edd8d-4edf-403f-8f35-2b946ea85134.jpg",
                "price": 31000,
                "stock": 100000
            },
            {
                "id": 64,
                "name": "흑0.015*100*500",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/e9165fcc-36f7-4421-9df3-87c76761f334.jpg",
                "price": 36000,
                "stock": 100000
            },
            {
                "id": 66,
                "name": "흑0.015*120*500",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/3ede60fe-a4c9-4eba-a3c3-6b4168cb9df2.jpg",
                "price": 44000,
                "stock": 100000
            },
            {
                "id": 67,
                "name": "흑0.015*150*500",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/9e0b3962-0651-42b9-ac71-90651587f80d.jpg",
                "price": 54000,
                "stock": 100000
            },
            {
                "id": 76,
                "name": "흑 0.02*90*500",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/6641c0f8-7fc7-452e-8077-fa1ed6db0bcc.jpg",
                "price": 45000,
                "stock": 100000
            },
            {
                "id": 77,
                "name": "흑 0.02*105*500",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/d4f8f2b5-4a67-45f0-b78c-94b5956e396e.jpg",
                "price": 54000,
                "stock": 100000
            },
            {
                "id": 79,
                "name": "흑 0.02*120*500",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/23887b07-9ae4-4289-af11-16faf300bca6.jpg",
                "price": 60000,
                "stock": 100000
            },
            {
                "id": 78,
                "name": "흑 0.02*150*500",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/f27a82bb-1b90-409a-91df-9f2db880b8a1.jpg",
                "price": 76000,
                "stock": 100000
            },
            {
                "id": 68,
                "name": "흑0.02*180*500",
                "description": "",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/6f8a5e1b-ac1a-46ee-90b5-6b2fd81ad7ad.jpg",
                "price": 90000,
                "stock": 100000
            }
        ]
    },
    {
        "categoryId": 20,
        "name": "비료/사료",
        "items": [
            {
                "id": 71,
                "name": "퇴비",
                "description": "20kg",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/22aa420e-092e-470c-90a8-defea842b073.jpg",
                "price": 4500,
                "stock": 100000
            },
            {
                "id": 80,
                "name": "이탈크로스",
                "description": "20kg",
                "photo": "",
                "price": 25000,
                "stock": 100000
            },
            {
                "id": 75,
                "name": "유박",
                "description": "",
                "photo": "",
                "price": 11000,
                "stock": 100000
            },
            {
                "id": 72,
                "name": "복합비료",
                "description": "",
                "photo": "",
                "price": 21000,
                "stock": 100000
            },
            {
                "id": 74,
                "name": "요소",
                "description": "",
                "photo": "",
                "price": 23000,
                "stock": 100000
            },
            {
                "id": 73,
                "name": "상토",
                "description": "",
                "photo": "",
                "price": 8000,
                "stock": 100000
            },
            {
                "id": 81,
                "name": "고구마비료",
                "description": "20kg",
                "photo": "",
                "price": 27000,
                "stock": 100000
            },
            {
                "id": 86,
                "name": "추비한방",
                "description": "15kg",
                "photo": "",
                "price": 35000,
                "stock": 100000
            },
            {
                "id": 70,
                "name": "닭사료",
                "description": "20kg",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/9a686a57-306e-4e42-bcc9-348a25701ed5.jpg",
                "price": 16000,
                "stock": 100000
            },
            {
                "id": 69,
                "name": "개사료",
                "description": "15kg",
                "photo": "https://mojong-bucket2.s3.ap-northeast-2.amazonaws.com/7efeba91-5a53-44a4-8c0b-6cb0d37c5a73.jpg",
                "price": 18000,
                "stock": 100000
            }
        ]
    }
]);

    //메뉴 불러오기
    // useEffect(() => {
    //     fetchMenu();
    // }, []);


    //메뉴 불러오는 함수
    const fetchMenu = () => {
        //토큰이 있을 때만 실행

        setIsLoading(true);

        api.get('/guest/menu')
            .then((response) => {
                //메뉴 세팅
                setMenu(response.data);
                //로딩 끝
                setIsLoading(false);
            })
            .catch((error) => {
                alert("상품을 불러오지 못 했습니다. 관리자에게 문의해주세요.");
            });
    }



    return (
        <MenuContext.Provider value={{ isLoading, menu, setMenu, fetchMenu }}>
            {children}
        </MenuContext.Provider>
    );
}

//3. Custom Hook으로 사용
export function useMenu() {
    return useContext(MenuContext);
}