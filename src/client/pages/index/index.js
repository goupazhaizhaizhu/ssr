// /src/client/pages/index/index.js
//index 组件

import React from 'react';
import { Helmet } from "react-helmet";

//组件
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    const initialData = props.staticContext || {};
    this.state = initialData;
  }

  static TDK = {
    title: "indexTitle",
    description: "indexDescription",
    keywords: "indexKey",
  };

  static async getInitialProps() {
    //模拟数据请求方法
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            code: 0,
            data: "tempData",
            tdk: Index.TDK,
          });
        }, 100);
      });
    };

    let res = await fetchData();

    return res;
  }

  componentDidMount() {
    if (!this.state.fetchData) {
      Index.getInitialProps().then((res) => {
        this.setState({
          data: res.data || "暂无数据",
          tdk: Index.TDK,
        });
      });
    }
  }

  handlerClick() {
    alert("一起来玩 react ssr 呀。");
  }

  render() {
    const { tdk = {} } = this.state;
    return (
      <div>
        <Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description} />
          <meta name="keywords" content={tdk.keywords} />
        </Helmet>
        <h1 onClick={this.handlerClick}>{this.state.data}</h1>
      </div>
    );
  }
}
