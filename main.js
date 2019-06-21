const { registerBlockType } = wp.blocks;

import skillBar1 from './skill-bar-1';
import skillBar2 from './skill-bar-2';
import skillBar3 from './skill-bar-3';
import skillBar4 from './skill-bar-4';
import skillBar5 from './skill-bar-5';

[ skillBar1, skillBar2, skillBar3, skillBar4, skillBar5 ].forEach( block => {
	registerBlockType(
		block.id,
		block.settings
	);
} );
