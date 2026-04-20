import { Badge, Form } from 'react-bootstrap';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Footer from '../components/Footer';
import { useShoppingCart } from '../utils/ShoppingCartProvider';
import MainFooter from '../components/MainFooter';
import { useMenu } from '../utils/MenuProvider';
import CategoryNavbar from '../components/CategoryNavbar';

function MainPage() {

    //리액트 라우터
    const navigate = useNavigate();

    //메뉴
    const { menu } = useMenu();

    //장바구니 정보
    const { cartItems, totalPrice } = useShoppingCart();

    //DOM 요소 캐싱 - 자동 스크롤 위한거
    const contentRef = useRef(null);
    const sectionRefs = useRef({});

    return (
        // 메인페이지
        <div className="MainPage d-flex flex-column h-100">

            {/* 헤더 */}
            <header>

                {/* 햄버거, 서치바, 장바구니 */}
                <div className="p-2 pt-3 pb-1 d-flex align-items-center">

                    {/* 검색창 */}
                    <Form.Control size="lg" id='searchBar' type="text"
                        className='ps-4 pe-5 rounded-5 border-2 border-success-subtle'
                        placeholder="🔍 검색하기"
                        onClick={() => navigate("/search")}
                        readOnly
                    />

                    {/* 장바구니 아이콘 */}
                    {cartItems.length > 0 &&
                        <div className='p-2' onClick={() => navigate("/shoppingCart")}>
                            <div className='position-relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>

                                <div className="position-absolute top-0 start-100 translate-middle">
                                    <Badge bg="danger" className='rounded-5' style={{ fontSize: '0.7rem' }}>
                                        {cartItems.length}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    }


                </div>

                {/* 카테고리 탭 */}
                <CategoryNavbar contentRef={contentRef} sectionRefs={sectionRefs} />

            </header>

            {/* 콘텐츠 */}
            <main id='content' ref={contentRef} className='flex-grow-1 overflow-y-auto bg-secondary-subtle'>

                {menu.map((category, index) => {
                    return (
                        <div id={`section${index}`} key={category.name} className='mb-4 bg-white shadow-sm' ref={(el) => (sectionRefs.current[category.categoryId] = el)}>

                            {/* 카테고리 명 */}
                            <div className='fs-2 fw-bold p-3 pb-0 text-success'>{category.name}</div>

                            {/* 해당 아이템들 */}
                            {category.items.map((item) => <ItemList key={item.id} item={item} />)}

                        </div>
                    );
                })}

                <MainFooter />

            </main>

            {/* 푸터 */}
            <Footer
                value={`${totalPrice.toLocaleString('ko-KR')}원 · 장바구니`}
                show={totalPrice > 0}
                onClick={() => navigate('/shoppingCart')}
            />

        </div>
    );
}

export default MainPage;
