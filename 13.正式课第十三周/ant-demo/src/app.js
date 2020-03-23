import React from 'react';
//只会引入button组件，不会引入其他未使用的组件；
import { Button ,Tooltip} from 'antd';
import { SearchOutlined , HomeOutlined,} from '@ant-design/icons';
import './app.css';
const App = () => (
  <div className="App">
    <Button type="successful" disabled={true} href="" shape="round" size="large" danger>Button</Button>
    <Button danger>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
    <Tooltip title="search">
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <HomeOutlined></HomeOutlined>
  </div>
);

export default App;