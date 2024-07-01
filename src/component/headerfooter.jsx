
import { Layout, Space } from 'antd';
const {  Content } = Layout;
export default function Headerfooter(){
    const contentStyle = {
        textAlign: 'center',
        minHeight: 200,
        lineHeight: '200px',
        color: '#4b566b',
        backgroundColor: '#0d6efd',
    };
    return(
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
            size={[0, 48]}
        >
            <Layout>

                <Content style={contentStyle}>Content</Content>

            </Layout>
        </Space>
    )
}