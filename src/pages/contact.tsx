import { ContactForm } from "@/components/ContactForm";
import { ContactItem } from "@/components/ContactItem";
import { useState, useEffect } from "react";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const TimeInfo = () => {
	const date = new Intl.DateTimeFormat("en-US", {
		timeZone: "Europe/Prague",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	}).format(new Date());
	const date2 = new Intl.DateTimeFormat("en-US", {
		timeZone: "Europe/Prague",
		hour: "numeric",
		minute: "numeric",
		hour12: false,
	}).format(new Date());
	const hour = parseInt(date2.split(":")[0]);

	if (hour >= 5 && hour < 22) {
		return {
			time: date,
			msg: "awake",
		};
	} else {
		return {
			time: date,
			msg: "asleep",
		};
	}
};

const Contact = () => {
	const [time, setTime] = useState(TimeInfo());
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ ease: "easeOut", duration: 0.5 }}
			className="flex flex-col items-center justify-start w-full mt-24"
		>
			<div>
				<h1 className="text-3xl dark:text-white font-bold mb-4 mt-16">
					Let&apos;s Chat 💬
				</h1>
				<p className="text dark:text-gray-300 font-light tracking-wide">
					Have an inquiry, or want to connect? Feel free to leave a message
					below, or get in touch via Discord, Twitter, or email.
				</p>
			</div>
			<h1 className="dark:text-gray-300/50 self-start text-sm mb-8 mt-4">
				It&apos;s currently{" "}
				<span className="dark:text-gray-300/60 font-bold">{time.time}</span> for
				me, so I&apos;m probably{" "}
				<span className="dark:text-gray-300/60 font-bold">{time.msg}</span>.
				I&apos;ll get back to you soon
			</h1>
			<div className="grid md:grid-cols-3 md:grid-rows-4 grid-cols-1 w-full gap-[15px]">
				<ContactForm />
				<div className="w-full row-start-1 md:col-span-1 row-span-3 flex flex-col gap-[15px] z-[20]">
					<ContactItem
						name="justfossa"
						link="https://discord.com/users/750454092836503613"
						borderColor="hover:border-[#5865f2]"
						icon={<SiDiscord color={"#5865f2"} size={30} />}
					/>
					<ContactItem
						name="@Just_Fossa"
						link="https://twitter.com/@Just_Fossa"
						borderColor="hover:border-[#1a8cd8]"
						icon={<SiTwitter color={"#1a8cd8"} size={30} />}
					/>
					<ContactItem
						name="justfossa@tuta.io"
						link="mailto:justfossa@tuta.io"
						borderColor="hover:border-[#838994]"
						icon={<IoMailOutline color={"#838994"} size={30} />}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
