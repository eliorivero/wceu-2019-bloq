/**
 * External dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import './style.scss';
import Edit from './edit';

const settings = {
	id: 'wceu2019bloq/skill-bar-4',
	settings: {
		title: __( 'Skill bar 4', 'wceu2019bloq' ),
		icon: 'chart-bar',
		category: 'common',
		keywords: [ __( 'skill', 'wceu2019bloq' ), __( 'data', 'wceu2019bloq' ), __( 'visualization', 'wceu2019bloq' ) ],
		description: __( 'Show a labeled bar to indicate your proficiency from 0 to 100 on a certain skill.', 'wceu2019bloq' ),
		supports: { anchor: true },
		attributes: {
			title: {
				type: 'string',
				source: 'html',
				selector: 'strong',
			},
			size: {
				type: 'string',
				source: 'attribute',
				attribute: 'data-size',
				selector: '.wceu2019bloq__bar',
			},
			color: {
				type: 'string',
				source: 'attribute',
				attribute: 'data-color',
				selector: '.wceu2019bloq__bar',
			},
		},
		edit: Edit,
		save: ( { attributes: { title, size, color } } ) => {
			return (
				<div className="wceu2019bloq__skill-bar">
					<strong className="wceu2019bloq__label">{ title }</strong>
					<div className="wceu2019bloq__track">
						<div
							className="wceu2019bloq__bar"
							style={ {
								width: `${size}%`,
								backgroundColor: `${color.hex}`,
							} }
							data-color={ color }
							data-size={ size }
							/>
					</div>
				</div>
			);
		}
	}
};

export default settings;
