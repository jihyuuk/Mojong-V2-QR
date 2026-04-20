import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DetailPage from './pages/DetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { TostProvider } from './utils/TostProvider';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './utils/ShoppingCartProvider';
import HistoryPage from './pages/staff/HistoryPage'
import CashierOrderPage from './pages/CashierOrderPage';
import SearchPage from './pages/SearchPage';
import MainRoutes from './utils/routes/MainRotues';
import HistoryDetailPage from './pages/staff/HistoryDetailPage';
import { MenuProvider } from './utils/MenuProvider';
import QRCheckGate from './utils/QRCheckGate';

function App() {

  return (
    <div className="App">
      <BrowserRouter>{/* react-rotuer-dom */}
        <QRCheckGate>{/* 현재 QR 주문 가능여부 확인 */}
          <TostProvider>{/* 토스트 기능 context */}
            <MenuProvider>{/* 메뉴 불러오기 */}
              <ShoppingCartProvider> {/* 장바구니 */}
                <Routes>
                  {/* 메인페이지 위에 레이어 쌓기 */}
                  <Route element={<MainRoutes />}>
                    {/* 더미 홈 */}
                    <Route path="/" element={null} />
                    {/* 검색 페이지 */}
                    <Route path="/search" element={<SearchPage />} />
                    {/* 아이템 상세 페이지 */}
                    <Route path="/detail" element={<DetailPage />} />
                    {/* 장바구니 페이지 */}
                    <Route path="/shoppingCart" element={<ShoppingCartPage />} />
                    {/* 직원결제 페이지 */}
                    <Route path="/order" element={<CashierOrderPage />} />
                  </Route>

                  {/* 주문 신청 기록 */}
                  {/* <Route path="/history" element={<HistoryPage />}>
                    <Route path=":id" element={<HistoryDetailPage />} />
                  </Route> */}


                  {/* 이상한 경로 접근시 홈으로 리다이렉트 */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </ShoppingCartProvider>
            </MenuProvider>
          </TostProvider>
        </QRCheckGate>
      </BrowserRouter>
    </div>
  );
}

export default App;
