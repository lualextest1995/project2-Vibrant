import React, { useState, useEffect } from "react";
import Picture from "../components/Picture";
import Search from "../components/Search";

const Home = ({ currentUser, setCurrentUser }) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f91700001000001b33b35fad8e34c0490d68acbea118c54";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=30";
  const loadingURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=30`;
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=30&page=1`;
  const searchLoadingURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=30&page=${page}`;

  async function getData(url) {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    const parseData = await dataFetch.json();
    setData(parseData.photos);
  }

  async function loadingHandler() {
    let url;
    if (!currentSearch) {
      url = loadingURL;
    } else {
      url = searchLoadingURL;
    }
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    const parseData = await dataFetch.json();
    setPage((prevPage) => {
      return prevPage + 1;
    });
    setData((prevData) => {
      return [...prevData, ...parseData.photos];
    });
  }

  //當搜尋欄狀態改變時自動取得資料
  useEffect(() => {
    if (!currentSearch) {
      getData(initialURL);
    } else {
      getData(searchURL);
    }
  }, [currentSearch]);

  return (
    <div className="home">
      <Search
        id="top"
        setInput={setInput}
        search={() => {
          //input的資料由setCurrentSearch保存
          setCurrentSearch(input);
        }}
        searchKeyboard={(e) => {
          if (e.code === "Enter" || e.code === "NumpadEnter") {
            setCurrentSearch(input);
          }
        }}
      />
      <div className="pictures">
        {data &&
          data.map((pic) => {
            return (
              <Picture
                data={pic}
                key={pic.id}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            );
          })}
      </div>
      <div className="loading">
        <button onClick={loadingHandler}>載入更多</button>
      </div>
      <div className="topButton">
        <a href="#top" title="點擊回到最上方">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
