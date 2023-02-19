import {SiGithub, SiTwitter, SiDiscord} from 'react-icons/si'
import {IoMailOutline} from 'react-icons/io5'
import { IconType } from 'react-icons';
import Tippy, {tippy} from '@tippyjs/react';
import { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import {FiMoon, FiSun} from 'react-icons/fi'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective.css'
import { useRouter} from 'next/router';
import Link from 'next/link'

const NavItem = ({ title, href, isSelected }: { title: string; href: string, isSelected: boolean }) => {
    return (
            <Link href={href} className="dark:text-[#fff]">
                <h1 className={isSelected ? "dark:bg-[#c8c8dc]/10 px-[12px] py-[8px] rounded-md bg-slate-500/20 text-sm" : " bg-transparent hover:bg-slate-500/10 dark:hover:bg-[#c8c8dc]/5 transition-all duration-300 text-sm ease-in-out px-[12px] py-[8px] rounded-md"}>{title}</h1>
            </Link>
    )
}

const LinkButton = ({ title, Icon, href, onClick }: any) => {
    return (
        <Tippy className="dark:bg-slate-900/70 p-1 mr-[10px]" arrow={false} theme='custom' content={title} placement={"bottom"} duration={300} animation={"perspective"}>
            <Link rel="noreferrer" target="_blank" href={href}>
                <Icon size={26} onClick={onClick} className="mr-[10px] font-bold dark:text-white"  />
            </Link>
        </Tippy>
    );
};

const MobileNavItem = ({ title, href, isSelected }: { title: string; href: string, isSelected: boolean }) => {
    return (
        <div>
            <Link href={href} className="dark:text-[#fff] w-[50%]">
                <h1 className={`${isSelected ? "dark:bg-[#1c1f23] bg-gray-400/30" : " dark:bg-[#090c0f]  bg-white"} border-[1px] border-gray-300/50 dark:border-slate-800/50 text-center p-3 w-full transition-all duration-300 ease-in-out`}>{title}</h1>
            </Link>
        </div>
    )
}

const ThemeSwitcher = ({handleTheme, theme}: any) => {
    return (
        <div onClick={handleTheme} className="flex flex-row items-center justify-center cursor-pointer">
            {theme ? <FiMoon size={20} className="p-2 w-9 h-9 rounded-md font-bold dark:text-white hover:bg-slate-500/10 dark:hover:bg-[#c8c8dc]/5"  /> : <FiSun className="p-2 w-9 h-9 rounded-md font-bold dark:text-white hover:bg-slate-500/10 dark:hover:bg-[#c8c8dc]/5 "  />}
        </div>
    )
}

const MobileThemeSwitcher = ({handleTheme, theme}: any) => {
    return (
        <div onClick={handleTheme} className="flex flex-row items-center justify-center ml-2 cursor-pointer">
            {theme ? <FiMoon size={30} className="p-2 w-10 h-10 rounded-md font-bold dark:text-white cursor-pointer"  /> : <FiSun className="p-2 w-9 h-9 rounded-md font-bold dark:text-white cursor-pointer"  />}
        </div>
        )
}

export const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [theme, setTheme] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme == 'dark') {
            setTheme(true)
            document.documentElement.classList.add('dark')
        } else {
            setTheme(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const handleThemeChange = () => {
        setTheme(!theme)
        if (theme) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    }
 
    return (
        <>
            <div className="sm:hidden fixed flex md:w-[49rem] w-[90%] z-[555] h-[55px] items-center justify-between flex-row border-gray-400 dark:border-slate-800/50 border-[1px] mt-6 rounded-md backdrop-blur-lg dark:bg-[#12181d]/60">
                <div className="flex flex-row items-center gap-[5%] justify-start p-2">
                    <ThemeSwitcher handleTheme={handleThemeChange} theme={theme} />
                    <NavItem title="Home"  isSelected={router.pathname == "/"} href="/" />
                    <NavItem title="Contact" isSelected={router.pathname == "/contact"} href="/contact" />
                </div>
                <div className="flex flex-row items-center justify-end">
                    <LinkButton title="GitHub" Icon={SiGithub} href="https://github.com/JustFossa" />
                    <LinkButton title="Twitter" Icon={SiTwitter} href="httpa://twitter.com/Just_Fossa" />
                    <LinkButton title="Email" Icon={IoMailOutline} href="mailto:hello@justfossa.dev" />
                </div>
            </div>
            <div className="hidden sm:flex fixed w-full h-[65px] flex-row items-center justify-between z-[555] dark:border-b-slate-800/50 border-b-[1px] backdrop-blur-md dark:bg-[#12181d]/60">
                <MobileThemeSwitcher handleTheme={handleThemeChange} theme={theme} />
                {open ? <RxCross2 size={30} className="ml-auto mr-6 cursor-pointer dark:text-white"  onClick={() => setOpen(!open)} />  : <AiOutlineMenu size={30} className="ml-auto mr-6 cursor-pointer dark:text-white"  onClick={() => setOpen(!open)} />}
                {
                    open && (
                        <div className="fixed grid-cols-2 grid mt-[170px] w-full transition-all">
                            <MobileNavItem title="Home"  isSelected={router.pathname == "/"} href="/" />
                            <MobileNavItem title="Contact" isSelected={router.pathname == "/contact"} href="/contact" />
                            <div className="flex flex-row justify-center p-4 items-center w-full col-span-2 bg-white border-gray-400 dark:border-none border-b-[1px] dark:bg-[#090c0f]">
                                <LinkButton title="GitHub" Icon={SiGithub} href="https://github.com/JustFossa" />
                                <LinkButton title="Twitter" Icon={SiTwitter} href="https://twitter.com/Just_Fossa" />
                                <LinkButton title="Email" Icon={IoMailOutline} href="mailto:hello@justfossa.dev" />
                            </div>
                        </div>
                    )
                }
            </div>
            {open && <div className="sm:flex hidden z-[20] fixed w-full h-full backdrop-blur-lg" />}

        </>
    )
}