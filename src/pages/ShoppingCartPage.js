import React, { useEffect, useRef, useState } from "react";
import { useTost } from "../utils/TostProvider";
import SubHeader from "../components/SubHeader";
import MotionPage from "../motions/MotionPage";
import Footer from "../components/Footer";
import { useShoppingCart } from "../utils/ShoppingCartProvider";
import ShoppingCartList from "../components/ShoppingCartList";
import ChangeAccordion from "../components/ChangeAccordion";
import DiscountAccordion from "../components/DiscountAccordion";
import OrderModal from "../components/modals/OrderModal";
import { useNavigate } from "react-router-dom";

function ShoppingCartPage() {

    //라우트
    const navigate = useNavigate();

    //토스트
    const { showTost } = useTost();
    //장바구니
    const { cartItems, totalPrice, totalQuantity } = useShoppingCart();

    //주문확인 모달
    const [showModal, setShowModal] = useState(false);

    //주문버튼 클릭
    const orderClick = () => {

        //모달 보여주기
        setShowModal(true);
    }

    //장바구니가 비었을때 홈으로 리다이렉트
    useEffect(()=>{
        if(cartItems.length <= 0){
            showTost("장바구니가 비어있습니다.");
            navigate(-1);
        }
    },[]);

    return (
        <MotionPage> {/* 에니메이션 적용 */}
            <div className="d-flex flex-column h-100">
                {/* 헤더 */}
                <SubHeader title={"장바구니"} />

                {/* 메인 */}
                <main className='my-content overflow-y-auto flex-grow-1 bg-secondary-subtle'>

                    {/* 주문상품 */}
                    <div className="bg-white p-3 shadow-sm">
                        <div className="pb-3 fs-4 fw-semibold">주문 상품</div>
                        <ShoppingCartList />
                    </div>

                    {/* 합계 */}
                    <div className="mt-3 mb-4 bg-white p-3">
                        <div className="pb-3 fs-4 fw-semibold">합계</div>
                        <div className="border border-success-subtle rounded-3 p-3">
                            <div className=" d-flex justify-content-between fs-5 fw-medium fw-semibold ">
                                <div className="text-success">총 금액 :</div>
                                <div className={totalPrice > 0 ? "text-success" : "text-danger"}>{totalPrice.toLocaleString("ko-KR")}원</div>
                            </div>
                        </div>
                    </div>

                </main>


                {/* 푸터 */}
                <Footer
                    value={"주문하기"}
                    show={totalPrice > 0}
                    onClick={orderClick}
                >
                    <div className='pt-0 p-2 d-flex justify-content-between text-secondary'>
                        <div>품목 <span className='fw-semibold'>{cartItems.length}</span> · 수량 <span className='fw-semibold'>{totalQuantity}</span></div>
                        <div className='text-success'>총 합계 <span className='fw-semibold'>{totalPrice.toLocaleString('ko-KR')}</span>원</div>
                    </div>
                </Footer>

            </div>

            {/* 주문 확인 모달 */}
            <OrderModal
                showModal={showModal}
                setShowModal={setShowModal}
                finalAmount={totalPrice}
            />
        </MotionPage>
    )
}

export default ShoppingCartPage;