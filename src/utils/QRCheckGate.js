import { useEffect, useState } from "react";
import api from "./api";


function QRCheckGate({ children }) {

    const [isChecking, setIsChecking] = useState(false);
    const [isAvailable, setIsAvailable] = useState(true);
    const [message, setMessage] = useState("");

    // useEffect(() => {
    //     api.get("/guest/order-availability")
    //         .then((res) => {
    //             setIsAvailable(res.data.available);
    //             setMessage(res.data.message ?? "");
    //         })
    //         .catch(() => {
    //             setIsAvailable(false);
    //             setMessage("현재 QR 주문을 이용할 수 없습니다.");
    //         })
    //         .finally(() => {
    //             setIsChecking(false);
    //         });
    // }, []);

    // 로딩중
    if (isChecking) {
        return <div>확인 중...</div>;
    }

    // QR 주문 불가시
    if (!isAvailable) {
        return (
            <div>
                <h2>QR 주문 이용 불가</h2>
                <p>{message}</p>
            </div>
        );
    }

    // QR 주문 가능시
    return children;
}

export default QRCheckGate;