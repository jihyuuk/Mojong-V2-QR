import React, { createContext, useState, useContext, useEffect } from "react";
import api from "./api";

//1. Context 생성
const MenuContext = createContext();

//2. Provider 컴포넌트 생성
export function MenuProvider({ children }) {

    const [isLoading, setIsLoading] = useState(true);
    const [menu, setMenu] = useState([]);

    //메뉴 불러오기
    useEffect(() => {
        fetchMenu();
    }, []);


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