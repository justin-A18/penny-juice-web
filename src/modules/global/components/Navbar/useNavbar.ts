import { useEffect, useState } from "react";

export const useNavbar = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpenMenu(!isOpenMenu);
	};

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	const onCloseMenu = () => {
		setIsOpenMenu(false);
	};

	useEffect(() => {
		if (!isOpenMenu) return;

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpenMenu]);

	useEffect(() => {
		if (!isCartOpen) return;

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isCartOpen]);

	return {
		isOpenMenu,
		toggleMenu,
		onCloseMenu,
		toggleCart,
		isCartOpen,
	};
};
