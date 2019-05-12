/**
 * External dependencies
 */
const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { Component } = wp.element;
const { RangeControl } = wp.components;

class Edit extends Component {

	constructor() {
		super( ...arguments );
    }

    onChangeTitle = title => this.props.setAttributes( { title } );

	onChangeSize = size => {
		this.props.setAttributes( { size } );
	};

	render() {
		const {
			attributes: { title, size },
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
				<RangeControl
					label={ __( 'Bar length', 'wceu2019bloq' ) }
					initialPosition={ size }
					value={ size }
					onChange={ this.onChangeSize }
					min={ 0 }
					max={ 100 }
				/>
				<div className="wceu2019bloq__track">
					<div
						id={ `wceu2019bloq__bar-${ this.props.clientId }` }
						className="wceu2019bloq__bar"
						style={ { width: `${ size }%` } }
					/>
				</div>
			</div>
		);
	}
}

export default Edit;
