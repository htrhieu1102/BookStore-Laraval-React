import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 200) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<>
			{isVisible && (
				<Button
					onClick={scrollToTop}
					className="back-to-top btn btn-primary"
					style={{
						position: 'fixed',
						bottom: '20px',
						right: '20px',
						zIndex: 1000,
						padding:12,
						fontSize: 20,
						display: 'flex',

					}}
				>
					<FaArrowUp />
				</Button>
			)}
		</>
	);
};

export default BackToTopButton;
