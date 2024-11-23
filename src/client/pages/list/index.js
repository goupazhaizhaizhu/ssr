// /src/client/pages/index/list.js
//list 组件

import React from "react";

import { data } from "./data";

//组件
export default class List extends React.Component {
  constructor(props) {
    super(props);
    const initialData = props.initialData || {};
    this.state = initialData;
  }

  static async getInitialProps() {
    //模拟数据请求方法
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            code: 0,
            data: data,
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
        });
      });
      
    }
  }

  handlerClick() {
    alert("我是列表");
  }

  render() {
    const { code, data } = this.state;

    return (
      <div>
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
