/**
 * External dependencies
 */
const { __ } = wp.i18n;
const { RichText, InspectorControls } = wp.editor;
const { Component } = wp.element;
const { ColorPicker, RangeControl } = wp.components;

class Edit extends Component {

	constructor() {
		super( ...arguments );
    }

    onChangeTitle = title => this.props.setAttributes( { title } );

	onChangeSize = size => {
		this.props.setAttributes( { size } );
	};

	onChangeColor = ( { hex } ) => {
		this.props.setAttributes( { color: hex } );
	};

	render() {
		const {
			attributes: { title, size, color },
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
				<InspectorControls>
					<div className="wceu2019bloq__inspector-controls">
						<ColorPicker
							disableAlpha
							color={ color }
							onChangeComplete={ this.onChangeColor }
						/>
						<RangeControl
							label={ __( 'Bar length', 'wceu2019bloq' ) }
							initialPosition={ size }
							value={ size }
							onChange={ this.onChangeSize }
							min={ 0 }
							max={ 100 }
						/>
					</div>
				</InspectorControls>
				<div className="wceu2019bloq__track">
					<div
						id={ `wceu2019bloq__bar-${ this.props.clientId }` }
						className="wceu2019bloq__bar"
						style={ {
							width: `${size}%`,
							backgroundColor: `${color}`,
						} }
					/>
				</div>
			</div>
		);
	}
}

export default Edit;
