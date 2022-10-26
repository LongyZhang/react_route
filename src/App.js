import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import { UserSwitchOutlined, SearchOutlined } from '@ant-design/icons';
import "antd/dist/antd.min.css";
import './App.less';

export default class App extends Component {

  f1 = (date, dateString) => {
    // console.log(date, dateString);
    console.log(dateString);
  }


  render() {
    return (
      <div>
        <Button type='primary' >Click me </Button>
        <Button>default</Button>
        <Button danger>danger</Button>
        <Button shape="round" ghost>caonima</Button>
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
        <DatePicker onChange={(date, dateString) => this.f1(date, dateString)} />
        {/* <CaretRightOutlined /> */}
        <UserSwitchOutlined onMouseOver={this.f1} />
      </div>
    )
  }
}

