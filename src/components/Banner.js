import React, { useState } from "react";

function Banner() {
  const [visible, setVisible] = useState(true);

  const getCoupon = () => {
    alert("10% 할인 쿠폰을 받으셨습니다.");
  };
  const closeBanner = (e) => {
    e.stopPropagation();
    setVisible(false);
  };
  return (
    <div
      style={{
        backgroundColor: "orange",
        fontWeight: "bold",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      onClick={getCoupon}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button onClick={closeBanner}>닫기</button>
    </div>
  );
}

export default Banner;
