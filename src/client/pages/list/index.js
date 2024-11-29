// /src/client/pages/index/list.js
//list 组件

import React from "react";
import { Helmet } from "react-helmet";

import { data } from "./data";

//组件
export default class List extends React.Component {
  constructor(props) {
    super(props);
    const initialData = props.initialData || {};
    this.state = initialData;
  }

  static TDK = {
    title: "listTitle",
    description: "listDescription",
    keywords: "listKey",
  };

  static async getInitialProps() {
    //模拟数据请求方法
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            code: 0,
            data: data,
            tdk: List.TDK,
          });
        }, 100);
      });
    };

    let res = await fetchData();

    return res;
  }

  componentDidMount() {
    if (!this.state.fetchData) {
      List.getInitialProps().then((res) => {
        this.setState({
          data: res.data || [],
          tdk: List.TDK,
        });
      });
    }
  }

  handlerClick() {
    alert("我是列表");
  }

  render() {
    const { tdk = {}, data } = this.state;

    return (
      <div>
        <Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description} />
          <meta name="keywords" content={tdk.keywords} />
        </Helmet>
        <h1 onClick={this.handlerClick}>我是列表</h1>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        {!data && <div>暂无数据</div>}
      </div>
    );
  }
}
