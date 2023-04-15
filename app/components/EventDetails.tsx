import { Arrow } from "~/components/Arrow";

interface EventDetailsProps {
	date: Date;
	link: string;
	linkText: string;
	location: string;
	topics: string[];
	weight?: "light" | "medium";
}

export function EventDetails({
	date,
	link,
	location,
	linkText,
	topics,
	weight = "light",
}: EventDetailsProps) {
	const formatter = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "short",
	});

	return (
		<article className={`event-details medium event-details-${weight}`}>
			<div className="event-details-meta">
				<h3 className="event-details-date">{formatter.format(date)}</h3>
				&nbsp;
				<p className="event-details-location">{location}</p>
			</div>
			<ul className="event-details-topics">
				{topics.map((topic) => (
					<li className="event-details-topic" key={topic}>
						{topic}
					</li>
				))}
			</ul>
			<a href={link} rel="noreferrer" target="_blank">
				{linkText}
				<Arrow
					className="arrow-out"
					label="External link indication arrow"
					rotate={-45}
				/>
			</a>
		</article>
	);
}
