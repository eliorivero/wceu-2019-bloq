/**
 * External dependencies
 */
const { __ } = wp.i18n;
const { RichText, InspectorControls, AlignmentToolbar, BlockControls } = wp.editor;
const { Component } = wp.element;
const { ColorPicker, RangeControl } = wp.components;
import isEmpty from 'lodash/isEmpty';

class Edit extends Component {

	constructor() {
		super( ...arguments );
    }

    onChangeTitle = title => this.props.setAttributes( { title } );

    onChangeSize = size => {
	    this.props.setAttributes( { size } );
	    document.getElementById( `wceu2019bloq__bar-${ this.props.clientId }` ).style.width = size + '%'
    };

	onChangeColor = ( { hex } ) => {
		this.props.setAttributes( { color: hex } );
		document.getElementById( `wceu2019bloq__bar-${ this.props.clientId }` ).style[ 'background-color' ] = hex;
	};

	componentDidMount() {
		if ( isEmpty( this.props.attributes.size ) && isEmpty( this.props.attributes.color ) ) {
			this.onChangeColor( { hex: '#E5A' } );
			this.onChangeSize( '75' );
		}
	}

	onChangeAlign = align => {
		this.props.setAttributes( { align: align === undefined ? 'none' : align } );
	};

	render() {
		const { attributes: { title, size, color, align }, className, isSelected } = this.props;

		return (
			<div className={ className + ( isSelected ? ' edit' : '' ) }>
				<BlockControls>
					<AlignmentToolbar
						value={ align }
						onChange={ this.onChangeAlign }
					/>
				</BlockControls>
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
				<RichText
					value={ title }
					tagName="strong"
					className="wceu2019bloq__label"
					onChange={ this.onChangeTitle }
					formattingControls={ [] }
					style={ { textAlign: align } }
					placeholder={ __( 'Write the bar label…', 'wceu2019bloq' ) }
				/>
				<div className="wceu2019bloq__track">
					<div
						id={ `wceu2019bloq__bar-${ this.props.clientId }` }
						className="wceu2019bloq__bar"
						data-color={ color }
						data-size={ size }
					/>
				</div>
			</div>
		);
	}
}

export default Edit;
