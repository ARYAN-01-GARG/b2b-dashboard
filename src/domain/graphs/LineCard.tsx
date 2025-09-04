import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

type Point = { name: string; value: number };

interface LineCardProps {
	title: string;
	yLabel: string;
	data: Point[];
}

function LineCard({ title, yLabel, data }: LineCardProps) {
	return (
		<div className="bg-white rounded-2xl border-2 border-[#A0A0A042] shadow p-6 w-full">
			<h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
			<div className="h-64">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 24 }} className="cursor-pointer">
						<CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
						<XAxis dataKey="name" tick={{ fill: "#6B7280" }} axisLine={{ stroke: "#E5E7EB" }} tickLine={{ stroke: "#E5E7EB" }}
							label={{ value: "Months", position: "insideBottom", offset: -12, fill: "#6B7280" }}
						/>
						<YAxis tick={{ fill: "#6B7280" }} axisLine={{ stroke: "#E5E7EB" }} tickLine={{ stroke: "#E5E7EB" }}
							label={{ value: yLabel, angle: -90, position: "inside", offset: 10, fill: "#6B7280", dy: 10, dx: -20 }}
						/>
						<Tooltip contentStyle={{ borderRadius: 8, borderColor: "#E5E7EB" }} />
						<Line type="monotone" dataKey="value" stroke="#28A745" strokeWidth={3} dot={{ r: 4, stroke: "#28A745", strokeWidth: 2, fill: "#ffffff" }} activeDot={{ r: 6 }} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default LineCard;


