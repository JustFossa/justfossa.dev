import { AnimatePresence } from "framer-motion"
import { Footer, Navbar, RepoCard, TechItem } from "../components"
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
    SiMongodb,
    SiUbuntu,
    SiArduino,
    SiExpress,
    SiPostman,
    SiChartdotjs
} from "react-icons/si"
import axios from "axios"
import { useState, useEffect } from "react"
import { Repo } from "../components/RepoCard"

const getGithubStats = async () => {
    const stats = await axios.get("https://api.github-star-counter.workers.dev/user/justfossa")
    const repos = await axios.get("https://api.github.com/users/justfossa/repos?type=owner&per_page=100")
    const topRepos = repos.data.sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count).slice(0, 4);
    return {
        stats: stats.data,
        repos: topRepos
    }
}


export const Home = () => {
    const [stats, setStats] = useState({
        stars: 0,
        forks: 0,
    })
    const [repos, setRepos] = useState([])

    useEffect(() => {
        getGithubStats().then((data) => {
            setStats({
                stars: data.stats.stars,
                forks: data.stats.forks
            })
            setRepos(data.repos)
        })
    }, [])

    return (
        <div className="h-full w-full dark:bg-gradient-to-b dark:from-[#000000] dark:to-[#040a11] flex flex-col items-center">
             <Navbar selected="Home" />
            <div className="md:w-[45rem] w-[80%] flex flex-col items-center justify-start mt-24">
                <div>
                <h1 className="text-4xl dark:text-white md:text-5xl font-bold mt-14 mb-4">Hey, I'm JustFossa 👋</h1>
                    <p className=" dark:text-gray-300 tracking-wide mb-12">I'm a self-taught software engineer from the Czech republic. I'm currently pursuing full-stack web development to create stunning user experiences on the front-end, and scalable and secure infrastructure on the backend.</p>
                </div>
                <div>
                    <h1 className="text-3xl dark:text-white font-medium mb-4">What I Do 💭</h1>
                    <p className="text dark:text-gray-300 font-light tracking-wide mb-12">I'm passionate about every technology; from designing and developing software, through understanding how many moving parts of the internet work together, to cybersecurity, systems, programming, and so much more. I strive to learn more about these things every day, and utilize my knowledge to further understand <i>how</i> or <i>why</i> the technology around us works.</p>
                </div>
                <div>
                    <h1 className="text-3xl dark:text-white font-medium mb-4">Technologies 💻</h1>
                    <p className="text dark:text-gray-300 font-light tracking-wide mb-12">I use a variety of tools to streamline my development process and increase the quality of both my code, and my projects. Below is a list of technologies and languages I've had experience with in the past, or use currently.</p>
                </div>
                <div className="flex flex-wrap justify-center p-2 flex-row dark:border-slate-800/50 dark:bg-slate-900/5 border-[1px] rounded-md h-auto items-center">
                    <TechItem Icon={SiTypescript} title="Typescript" />
                    <TechItem Icon={SiReact} title="React" />
                    <TechItem Icon={SiVisualstudiocode} title="VS Code" />
                    <TechItem Icon={SiJavascript} title="Javascript" />
                    <TechItem Icon={SiNodedotjs} title="Node.js" />
                    <TechItem Icon={SiTailwindcss} title="TailwindCSS" />
                    <TechItem Icon={SiYarn} title="Yarn" />
                    <TechItem Icon={SiNpm} title="NPM" />
                    <TechItem Icon={SiMongodb} title="MongoDB" />
                    <TechItem Icon={SiUbuntu} title="Ubuntu" />
                    <TechItem Icon={SiGit} title="Git" />
                    <TechItem Icon={SiArduino} title="Arduino" />
                    <TechItem Icon={SiExpress} title="Express.js" />
                    <TechItem Icon={SiPostman} title="Postman" />
                    <TechItem Icon={SiChartdotjs} title="Chart.js" />
                </div>
                <div>
                    <h1 className="text-3xl dark:text-white font-medium mb-4 mt-12">Projects 🛠️</h1>
                    <p className="text dark:text-gray-300 font-light tracking-wide mb-12">
                    In my free time, I enjoy creating open source projects on <a className="text-violet-600 font-bold hover:underline" rel="noreferrer" href="https://github.com/JustFossa">GitHub</a>, so I can learn from others and showcase what I know. In total, all of my open sourced projects have earned me <span className="font-bold dark:text-slate-200">{stats.stars}</span> stars on GitHub, and <span className="font-bold dark:text-slate-200">{stats.forks}</span> forks. Below are some of my most popular repositories.
                    </p>
                </div>
                <div className="w-full grid gap-2 md:grid-rows-1 md:grid-cols-2 grid-cols-1 mb-12">
                        {
                            repos.map((repo: Repo) => (
                                <RepoCard key={repo.name} repo={repo} />
                            ))
                        }
                </div>
                <Footer />
            </div>  
        </div>
    )
}