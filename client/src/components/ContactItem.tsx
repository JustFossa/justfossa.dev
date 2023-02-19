import { ReactElement } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import {animated, useSpring} from "react-spring";
import {FiExternalLink} from "react-icons/fi";

const calc = (x: number, y: number) => [-(y - window.innerHeight / 3) / 35, (x - window.innerWidth / 1.5) / 30, 1.05];
const trans = (x: number, y: number, s: number): string => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const ContactItem = ({
    name,
    icon,
    link,
    borderColor,
}: {
    name: string;
    icon: ReactElement;
    link: string;
    borderColor?: string;
}) => {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 1, tension: 350, friction: 40 },
    }));

    return (
        <animated.a
                target="_blank"
                rel="noreferrer noopener"
                onMouseMove={({ clientX: x, clientY: y }) => {
                    set({xys: calc(x, y)});
                }}
                onMouseLeave={() => {
                    set({xys: [0, 0, 1]});
                }}
                style={{
                    transform: props.xys.to(trans)
                }}
                href={link}
                className={`w-full h-[4rem] dark:bg-white/5 border-[1px] dark:text-gray-400 dark:border-slate-700/20  rounded-lg flex flex-row items-center justify-start p-4 gap-2 ${borderColor} transition-colors ease-in-out duration-200 cursor-pointer`}
            >
                {icon}
                <h1 className="text-sm font-semibold">{name}</h1>
                <FiExternalLink size={40} className="w-5 h-5 ml-1 font-bold dark:text-gray-500" />
        </animated.a>
    )

}