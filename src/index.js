const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText , InnerBlocks } = wp.editor;

const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ,'core/heading','core/button'];

 const MY_TEMPLATE = [
	[ 'core/heading', { level:2 , placeholder: 'Block Title' } ],
	[ 'core/heading', { level: 4 , placeholder: 'Block Subtitle' } ],
	[ 'core/image', {} ],
	[ 'core/button', { placeholder: 'Click here to add URL' , text : 'Custom Button' } ],
]; 


registerBlockType('rf-block/custom-block', {
	title: __( 'RF Custom Block', 'custom-blocks' ),
	icon: 'block-default',
	category: 'common',
	
	
    edit: (props) => {
        return (
            <div class="custom-block-main">
                <InnerBlocks 
					allowedBlocks={ ALLOWED_BLOCKS } 
                    template={MY_TEMPLATE}
                    templateLock= {'all'}
                    orientation="horizontal"
                />
            </div>
        );
    },
    save: ( props ) => {
        return (
            <div>
                <InnerBlocks.Content/>
            </div>
        );
    }

});
