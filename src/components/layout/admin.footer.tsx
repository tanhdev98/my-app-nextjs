'use client'

import { Layout } from "antd"

const AdminFooter = () => {
    const { Footer } = Layout
    return (
        <Footer style={{ textAlign: 'center' }}>
            Tanhdev98 ©{new Date().getFullYear()} Created by @tanhdev98
        </Footer>
    )
}

export default AdminFooter