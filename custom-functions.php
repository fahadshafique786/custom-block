<?php
add_action( 'init', 'register_block' );

/**
 * Register block and styles
 */
function register_block() {
	// Block front end styles.
	wp_register_style(
		'gtcb-block-front-end-styles',
		RFCB_BLOCKS_URL . '/src/style.css',
		[],
		filemtime( RFCB_BLOCKS_PATH . '/src/style.css' )
	);

	// Block editor styles.
	wp_register_style(
		'gtcb-block-editor-styles',
		RFCB_BLOCKS_URL . '/src/editor.css',
		['wp-edit-blocks'],
		filemtime( RFCB_BLOCKS_PATH . '/src/editor.css' )
	);

	// Block Editor Script.
	wp_register_script(
		'gtcb-block-editor-js',
		RFCB_BLOCKS_URL . '/build/index.js',
		array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
		filemtime( RFCB_BLOCKS_PATH . '/build/index.js' ),
		true
	);

	register_block_type(
		'raja-block/custom-block',
		array(
			'style'         => 'gtcb-block-front-end-styles',
			'editor_style'  => 'gtcb-block-editor-styles',
			'editor_script' => 'gtcb-block-editor-js',
		)
	);
}


