import { useEffect, useState } from "react";
import api from "./api";


function QRCheckGate({ children }) {

    const [isChecking, setIsChecking] = useState(true);
    const [isAvailable, setIsAvailable] = useState(false);
    const [startTime, setStartTime] = useState("09:00");
    const [endTime, setEndTime] = useState("17:00");


    useEffect(() => {
        api.get("/guest/qr-status")
            .then((res) => {
                setIsAvailable(res.data.available);
                setStartTime(res.data.startTime)
                setEndTime(res.data.endTime);
            })
            .catch(() => {
                setIsAvailable(false);
            })
            .finally(() => {
                setIsChecking(false);
            });
    }, []);

    // 로딩중
    if (isChecking) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
                {/* 스피너 색상은 프로젝트 메인 컬러인 success로 설정 */}
                <div className="spinner-border text-success" role="status" style={{ width: '3rem', height: '3rem', borderWidth: '0.25em' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>

                {/* 선택사항: 로딩 문구 추가 */}
                <div className="mt-3 fw-bold text-secondary" style={{ letterSpacing: '-0.5px' }}>
                    (주) 그린아그로
                </div>
            </div>
        );
    }

    // QR 주문 불가시
    if (!isAvailable) {
        return (
            <div className="d-flex align-items-center justify-content-center h-100 bg-light p-3">
                <div className="w-100" style={{ maxWidth: '450px' }}>
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="card-body p-4 md:p-5 text-center shadow-md">

                            {/* 간결한 상태 표시 아이콘 */}
                            <div className="d-inline-flex align-items-center justify-content-center bg-secondary bg-opacity-10 text-secondary rounded-circle mb-4"
                                style={{ width: '80px', height: '80px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                            </div>

                            <h4 className="fw-bold text-dark mb-3">QR 주문 중단</h4>

                            <p className="text-muted small mb-5">
                                현재 모종 주문이 불가능합니다.
                            </p>

                            <div className="bg-light rounded-3 p-3 mb-5">
                                <div className="text-uppercase small fw-semibold text-secondary mb-1" style={{ letterSpacing: '1px' }}>
                                    운영시간
                                </div>
                                <div className="fs-2 fw-bold text-success">
                                    {startTime} ~ {endTime}
                                </div>
                            </div>

                            <button
                                onClick={() => window.location.reload()}
                                className="btn btn-success w-100 py-3 rounded-3 fw-bold"
                                style={{ letterSpacing: '0.5px' }}
                            >
                                새로고침
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    // QR 주문 가능시
    return children;
}

export default QRCheckGate;