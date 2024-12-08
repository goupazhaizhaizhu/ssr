// /src/client/pages/index/index.js
//index 组件

import React from 'react';
import { Helmet } from "react-helmet";
import Counter from './count';
import Counter2 from './count2';

//组件
export default class Index extends React.PureComponent {
  state: {
    data: any;
    fetchData: any;
    tdk?: {};
  };
  constructor(props) {
    super(props);
    this.state = props.initialData || {};
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

  // componentDidMount() {}

  handlerClick() {
    alert("一起来玩 react ssr 呀。");
  }

  componentDidMount(): void {
    if (!this.state.fetchData && Object.keys(this.state).length === 0) {
      Index.getInitialProps().then((res: any) => {
        this.setState({
          data: res.data || "暂无数据",
          tdk: Index.TDK
        });
      });
    }
  }

  render() {
    const { tdk = {} as any } = this.state;
    return (
      <div>
        <Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description} />
          <meta name="keywords" content={tdk.keywords} />
        </Helmet>
        <h1 onClick={this.handlerClick}>{this.state.data}</h1>
        <Counter />
        <Counter2 />
      </div>
    );
  }
}
