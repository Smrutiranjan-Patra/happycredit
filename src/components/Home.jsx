import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./css/home.css";
import { d } from "./Item";

const Home = () => {
  const [dataas, setData] = useState([]);
  const listener = (event) => {
    let str = event.target.value.toLowerCase();
    let newData = d.filter((da) => {
      if (da.name.toLowerCase().startsWith(str)) {
        return da;
      }
    });
    console.log(newData);

    setData(newData);
  };
  const filterData = (e) => {
    let { value } = e.target;
    let records = d.filter((data) => {
      if (value == "AZ" && data.AZ) {
        return data;
      } else if (value == "Newest" && data.Newest) {
        return data;
      }
    });
    setData(records);
  };
  const fetchMoreData = () => {
    if (dataas.length < d.length - 5) {
      console.log(dataas.length);
      let arr = d.slice(dataas.length - 1, dataas.length + 5);
      let newData = dataas.slice();
      console.log(newData);
      newData.push(...arr);
      setData(newData);
    }
  };
  useEffect(() => {
    setData(d.slice(0, 12));
  }, []);
  return (
    <>
      <div className="main">
        <div className="upper">
          <h1>All deals and coupons.</h1>
          <br />
          <p>
            The best online deals and coupons, including Klarna exclusives,
            updated daily.
          </p>
        </div>
        <div className="lower">
          <div className="first">
            <h2 className="cata">Categories</h2>
            <p className="cata_sub">All</p>
            <p className="cata_sub">Babies & Kids</p>
            <p className="cata_sub">Colthing & Apparel</p>
            <p className="cata_sub">Consumer Electronics</p>
            <p className="cata_sub">Education</p>
            <p className="cata_sub">Gift</p>
            <p className="cata_sub">Health & Beauty</p>
            <p className="cata_sub">Holiday & Occasions</p>
            <p className="cata_sub">HouseHold</p>
            <p className="cata_sub">See all</p>
            <h2 className="cata">Filter</h2>
            <p className="cata_sub">Type</p>
            <p className="cata_sub">
              <input type="checkbox" />
              <span> Only Coupons</span>
            </p>
            <p className="cata_sub">
              <input type="checkbox" />
              <span> Exclusives</span>
            </p>
            <p className="cata_sub">
              <input type="checkbox" />
              <span> BOGO and more</span>
            </p>

            <h2 className="cata">Discount</h2>
            <p className="cata_sub">
              <input type="checkbox" />
              <span className="cata_sub">&nbsp;0-49% off</span>
            </p>
            <p>
              <input type="checkbox" />
              <span className="cata_sub">&nbsp;50-80% off</span>
            </p>
          </div>
          <div className="second">
            <div className="search">
              <input
                className="type"
                type="search"
                placeholder="search"
                onChange={listener}
              />
            </div>
            <div className="featured">
              <select name="" id="" className="btn1" onChange={filterData}>
                <option value="">Featured</option>
                <option value="Newest">Newest</option>
                <option value="AZ">A-Z</option>
              </select>
              {/* <p className="btn1">Featured</p> */}
            </div>
            <div>
              <InfiniteScroll
                dataLength={dataas.length}
                next={fetchMoreData}
                hasMore={true}
                className="item"
                style={{ "overflow-x": "hidden" }}
              >
                {dataas.map((el, i) => (
                  <div key={i}>
                    <div
                      style={{
                        backgroundImage: `url(${el.img})`,
                      }}
                      className="backImgs"
                    >
                      <div style={{ color: "transparent" }}>.</div>
                      <div className="txt">
                        <div>Save Upto</div>
                        <div className="off">
                          {" "}
                          {Math.floor(Math.random() * (50 - 10 + 1)) + 10}%
                        </div>
                      </div>
                      {/* <img style={{height:"100%", width:"100%",borderRadius:"5%"}} src={el.img} alt="Banks"/> */}
                    </div>
                    <br />
                    <div>
                      <h4>{el.name}</h4>
                      <p style={{ color: "gray", fontSize: "15px" }}>
                        {el.tital}
                      </p>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
