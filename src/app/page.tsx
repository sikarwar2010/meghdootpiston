import DemoCarousel from "@/components/Home/DemoCarousel";
import GlobalReach from "@/components/Home/GlobalReach";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeEvent from "@/components/Home/HomeEvent";
import HomeProduct from "@/components/Home/HomeProduct";
import Mission from "@/components/Home/Mission";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Home',
	description: 'This is Home page of Meghdoot Pistons',
}

export default function Home() {
	return (
		<main className="">
			<DemoCarousel />
			<HomeAbout />
			<HomeEvent />
			<Mission />
			<GlobalReach/>
			<HomeProduct />
		</main>
	);
}
