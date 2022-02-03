import React, { FC } from 'react';
import { IS_TRAVERSABLE } from '../utility/utils';

interface ICanTraverseProps {
	canTraverse: string;
}

export const CanTraverse: FC<ICanTraverseProps> = ({ canTraverse }) => {
	console.log("CanTraverse Rendered")
	if (canTraverse === IS_TRAVERSABLE.default) {
		return null;
	}

	const color = canTraverse == IS_TRAVERSABLE.yes ? 'green' : 'red';
	return (
		<p
			className='TraverseText'
			style={{
				color,
				borderColor: color,
			}}
		>
			{canTraverse}
		</p>
	);
};
