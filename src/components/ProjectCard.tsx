import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({
	repoUrl,
	name,
	cover,
	tags,
}: {
	repoUrl: string;
	name: string;
	cover: string;
	tags: string[];
}) => {
	const [repo, setRepo] = useState<any>(null);
	useEffect(() => {
		const fetchRepo = async () => {
			try {
				const response = await axios.get(
					"https://api.github.com/repos/" + repoUrl
				);
				setRepo(response.data);
				console.log("Repo data:", response.data);
			} catch (error) {
				console.error("Error fetching repo data:", error);
			}
		};
		fetchRepo();
	}, []);

	return (
		repo && (
			<div className="flex flex-col items-center justify-center gap-3 mb-10 p-3 dark:border-slate-800/50 dark:bg-slate-900/5  border-[1px] rounded-md backdrop-blur-lg">
				<div className="relative w-full h-auto aspect-[16/9] rounded-lg overflow-hidden">
					<Image
						src={cover}
						alt={name}
						fill
						className="object-cover rounded-lg shadow-lg"
					/>
				</div>
				<div className="flex flex-row items-center justify-between w-full mt-2">
					<h1 className="text-xl font-semibold dark:text-white cursor-default">
						{name}
					</h1>
					<div className="flex flex-row items-center gap-2">
						<a
							href={repo.homepage}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm border-gray-400 dark:border-slate-800/50 border-[1px] rounded-md p-2 hover:bg-gray-200 dark:text-white  dark:hover:bg-slate-800/50 transition duration-300 ease-in-out"
						>
							<FaExternalLinkAlt className="w-5 h-5" />
						</a>
						<a
							href={repo.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm border-gray-400 dark:border-slate-800/50 border-[1px] rounded-md p-2 hover:bg-gray-200 dark:text-white  dark:hover:bg-slate-800/50 transition duration-300 ease-in-out"
						>
							<FaGithub className="w-5 h-5" />
						</a>
					</div>
				</div>

				<p className="text-sm text-gray-500 dark:text-gray-400 text-left self-start cursor-default">
					{repo.description}
				</p>
				<div className="flex flex-row items-start justify-start mt-2">
					{tags.map((tag, index) => {
						return (
							<span
								key={index}
								className="text-xs cursor-default text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-slate-800/50 rounded-full px-2 py-1 mr-2 mb-2"
							>
								{tag}
							</span>
						);
					})}
				</div>
			</div>
		)
	);
};
