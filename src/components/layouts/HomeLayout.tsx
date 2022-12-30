import { Layout, Menu, MenuProps } from 'antd'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react'
import styles from '../../../styles/components/layouts/homeLayout.module.scss'
import SiderBar from '~/components/layouts/SiderBar'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Users', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
]

interface Props {}

const HomeLayout: React.FC<Props> = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className={styles.siteLayoutBackground} />
      <SiderBar />
    </Layout>
  )
}

export default HomeLayout
