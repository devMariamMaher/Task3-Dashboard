import React from 'react'
import { FaCheckCircle, FaFileInvoice, FaTasks } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";

const Overview = () => {
    const stats = [
        { label: "Completed Tasks", value: 128 },
        { label: "Ongoing Projects", value: 6 },
        { label: "Pending Requests", value: 14 },
    ];

    const monthlyEarnings = [
        { month: "Jan", earnings: 400 },
        { month: "Feb", earnings: 600 },
        { month: "Mar", earnings: 800 },
    ];

    const taskCompletedPerMonth = [
        { month: "Jan", tasks: 12 },
        { month: "Feb", tasks: 18 },
        { month: "Mar", tasks: 15 },
    ];

    const projectStatus = [
        { name: "Completed", value: 8 },
        { name: "In Progress", value: 3 },
        { name: "Pending", value: 1 },
    ];

    const COLORS = ["#22C55E", "#3B82F6", "#F59E0B"];

    const activities = [
        { icon: <FaCheckCircle className="text-green-500 text-xl"/>, activity: "Project Alpha completed", date: "2025-08-10" },
        { icon: <FaFileInvoice className="text-blue-500 text-xl"/>, activity: "Invoice sent to Client B", date: "2025-08-09" },
        { icon: <FaTasks className="text-yellow-500 text-xl"/>, activity: "New task added for Project C", date: "2025-08-08" },
    ]

    return (
        <>
            <div>
                {/* Summary Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white shadow rounded p-6 hover:shadow-lg transition">
                            <h3 className="text-gray-500">{stat.label}</h3>
                            <p className="text-3xl font-bold mt-2">{stat.value}</p>
                    </div>
                    ))}
                </div>

                <div className="charts grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mb-6">
                    {/* Monthly Earnings Chart */}
                    <div className="bg-white p-4 shadow rounded hover:shadow-xl transition">
                        <h3 className="mb-4 font-semibold">Monthly Earnings</h3>

                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyEarnings}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="earnings" fill="#4F46E5" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Tasks Completed per Month Chart */}
                    <div className="bg-white p-4 shadow rounded hover:shadow-xl transition">
                        <h3 className="mb-4 font-semibold">Tasks Completed per Month</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={taskCompletedPerMonth}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="tasks" stroke="#F97316" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Project Status Distribution Chart */}
                    <div className="chartSection bg-white p-4 shadow rounded hover:shadow-xl transition">
                        <h3 className="mb-4 font-semibold">Project Status Distribution</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={projectStatus}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    label
                                >
                                    {projectStatus.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="recentActivity bg-white p-4 shadow rounded">
                    <h3 className="mb-4 font-semibold text-lg">Recent Activity</h3>
                    <ul className="divide-y divide-gray-200">
                        {activities.map((activity, index) => (
                        <li key={index} className="py-3 flex items-center">
                            <span className="mr-3 text-xl">{activity.icon}</span>
                            <div>
                            <p className="text-gray-800">{activity.activity}</p>
                            <span className="text-xs text-gray-500">{activity.date}</span>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Overview