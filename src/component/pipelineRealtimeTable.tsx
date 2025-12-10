import {Component} from "react";
import {Button, Table} from "antd";
import {initData, incremented, type DataItem, type TableColumn} from "../features/pipelineSlice";
import {connect} from "react-redux";
import type {RootState} from "../store.ts";

interface  PipelineRealTimeTableProps{
    dataSource: DataItem[];
    columns: TableColumn[];
    initData: () => void;
    incremented: () => void;
}

class PipelineRealTimeTable extends Component<PipelineRealTimeTableProps>{
    componentDidMount() {
        this.props.initData();
    }
    handleAdd = ()=>{
        this.props.incremented();
    }
    render() {
        return (
            <>
                <Button onClick={this.handleAdd.bind(this)}>添加</Button>
                <Table
                    dataSource={this.props.dataSource}
                    columns={this.props.columns}
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
    dataSource: state.counter.dataSource,
    columns: state.counter.columns,
});
const mapActionToProps = {
    initData,
    incremented,
};
export default connect(mapStateToProps,mapActionToProps)(PipelineRealTimeTable);