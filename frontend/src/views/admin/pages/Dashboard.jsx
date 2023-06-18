import React from "react";
import {
    DashboardStatsGrid,
    TransactionChart,
    RecentOrders,
    BuyerProfilePieChart,
    PopularProducts,
} from "../components";
export default function Dashboard() {
    document.title = "Dashboard";
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                {/* <BuyerProfilePieChart /> */}
            </div>
            <div className="flex flex-row gap-4 w-full">
                <RecentOrders />
                <PopularProducts />
            </div>
        </div>
    );
}
