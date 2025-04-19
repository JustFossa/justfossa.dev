import { IconType } from "react-icons";
import { SiJavascript, SiTypescript, SiHtml5 } from "react-icons/si";
import { motion } from "framer-motion";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
type Lang = {
	color: string;
};

interface Langs {
	[key: string]: Lang;
}

const langs = {
	JavaScript: {
		color: "#f0db4f",
	},
	TypeScript: {
		color: "#3178c6",
	},
	HTML: {
		color: "#e34c26",
	},
	Java: {
		color: "#f89820",
	},
	Kotlin: {
		color: "#7f52ff",
	},
	unknown: {
		color: "#000000",
	},
} as Langs;

export type Repo = {
	name: string;
	description: string;
	html_url: string;
	stargazers_count: number;
	forks_count: number;
	language: string;
	id: number;
};

export const RepoCard = ({ repo }: { repo: Repo }) => {
	return (
		<a href={repo.html_url} target="_blank" rel="noreferrer">
			<div className="w-full h-[10rem] dark:bg-slate-900/5 border-[1px] dark:border-slate-700/20 rounded-lg flex flex-col items-left p-4 gap-2 dark:hover:border-slate-700/90 cursor-pointer">
				<h1 className="font-bold dark:text-white">{repo.name}</h1>
				<p className="dark:text-gray-300 text-sm text-gray-400">
					{repo.description}
				</p>
				<div className="flex flex-row items-center gap-4 mt-auto text-sm dark:text-gray-300">
					<div className="flex items-center">
						<motion.div
							style={{
								background:
									langs[repo.language ? repo.language : "unknown"].color,
								border: `solid 3px ${
									langs[repo.language ? repo.language : "unknown"].color
								}`,
							}}
							className="w-3 h-3 rounded-full mr-2"
						/>
						<h1 className="dark:text-gray-300">{repo.language || "Unknown"}</h1>
					</div>
					<div className="flex items-center justify-center">
						<AiOutlineStar className="dark:text-gray-300 mr-1 w-4 h-4" />{" "}
						{repo.stargazers_count}
					</div>
					<div className="flex items-center justify-center">
						<BiGitRepoForked className="dark:text-gray-300 mr-1 w-4 h-4" />{" "}
						{repo.forks_count}
					</div>
				</div>
			</div>
		</a>
	);
};
