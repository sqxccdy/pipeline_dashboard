
import {Layout} from "antd";
import PipelineRealTimeTable from "./component/pipelineRealtimeTable.tsx";
const { Header, Sider, Content } = Layout;

function App() {

  return (
      <Layout className="App" >
          <Header><div className="header-title">dataflow-system 实时监控面板</div></Header>
          <Content style={{ padding: '0 50px',display: 'flex', flexDirection: 'column', minWidth: '800px'}}>
              <Layout style={{padding: '0', background: '#fff', }} >
                  <Sider style={{background: '#fff', }}>
                      dssdf
                  </Sider>
                  <Content style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.12)'}}>
                      <PipelineRealTimeTable/>
                  </Content>
              </Layout>
          </Content>
      </Layout>
  )
}

export default App
