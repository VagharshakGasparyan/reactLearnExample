import {useSelector} from "react-redux";
import {Link, NavLink, Outlet} from "react-router-dom";
import {AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import {useNavigate} from 'react-router-dom';


export default function NavbarMenu() {

    const navigate = useNavigate();
    //     let userData=useSelector((state)=>{
    //         return state.someReducer1.user;
    // })
    const items = [
        {
            label: 'Categories',
            key: 'categories',
            icon: <AppstoreOutlined />,
        },
        {
            label: 'Home',
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: 'Marketplace',
            key: 'SubMenu',
            // icon: <SettingOutlined />,
            children: [
                {
                    label: 'Categories',
                    key: 'child_categories',
                },
                {
                    label: 'Shop',
                    key: 'shop',
                },
                {
                    label: 'Auction',
                    key: 'auction',
                },
            ],
        },
        {
            label: 'About Us',
            key: 'about_us',
        },
        {
            label: 'Contacts',
            key: 'contacts',
        },
        {
            label: 'Help center',
            key: 'help_center',
        },
    ];
    const onClick = (e) => {
        console.log('click ', e);
        switch (e.key) {
            case 'shop':
                navigate('/products');
                break;
            case 'categories':
                console.log('categories');
                break;
            case 'help_center':
                navigate('/help-center');
                break;
        }
    };

    return (
        <Menu onClick={onClick} mode="horizontal" items={items}/>
    );
}

