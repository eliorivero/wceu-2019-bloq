/**
 * External dependencies
 */
const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { Component } = wp.element;

class Edit extends Component {

	constructor() {
		super( ...arguments );
    }

    onChangeTitle = title => this.props.setAttributes( { title } );

	render() {
		const {
			attributes: { title },
			className,
			isSelected
		} = this.props;

		return (
			<div className={ className + ( isSelected ? ' edit' : '' ) }>
				<RichText
					value={ title }
					tagName="strong"
					className="wceu2019bloq__label"
					onChange={ this.onChangeTitle }
					formattingControls={ [] }
					placeholder={ __( 'Write the bar label…', 'wceu2019bloq' ) }
				/>
			</div>
		);
	}
}

export default Edit;
