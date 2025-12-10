import {Component} from "react";
import {Button, Table} from "antd";
import { incremented, decremented } from "../features/pipelineSlice";
import {connect} from "react-redux";
import type {RootState} from "../store.ts";

interface  PipelineRealTimeTableProps{
    counterValue: number;
    incremented: () => void;
    decremented: () => void;
}

class PipelineRealTimeTable extends Component<PipelineRealTimeTableProps>{
    state = {
        dataSource: []
    };

    columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    componentDidMount() {
        // 生成模拟数据
        const dataSource = [];
        for (let i = 0; i < 100; i++) {
            dataSource.push({
                key: i, // 确保每条数据有唯一key
                name: `Edward King ${i}`,
                age: i,
                address: `London, Park Lane no. ${i}`,
            });
        }

        this.setState({ dataSource });
    }
    handleAdd = ()=>{
        this.props.incremented();
    }
    render() {
        const { dataSource } = this.state;
        const { counterValue } = this.props;

        return (
            <>
                {counterValue}
                <Button onClick={this.handleAdd.bind(this)}>添加</Button>
                <Table
                    dataSource={dataSource}
                    columns={this.columns}
                    rowKey="key"
                    pagination={false}
                    scroll={{ y: '80vh' }}
                    size="small"
                />
            </>
        );
    }
}
const mapStateToProps = (state: RootState) => ({
    counterValue: state.counter.value,
});

export default connect(mapStateToProps, {
    incremented,
    decremented,
})(PipelineRealTimeTable);