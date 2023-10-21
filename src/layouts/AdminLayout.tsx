import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'

export default function AdminLayout() {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </div>
    )
}
