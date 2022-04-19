<?php
/**
 * Plugin Name: RF Custom Blocks
 * Plugin URI: http://wordpress.org/plugins/rf-custom-blocks/
 * Description: Custom Block Plugin to generate a section block for Image Upload, Title , Subtitle & Button
 * Author: TechnologyBae
 * Version: 1.0.0
 * Author URI: #
 * text-domain: custom-blocks
 *
 * @package custom-blocks
*/

defined( 'ABSPATH' ) || exit;
define( 'RFCB_BLOCKS_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'RFCB_BLOCKS_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );

include 'custom-functions.php';
