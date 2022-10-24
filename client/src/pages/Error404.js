import React, { useEffect } from "react";

const Error404 = () => {
  useEffect(() => {
    document.title = "Vibrant - 無法找到網頁";
    return () => {
      document.title = "Vibrant";
    };
  }, []);
  return (
    <div className="error">
      <h1>你所尋找的頁面不存在</h1>
      <a href="/">點擊跳轉回首頁</a>
    </div>
  );
};

export default Error404;
