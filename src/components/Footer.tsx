export const Footer = () => {
    return (
        <div className="w-full mt-24">
            <div className="w-full h-[1px] bg-black dark:bg-slate-700/20"></div>
            <h1 className="text-3xl font-semibold dark:text-gray-300/40 mt-4">JustFossa</h1>
            <h1 className="dark:text-gray-300/20 text-gray-400 mb-24">Software Engineer • {new Date().getFullYear()} </h1>
        </div>
    )
}