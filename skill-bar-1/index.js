/**
 * External dependencies
 */
const { __ } = wp.i18n;
const { RichText } = wp.editor;

/**
 * Internal dependencies
 */
import './style.scss';

const settings = {
	id: 'wceu2019bloq/skill-bar-1',
	settings: {
		title: __( 'Skill bar 1', 'wceu2019bloq' ),
		icon: 'chart-bar',
		category: 'common',
		supports: { anchor: true },
		attributes: {
			title: {
				type: 'string',
				source: 'html',
				selector: 'strong',
			},
		},
		edit: props => {
			const {
				attributes: { title },
				className,
				isSelected
			} = props;
			const onChangeTitle = title => props.setAttributes( { title } );
			return (
				<div className={ className + ( isSelected ? ' edit' : '' ) }>
					<RichText
						value={ title }
						tagName="strong"
						className="wceu2019bloq__label"
						onChange={ onChangeTitle }
						formattingControls={ [] }
						placeholder={ __( 'Write the bar label…', 'wceu2019bloq' ) }
					/>
				</div>
			);
		},
		save: ( { attributes: { title } } ) => {
			return (
				<div className="wceu2019bloq__skill-bar">
					<strong className="wceu2019bloq__label">{ title }</strong>
				</div>
			);
		}
	}
};

export default settings;
