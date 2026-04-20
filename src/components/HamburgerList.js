import React, { useEffect, useState } from "react";
import { Button, ListGroup, Offcanvas, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";

function HamburgerList() {


  //라우터
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  //햄버거 열리면 판매정보 불러오기
  useEffect(() => {
    if (!show) return;

  }, [show])


  return (
    <>
      {/* 햄버거버튼 */}
      <div className='px-2' onClick={toggleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>


      {/* 내용 */}
      <Offcanvas show={show} onHide={handleClose} backdrop={true} scroll={true} style={{ width: '60%', maxWidth: '300px' }}>

        {/* 헤더 */}
        <Offcanvas.Header closeButton className='border-bottom'>
          <Offcanvas.Title className='fw-bold fs-4'>그린아그로</Offcanvas.Title>
        </Offcanvas.Header>

        {/* 목록 */}
        <Offcanvas.Body id='hambergur-menu' className='d-flex flex-column'>


          <ListGroup variant='flush fs-5'>
            <ListGroup.Item className='py-2'>
              <Link to="/history">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock-history me-3" viewBox="0 0 16 16">
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  판매기록
                </div>
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className='py-2'>
              <Link to="/shoppingCart" onClick={() => setShow(false)}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag me-3" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                  장바구니
                </div>
              </Link>
            </ListGroup.Item>


          </ListGroup>

        </Offcanvas.Body>

      </Offcanvas>

    </>
  )
}

export default HamburgerList;