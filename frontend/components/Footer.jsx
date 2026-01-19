import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaMapMarkerAlt,
	FaPhone,
	FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 border-t border-gray-800 dark:border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					<div className="col-span-1 md:col-span-2">
						<h2 className="text-2xl font-bold text-white mb-4">GourmetHaven</h2>
						<p className="text-gray-400 max-w-sm">
							Experience the finest culinary delights in a warm and inviting
							atmosphere. Perfection on every plate.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-3 text-gray-400">
							<li>
								<a href="#" className="hover:text-amber-500 transition-colors">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-amber-500 transition-colors">
									Menu
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-amber-500 transition-colors">
									Reservations
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-amber-500 transition-colors">
									About Us
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Contact</h3>
						<ul className="space-y-3 text-gray-400">
							<li className="flex items-center gap-2">
								<FaMapMarkerAlt className="text-amber-500" /> 123 Culinary Ave,
								Food City
							</li>
							<li className="flex items-center gap-2">
								<FaPhone className="text-amber-500" /> +1 (555) 123-4567
							</li>
							<li className="flex items-center gap-2">
								<FaEnvelope className="text-amber-500" /> info@gourmethaven.com
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-500 text-sm">
						© 2024 GourmetHaven. All rights reserved.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a
							href="#"
							className="text-gray-400 hover:text-amber-500 transition-colors"
						>
							<FaFacebook size={20} />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-amber-500 transition-colors"
						>
							<FaTwitter size={20} />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-amber-500 transition-colors"
						>
							<FaInstagram size={20} />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-amber-500 transition-colors"
						>
							<FaLinkedin size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
