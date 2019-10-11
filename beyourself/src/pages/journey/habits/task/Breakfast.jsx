import React, { Component } from 'react'
import { List, Switch, Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const extra = {
  '2019/10/10': { info: 'Disable', disable: true }, //disable date
};

const now = new Date(); //get now date

Object.keys(extra).forEach((key) => {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
        extra[+date] = info;
    }
});

export default class Breakfast extends Component {
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

    constructor(props) {
        super(props);
        this.state = {
            en: false,
            show: false,
            config: {},
        };
    }

    renderBtn(zh, en, config = {}) {
        config.locale = this.state.en ? enUS : zhCN;
        return (
            <List.Item arrow="horizontal"
                onClick={() => {
                    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                    this.setState({
                        show: true,
                        config,
                    });
                }}
            >
                {this.state.en ? en : zh}
            </List.Item>
        );
    }

    changeLanguage = () => {
        this.setState({
            en: !this.state.en,
        });
    }

    onSelectHasDisableDate = (dates) => {
        console.warn('onSelectHasDisableDate', dates);
    }

    onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime,
            endTime,
        });
    }

    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime: undefined,
            endTime: undefined,
        });
    }

    getDateExtra = date => extra[+date];

    render() {
        return (
            <div>
                <List className="calendar-list" style={{ backgroundColor: 'white' }}>
                    <List.Item className="item" extra={<Switch className="right" checked={!this.state.en} onChange={this.changeLanguage} />}>
                    {this.state.en ? 'Chinese' : '中文'}
                    </List.Item>
                    {this.renderBtn('选择日期', 'Select Date', { type: 'one' })}
                </List>
                <Calendar
                    {...this.state.config}
                    visible={this.state.show}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    onSelectHasDisableDate={this.onSelectHasDisableDate}
                    getDateExtra={this.getDateExtra}
                    defaultDate={now}
                    minDate={new Date(+now - 5184000000)}
                    maxDate={new Date(+now + 31536000000)}
                />
            </div>
        );
    }
}

