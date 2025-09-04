import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type Slice = { name: string; value: number; color: string };

interface PieCardProps {
	title: string;
	data: Slice[];
}

type LabelProps = {
	cx: number;
	cy: number;
	midAngle?: number;
	innerRadius?: number;
	outerRadius?: number;
	percent?: number;
	payload: Slice;
};

const RADIAN = Math.PI / 180;
function renderLabel(props: unknown) {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, payload } = props as LabelProps;
    // Pull label slightly toward center so two-line text fits nicely
    const inner = innerRadius ?? 0;
    const outer = outerRadius ?? 0;
    const angle = midAngle ?? 0;
    const ratio = percent ?? 0;
    const radius = inner + (outer - inner) * 0.55;
    const x = cx + radius * Math.cos(-angle * RADIAN);
    const y = cy + radius * Math.sin(-angle * RADIAN);
    const percentText = `${Math.round(ratio * 100)}%`;
    return (
        <text
            x={x}
            y={y}
            fill="#ffffff"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={12}
            fontWeight={600}
        >
            <tspan x={x} dy={-4}>{payload.name}</tspan>
            <tspan x={x} dy={14}>{percentText}</tspan>
        </text>
    );
}

function Legend({ data }: { data: Slice[] }) {
	return (
		<div className="flex items-center gap-6 mt-4">
			{data.map((s) => (
				<div key={s.name} className="flex items-center gap-2 text-sm text-gray-700">
					<span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: s.color }} />
					<span>{s.name}</span>
				</div>
			))}
		</div>
	);
}

function PieCard({ title, data }: PieCardProps) {
	return (
		<div className="bg-white rounded-2xl border-2 border-[#A0A0A042] shadow p-6 w-full">
			<h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
			<div className="h-64">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Tooltip contentStyle={{ borderRadius: 8, borderColor: "#E5E7EB" }} />
						<Pie
							data={data}
							dataKey="value"
							nameKey="name"
							cx="50%"
							cy="50%"
							outerRadius={100}
							labelLine={false}
							label={renderLabel}
							stroke="#ffffff"
							strokeWidth={3}
						>
							{data.map((entry) => (
								<Cell key={entry.name} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<Legend data={data} />
		</div>
	);
}

export default PieCard;


