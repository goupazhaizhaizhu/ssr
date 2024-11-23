// /src/client/pages/index/index.js
//index 组件

import React from 'react';

//组件
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    const initialData = props.staticContext || {};
    this.state = initialData;
  }

  static async getInitialProps() {
    //模拟数据请求方法
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            code: 0,
            data: "tempData",
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
          data: res.data || [],
        });
      });
    }
  }
    
  handlerClick() {
    alert("一起来玩 react ssr 呀。");
  }

  render() {
    return <h1 onClick={this.handlerClick}>click here!</h1>;
  }
}
