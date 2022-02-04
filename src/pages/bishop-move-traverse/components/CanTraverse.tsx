import { FC } from 'react';
import { IsTraversable } from '../../../utility/utils';

interface ICanTraverseProps {
	canTraverse: string;
}

export const CanTraverse: FC<ICanTraverseProps> = ({ canTraverse }) => {
	if (canTraverse === IsTraversable.default) {
		return null;
	}

	const color =
		canTraverse == IsTraversable.yes
			? 'text-green-400 border-green-400'
			: 'text-red-400 border-red-400';
	return (
		<p className={`w-full py-4 text-center rounded-xl  border-2 ${color}`}>
			{canTraverse}
		</p>
	);
};
