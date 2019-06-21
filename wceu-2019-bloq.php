<?php
/**
 * Plugin Name: WCEU 2019 Bloq
 * Plugin URI: https://github.com/eliorivero/wceu-2019-bloq
 * Description: Block created during the workshop on Gutenberg block creation.
 * Version: 0.0.7
 * Author: Elio Rivero
 * Author URI: https://elio.blog
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Domain Path: /languages
 * Text Domain: wceu2019bloq
 *
 * @package wceu2019bloq
 */

defined( 'ABSPATH' ) || exit;

add_action( 'plugins_loaded', 'wceu2019bloq_localization' );
add_action( 'enqueue_block_editor_assets', 'wceu2019bloq_editor_assets' );
add_action( 'enqueue_block_assets', 'wceu2019bloq_assets' );

/**
 * Initialize localization routines
 *
 * @since 0.0.7
 */
function wceu2019bloq_localization() {
	load_plugin_textdomain( 'wceu2019bloq', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}

/**
 * Enqueue assets only on editor.
 *
 * @since 0.0.7
 */
function wceu2019bloq_editor_assets() {
	wp_enqueue_script(
		'wceu2019bloq-script',
		plugins_url( 'build/main.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
	);
}

/**
 * Enqueue assets on editor and front end.
 *
 * @since 0.0.7
 */
function wceu2019bloq_assets() {
	wp_enqueue_style(
		'wceu2019bloq-style',
		plugins_url( 'build/main.style.css', __FILE__ )
	);

	$post = get_post();
	if ( has_blocks( $post->post_content ) ) {
		$blocks = parse_blocks( $post->post_content );

		foreach ( $blocks as $block ) {
			if ( 'wceu2019bloq/skill-bar' === $block['blockName'] ) {
				wp_enqueue_script(
					'wceu2019bloq-skill-bar-motion',
					plugins_url( 'skill-bar/front.js', __FILE__ )
				);
				break;
			}
		}
	}
}
