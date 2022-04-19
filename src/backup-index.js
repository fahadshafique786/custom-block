
/******


registerBlockType( 'gtcb-blocks/custom-block', {

	title: __( 'Custom Block', 'custom-blocks' ),
	icon: 'megaphone',
	category: 'common',



	attributes: {
		button1: {
			type: 'string',
//			source: 'children',
			selector: 'button'
		},
		content: {
			type: 'string',
			default: 'Enter the title here',
			selector: 'h2'
		},
	},

	edit: ( props ) => {
		console.warn( 'props.attributes.fullName', props.attributes.button1 );
		let { attributes: { button1 , content } , setAttributes, className } = props;
		return (
 			(
			<RichText
				tagName="button"
				value={ button1 }
				onChange={ ( value ) => setAttributes( { button1: value } ) }
				className={ className }

			/>
			),
			(
 			<RichText
				tagName="button"
				value={ content	 }
				onChange={ ( value ) => setAttributes( { content: value } ) }
				className={ className }
			/>
			)
		)
	},
	save: ( props ) => {
		console.warn( 'save', props );
		let { attributes: { button1 , content }, className } = props;
		return (
		(
			<RichText.Content
				tagName="div"
				value={ button1 }
				className={ className }
			/>
 		),
		(
			<RichText.Content
				tagName="h2"
				value={ content }
				className={ className }
			/>
		)
		
		)
	}

} );



**********/



/* 

const MY_TEMPLATE = [
    ['core/columns', {
        columns: 2,
        innerBlocks: [
            ['core/column', {
                width: 33.33, innerBlocks: [
                    ['core/paragraph', {
                        placeholder: 'LHS Column',
                        content: __(
                            'LHS Lorem ipsum.....'
                        )
                    }]
                ]
            }],
            ['core/column', {
                width: 66.66, innerBlocks: [
                    ['core/paragraph', {
                        placeholder: 'RHS Column',
                        content: __(
                            'RHS Lorem ipsum.....'
                        )
                    }]
                ]
            }]
        ]
    }]
];
 
const MY_TEMPLATE = [
    ['core/columns', {
		columns: 2,
        innerBlocks: [
            ['core/column', {
				InnerBlocks: [
					[ 'core/image', {} ],
					[ 'core/heading', { placeholder: 'Block Title A' } ],
					[ 'core/paragraph', { placeholder: 'Block Subtitle' } ],						
				]
				
			}],

            ['core/column', {
				InnerBlocks: [
					[ 'core/image', {} ],
					[ 'core/heading', { placeholder: 'Book Title' } ],
					[ 'core/paragraph', { placeholder: 'Summary' } ],						
				]
				
			}],

			
        ]
		
		[ 'core/image', {} ],
		[ 'core/heading', { placeholder: 'Book Title' } ],
		[ 'core/paragraph', { placeholder: 'Summary' } ],
	}]
];

*********/

