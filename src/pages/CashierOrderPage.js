import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../utils/ShoppingCartProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axiosWithToken from "../utils/axiosWithToken";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import { useMenu } from "../utils/MenuProvider";
import api from "../utils/api";

function CashierOrderPage() {

    const { fetchMenu } = useMenu();

    const location = useLocation();
    const orderData = location?.state?.orderData;

    //장바구니
    const { cartItems, setCartItems } = useShoppingCart();

    //리액트 라우터
    const navigate = useNavigate();

    //주문상태
    const [orderState, setOrderState] = useState("loading");
    const [saleId, setSaleId] = useState(-1);

    //주문 로직
    useEffect(() => {

        //검증
        if (!cartItems || cartItems.length === 0 || !orderData) {
            navigate("/", { replace: true });
            return;
        }

        //서버로 전송
        api.post("/guest/order", orderData)
            .then((response) => {
                //장바구니, 메뉴 초기화
                setCartItems([]);
                fetchMenu();
                //상태적용
                setSaleId(response.data.saleId);
                setOrderState("success");
            })
            .catch((error) => {
                setOrderState("fail");
            });

    }, []);


    const handleGoHome = () => {
        // 사용자에게 확인 메시지 표시
        const isConfirmed = window.confirm(
            "주문 번호를 직원에게 보여주셨나요?"
        );

        if (isConfirmed) {
            // '확인'을 눌렀을 때만 홈으로 이동 (기존 로직)
            navigate(-2);
        }
        // '취소'를 누르면 아무 일도 일어나지 않고 현재 화면에 유지됩니다.
    };


    return (
        <div className="z-1 position-absolute top-0 start-0 w-100 h-100 bg-white">

            {/* 로딩 */}
            {orderState === "loading" &&
                <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                    <div className="circle-loader" />
                    <div className="mt-3">주문 처리중입니다.</div>
                </div>
            }

            {/* 성공 */}
            {orderState === "success" &&
                <div className='d-flex flex-column h-100 bg-light'>

                    {/* 상단 섹션: 성공 아이콘 및 메시지 */}
                    <div className="d-flex flex-column flex-grow-1 align-items-center justify-content-center px-4">

                        {/* 로딩 완료 체크 아이콘 (기존 유지 혹은 크기 조절) */}
                        <div className="circle-loader load-complete mb-4">
                            <div className="checkmark draw"></div>
                        </div>

                        <h2 className="fw-bold mb-2">주문 신청 완료!</h2>
                        <p className="text-muted text-center">아래 주문 번호를 직원에게 보여주세요.</p>

                        {/* 주문 번호 강조 카드 */}
                        <div className="bg-white shadow-sm rounded-4 w-100 py-5 mt-4 d-flex flex-column align-items-center border border-primary">
                            <span className="text-primary fw-bold mb-2">[ 주문 번호 ]</span>
                            <div style={{ fontSize: '5rem', lineHeight: '1' }} className="fw-black text-dark">
                                {saleId}
                            </div>
                        </div>

                        {/* 안내 박스 */}
                        <div className="mt-5 p-3 bg-white rounded-3 border w-100">
                            <div className="d-flex align-items-center gap-2 text-secondary mb-2">
                                <i className="bi bi-info-circle-fill"></i>
                                <span className="fw-bold">결제 안내</span>
                            </div>
                            <ul className="small text-secondary mb-0 ps-3">
                                <li>화면을 카운터 직원에게 보여주세요.</li>
                                <li>직원이 확인 후 결제가 진행됩니다.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 하단 버튼 */}
                    <Footer
                        value={"처음으로"}
                        show={true}
                        onClick={handleGoHome}
                    />
                </div>
            }

            {/* 실패 */}
            {orderState === "fail" &&
                <div className='d-flex flex-column h-100'>

                    {/* 로딩 서클 */}
                    <div className="d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                        <div className="circle-loader load-fail">
                            <div className="exclamation"></div>
                        </div>
                        {/* 주문 실패 메시지 */}
                        <div className="mt-3 fs-1 fw-semibold text-danger">주문 실패!</div>
                        <div className="mt-4">주문 처리에 실패했습니다</div>
                        <div className="mt-1">관리자에게 문의하세요.</div>
                    </div>

                    <footer className="p-2 pb-3 border-top">
                        <Button variant="secondary" className="w-100 fs-5 fw-semibold p-2 rounded-3" onClick={() => navigate(-1)}>
                            뒤로가기
                        </Button>
                    </footer>
                </div>

            }

        </div>
    );
}

export default CashierOrderPage;