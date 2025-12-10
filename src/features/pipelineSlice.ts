import { createSlice } from '@reduxjs/toolkit'

export interface DataItem {
    key: number;
    name: string;
    age: number;
    address: string;
}

export interface TableColumn {
    title: string;
    dataIndex: keyof DataItem; // 确保dataIndex是DataItem的键
    key: string;
}

interface CounterState {
    dataSource: DataItem[];
    columns: TableColumn[];
}

const initialState: CounterState = {
    dataSource: [],
    columns: [
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
    ]
};


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initData(state){
            const dataSource = [];
            for (let i = 0; i < 100; i++) {
                dataSource.push({
                    key: i, // 确保每条数据有唯一key
                    name: `Edward King ${i}`,
                    age: i,
                    address: `London, Park Lane no. ${i}`,
                });
            }
            state.dataSource = dataSource;
        },
        incremented: state => {
            state.dataSource.splice(0, 0, {
                key: 100, // 确保每条数据有唯一key
                name: `Edward King 100`,
                age: 100,
                address: `London, Park Lane no. 100`,
            })
        }
    }
})

export const { initData, incremented } = counterSlice.actions
export default counterSlice.reducer;