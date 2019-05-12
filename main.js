const { registerBlockType } = wp.blocks;

import skillBar from './skill-bar';
import skillBar1 from './skill-bar-1';
import skillBar2 from './skill-bar-2';
import skillBar3 from './skill-bar-3';
import skillBar4 from './skill-bar-4';

[ skillBar, skillBar1, skillBar2, skillBar3, skillBar4 ].forEach( block => {
	registerBlockType(
		block.id,
		block.settings
	);
} );
