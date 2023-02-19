import Tippy from "@tippyjs/react";
import { IconType } from "react-icons";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective.css'

export const TechItem = ({ Icon, title }: { Icon: IconType, title: string }) => {
    return (
            <Tippy className="dark:bg-slate-900/50 mr-[10px]" arrow={false} theme='custom' content={title} placement={"top"} animation={"perspective"}>
                    <span><Icon size={35} className="mr-[10px] font-bold p-1 dark:text-white"  /></span>
            </Tippy>
    )
}