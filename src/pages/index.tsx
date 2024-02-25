import { motion } from "framer-motion";
import {
	SiGit,
	SiTypescript,
	SiJavascript,
	SiReact,
	SiNodedotjs,
	SiVisualstudiocode,
	SiTailwindcss,
	SiYarn,
	SiNpm,
	SiPostgresql,
	SiMongodb,
	SiArchlinux,
	SiArduino,
	SiExpress,
	SiPostman,
	SiChartdotjs,
	SiNextdotjs,
} from "react-icons/si";
import { TechItem } from "@/components/TechItem";
import { Repo, RepoCard } from "@/components/RepoCard";
import { GetStaticProps } from "next";
import { Navbar } from "@/components/Navbar";

export default function Home({ stats, repos }: any) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: "easeOut", duration: 0.5 }}
				className="flex flex-col items-center justify-start mt-24"
			>
				<div>
					<h1 className="text-4xl dark:text-white md:text-5xl font-bold mt-14 mb-4">
						Hey, I&apos;m JustFossa 👋
					</h1>
					<p className=" dark:text-gray-300 tracking-wide mb-12">
						I&apos;m a self-taught software engineer from the Czech republic.
						I&apos;m currently pursuing full-stack web development to create
						stunning user experiences on the front-end, and scalable and secure
						infrastructure on the backend.
					</p>
				</div>
				<div>
					<h1 className="text-3xl dark:text-white font-medium mb-4">
						What I Do 💭
					</h1>
					<p className="text dark:text-gray-300 font-light tracking-wide mb-12">
						I&apos;m passionate about every technology; from designing and
						developing software, through understanding how many moving parts of
						the internet work together, to cybersecurity, systems, programming,
						and so much more. I strive to learn more about these things every
						day, and utilize my knowledge to further understand <i>how</i> or{" "}
						<i>why</i> the technology around us works.
					</p>
				</div>
				<div>
					<h1 className="text-3xl dark:text-white font-medium mb-4">
						Technologies 💻
					</h1>
					<p className="text dark:text-gray-300 font-light tracking-wide mb-12">
						I use a variety of tools to streamline my development process and
						increase the quality of both my code, and my projects. Below is a
						list of technologies and languages I&apos;ve had experience with in
						the past, or use currently.
					</p>
				</div>
				<div className="flex flex-wrap justify-center p-2 flex-row dark:border-slate-800/50 dark:bg-slate-900/5 border-[1px] rounded-md h-auto items-center">
					<TechItem Icon={SiTypescript} title="Typescript" />
					<TechItem Icon={SiReact} title="React" />
					<TechItem Icon={SiNextdotjs} title="Next.js" />
					<TechItem Icon={SiVisualstudiocode} title="VS Code" />
					<TechItem Icon={SiJavascript} title="Javascript" />
					<TechItem Icon={SiNodedotjs} title="Node.js" />
					<TechItem Icon={SiTailwindcss} title="TailwindCSS" />
					<TechItem Icon={SiMongodb} title="MongoDB" />
					<TechItem Icon={SiPostgresql} title="Postgres" />
					<TechItem Icon={SiArchlinux} title="Arch" />
					<TechItem Icon={SiGit} title="Git" />
					<TechItem Icon={SiArduino} title="Arduino" />
					<TechItem Icon={SiExpress} title="Express.js" />
					<TechItem Icon={SiChartdotjs} title="Chart.js" />
				</div>
				<div>
					<h1 className="text-3xl dark:text-white font-medium mb-4 mt-12">
						Projects 🛠️
					</h1>
					<p className="text dark:text-gray-300 font-light tracking-wide mb-12">
						In my free time, I enjoy creating open-source projects on{" "}
						<a
							className="text-violet-600 font-bold hover:underline"
							rel="noreferrer"
							href="https://github.com/JustFossa"
						>
							GitHub
						</a>
						, so I can learn from others and showcase what I know. In total, all
						of my open sourced projects have earned me{" "}
						<span className="font-bold dark:text-slate-200">{stats.stars}</span>{" "}
						stars on GitHub, and{" "}
						<span className="font-bold dark:text-slate-200">{stats.forks}</span>{" "}
						forks. Below are some of my most popular repositories.
					</p>
					<div className="w-full grid gap-2 md:grid-rows-1 md:grid-cols-2 grid-cols-1 mb-12">
						{repos.map((repo: Repo) => (
							<RepoCard key={repo.name} repo={repo} />
						))}
					</div>
				</div>
			</motion.div>
		</>
	);
}
export const getStaticProps = async () => {
	const stats = await fetch(
		"https://api.github-star-counter.workers.dev/user/justfossa"
	).then((res) => res.json());
	const repos = await fetch(
		"https://api.github.com/users/justfossa/repos?type=owner&per_page=100"
	).then((res) => res.json());

	const topRepos = repos
		.sort(
			(a: Record<string, any>, b: Record<string, any>) =>
				b.stargazers_count - a.stargazers_count
		)
		.slice(0, 4);

	return {
		props: {
			stats: stats,
			repos: topRepos,
		},
	};
};
