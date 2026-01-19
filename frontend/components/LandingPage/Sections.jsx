import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<Image
					src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2070&auto=format&fit=crop"
					alt="Restaurant interior"
					fill
					className="object-cover opacity-30"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
			</div>

			<div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
				<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
					Savor the <span className="text-amber-500">Extraordinary</span>
				</h1>
				<p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
					Experience culinary perfection in every bite at GourmetHaven.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/items"
						className="px-8 py-4 bg-amber-600 rounded-full text-white font-semibold text-lg hover:bg-amber-700 transition-all shadow-lg hover:scale-105"
					>
						View Our Menu
					</Link>
					<Link
						href="/login"
						className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105"
					>
						Book a Table
					</Link>
				</div>
			</div>
		</section>
	);
}

export function FeaturesSection() {
	const features = [
		{
			title: 'Fresh Ingredients',
			desc: 'Sourced daily from local organic farms.',
		},
		{ title: 'Master Chefs', desc: 'Award-winning culinary artists at work.' },
		{ title: 'Elegant Ambiance', desc: 'Designed for comfort and luxury.' },
	];

	return (
		<section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-3 gap-12 text-center">
					{features.map((f, i) => (
						<div
							key={i}
							className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors duration-300"
						>
							<div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600 dark:text-amber-500 text-2xl font-bold">
								{i + 1}
							</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
								{f.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function AboutSection() {
	return (
		<section className="py-24 bg-gray-900 text-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row items-center gap-16">
					<div className="flex-1 relative">
						<div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl skew-y-3 transform hover:skew-y-0 transition-all duration-700">
							<Image
								src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
								alt="Chef cooking"
								fill
								className="object-cover"
							/>
						</div>
						<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-600 rounded-full blur-3xl opacity-20"></div>
					</div>
					<div className="flex-1">
						<h2 className="text-amber-500 font-medium tracking-widest uppercase mb-4">
							Our Story
						</h2>
						<h3 className="text-4xl md:text-5xl font-bold mb-6">
							A Legacy of <br />
							Flavors
						</h3>
						<p className="text-gray-400 text-lg mb-8 leading-relaxed">
							Founded in 2010, GourmetHaven started with a simple vision: to
							bring authentic, world-class dining to our community. Every dish
							tells a story of tradition, innovation, and passion.
						</p>
						<button className="text-amber-500 font-semibold hover:text-amber-400 transition-colors flex items-center gap-2 group">
							Read More{' '}
							<span className="group-hover:translate-x-1 transition-transform">
								→
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export function MenuHighlightSection() {
	return (
		<section className="py-24 bg-white relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Signature Dishes
					</h2>
					<div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{[1, 2, 3, 4].map(item => (
						<div
							key={item}
							className="group relative rounded-xl overflow-hidden cursor-pointer"
						>
							<div className="aspect-[4/5] relative">
								<Image
									src={`https://images.unsplash.com/photo-${
										item === 1
											? '1540189549336-e6e99c3679fe'
											: item === 2
												? '1565299624946-b28f40a0ae38'
												: item === 3
													? '1565958011703-44f9829ba187'
													: '1484723091739-30a097e8f929'
									}?q=80&w=1000&auto=format&fit=crop`}
									alt="Food"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="absolute bottom-6 left-6 text-white">
										<h4 className="text-xl font-bold">Dish Name {item}</h4>
										<p className="text-amber-400 font-medium">$24.00</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<Link
						href="/items"
						className="inline-block px-10 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all"
					>
						View Full Menu
					</Link>
				</div>
			</div>
		</section>
	);
}

export function TestimonialsSection() {
	return (
		<section className="py-24 bg-amber-50 dark:bg-gray-900 transition-colors duration-300">
			<div className="max-w-4xl mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
					What Our Guests Say
				</h2>
				<blockquote className="text-2xl md:text-3xl italic text-gray-700 dark:text-gray-300 font-light mb-8">
					&ldquo;The best dining experience I&apos;ve had in years. The atmosphere is
					magical, and the food is simply divine.&rdquo;
				</blockquote>
				<div className="flex items-center justify-center gap-4">
					<div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden relative">
						<Image
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
							alt="User"
							fill
							className="object-cover"
						/>
					</div>
					<div className="text-left">
						<div className="font-bold text-gray-900 dark:text-white">
							Sarah Johnson
						</div>
						<div className="text-amber-600 dark:text-amber-500 text-sm">
							Food Critic
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function GallerySection() {
	return (
		<section className="py-24 bg-white dark:bg-black transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
					Our Atmosphere
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
					<div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
						<Image
							src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
							alt="Gallery 1"
							fill
							className="object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
					<div className="col-span-1 relative rounded-2xl overflow-hidden">
						<Image
							src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
							alt="Gallery 2"
							fill
							className="object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
					<div className="col-span-1 relative rounded-2xl overflow-hidden">
						<Image
							src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
							alt="Gallery 3"
							fill
							className="object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
					<div className="col-span-2 relative rounded-2xl overflow-hidden">
						<Image
							src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop"
							alt="Gallery 4"
							fill
							className="object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export function CTASection() {
	return (
		<section className="py-24 bg-gray-900 text-white text-center relative overflow-hidden">
			<div className="absolute inset-0 z-0 opacity-20">
				<Image
					src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop"
					alt="Background"
					fill
					className="object-cover"
				/>
			</div>
			<div className="relative z-10 max-w-2xl mx-auto px-4">
				<h2 className="text-4xl font-bold mb-6">Ready to Taste the Magic?</h2>
				<p className="text-gray-300 mb-10 text-lg">
					Book your table now and indulge in an unforgettable culinary journey.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button className="px-8 py-4 bg-amber-600 rounded-full text-white font-bold hover:bg-amber-700 transition-colors shadow-lg">
						Reserve Now
					</button>
					<button className="px-8 py-4 bg-transparent border border-white/30 rounded-full text-white font-bold hover:bg-white/10 transition-colors">
						Contact Us
					</button>
				</div>
			</div>
		</section>
	);
}

// Export specific components used elsewhere if needed, or import them directly from here.
