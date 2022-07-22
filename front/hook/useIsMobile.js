import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useMobile = () => {
	const [isMobile, setIsMobile] = useState();
	const mobile = useMediaQuery({
		query: '(max-width:900px)',
	});

	useEffect(() => {
		// console.log(mobile);
		setIsMobile(mobile);
	}, [mobile]);
	return isMobile;
};
