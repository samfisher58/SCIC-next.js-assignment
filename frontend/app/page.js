import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
	HeroSection,
	FeaturesSection,
	AboutSection,
	MenuHighlightSection,
	TestimonialsSection,
	GallerySection,
	CTASection,
} from '../components/LandingPage/Sections';

export default function Home() {
	return (
		<main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
			<Navbar />
			<div className="flex flex-col">
				<HeroSection />
				<FeaturesSection />
				<AboutSection />
				<MenuHighlightSection />
				<TestimonialsSection />
				<GallerySection />
				<CTASection />
			</div>
			<Footer />
		</main>
	);
}
