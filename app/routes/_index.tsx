const APPS = [
	{
		href: "/aikang/",
		title: "Care Management",
		desc: "Patient records, admissions, discharge, MEWS vitals, medications, billing, inventory and staff directory.",
		icon: "⬡",
		color: "#205d8a",
		bg: "#e2edf4",
	},
	{
		href: "/medlog/",
		title: "Medication Log",
		desc: "Weekly medication balance sheet for 1st floor — master list, per-patient log and MAR chart with Friday counts.",
		icon: "℞",
		color: "#2f7d54",
		bg: "#e2f0e7",
	},
	{
		href: "/time-clock/",
		title: "Time Clock & HRMS",
		desc: "Staff clock-in/out, roster scheduling, attendance tracking, leave management and payroll records.",
		icon: "◷",
		color: "#6C4FB8",
		bg: "#ECE6F8",
	},
	{
		href: "/admission/",
		title: "Admission Form",
		desc: "3-page printable admission form covering resident details, medical history, vitals, consent and discharge plan.",
		icon: "☑",
		color: "#c0653a",
		bg: "#f6e7df",
	},
];

export default function Index() {
	return (
		<div
			style={{
				minHeight: "100vh",
				background:
					"radial-gradient(circle at 10% 8%, #e6edf3 0, transparent 38%), radial-gradient(circle at 90% 0%, #e0ecf5 0, transparent 30%), #f3f6f8",
				fontFamily: "'Spline Sans', 'Segoe UI', Arial, sans-serif",
				color: "#11242e",
			}}
		>
			<div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
				{/* Header */}
				<div style={{ marginBottom: 48, textAlign: "center" }}>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 14,
							marginBottom: 16,
						}}
					>
						<div
							style={{
								width: 52,
								height: 52,
								borderRadius: 14,
								background: "#205d8a",
								display: "grid",
								placeItems: "center",
								fontSize: 26,
								color: "#fff",
							}}
						>
							⬡
						</div>
						<div style={{ textAlign: "left" }}>
							<div
								style={{
									fontSize: 26,
									fontWeight: 700,
									letterSpacing: "-0.01em",
									lineHeight: 1,
								}}
							>
								AIKANG Care Center
							</div>
							<div style={{ fontSize: 13, color: "#5e6c79", marginTop: 3 }}>
								Bukit Mertajam · Staff Portal
							</div>
						</div>
					</div>
					<p
						style={{
							fontSize: 15,
							color: "#5e6c79",
							maxWidth: 480,
							margin: "0 auto",
							lineHeight: 1.6,
						}}
					>
						Select an application below. All data is persisted to Cloudflare KV
						and shared across devices in real time.
					</p>
				</div>

				{/* App grid */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
						gap: 18,
					}}
				>
					{APPS.map((app) => (
						<a
							key={app.href}
							href={app.href}
							style={{
								display: "block",
								background: "#fff",
								border: "1px solid #d4dbe2",
								borderRadius: 16,
								padding: "22px 22px 20px",
								textDecoration: "none",
								color: "inherit",
								transition: "box-shadow 0.15s, transform 0.15s, border-color 0.15s",
								cursor: "pointer",
							}}
							onMouseEnter={(e) => {
								(e.currentTarget as HTMLAnchorElement).style.boxShadow =
									"0 8px 30px rgba(16,36,31,.12)";
								(e.currentTarget as HTMLAnchorElement).style.transform =
									"translateY(-2px)";
								(e.currentTarget as HTMLAnchorElement).style.borderColor =
									app.color;
							}}
							onMouseLeave={(e) => {
								(e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
								(e.currentTarget as HTMLAnchorElement).style.transform = "none";
								(e.currentTarget as HTMLAnchorElement).style.borderColor =
									"#d4dbe2";
							}}
						>
							<div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
								<div
									style={{
										width: 44,
										height: 44,
										borderRadius: 12,
										background: app.bg,
										display: "grid",
										placeItems: "center",
										fontSize: 22,
										color: app.color,
										flexShrink: 0,
									}}
								>
									{app.icon}
								</div>
								<div
									style={{
										fontSize: 16,
										fontWeight: 700,
										letterSpacing: "-0.01em",
										lineHeight: 1.2,
									}}
								>
									{app.title}
								</div>
							</div>
							<p
								style={{
									fontSize: 13,
									color: "#5e6c79",
									lineHeight: 1.55,
									margin: 0,
								}}
							>
								{app.desc}
							</p>
							<div
								style={{
									marginTop: 16,
									fontSize: 12,
									fontWeight: 700,
									color: app.color,
									display: "flex",
									alignItems: "center",
									gap: 4,
								}}
							>
								Open app →
							</div>
						</a>
					))}
				</div>

				<p
					style={{
						textAlign: "center",
						marginTop: 48,
						fontSize: 11,
						color: "#9aabb8",
					}}
				>
					© AIKANG Care Center BM · Powered by Cloudflare Workers
				</p>
			</div>
		</div>
	);
}
