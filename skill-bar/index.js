/**
 * External dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import Edit from './edit';
import './style.scss';

const settings = {
	id: 'wceu2019bloq/skill-bar',
	settings: {
		title: __( 'Skill bar', 'wceu2019bloq' ),
		icon: (
			<svg viewBox="0 0 512 512">
				<path d="M59 275h400v80H59zM59 155h80v80H59zM179 155h80v80h-80z"/>
			</svg>
		),
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
			color: {
				type: 'string',
				source: 'attribute',
				attribute: 'data-color',
				selector: '.wceu2019bloq__bar',
			},
			size: {
				type: 'string',
				source: 'attribute',
				attribute: 'data-size',
				selector: '.wceu2019bloq__bar',
			},
			align: {
				type: 'string',
				default: 'none',
			},
		},
		edit: Edit,
		save: ( { attributes: { title, color, size, align } } ) => {
			return (
				<div className={`wceu2019bloq__skill-bar wceu2019bloq__${align}`}>
					<strong className="wceu2019bloq__label">{title}</strong>
					<div className="wceu2019bloq__track">
						<div
							className="wceu2019bloq__bar"
							data-color={color}
							data-size={size}
						/>
					</div>
				</div>
			);
		}
	}
};

export default settings;
