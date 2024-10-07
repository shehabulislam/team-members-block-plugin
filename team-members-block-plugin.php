<?php
/**
 * Plugin Name: Team Members Block Plugin
 * Description: A custom block for displaying team members.
 * Version: 1.0.0
 * Author: Your Name
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function create_block_team_members_block_init() {
    register_block_type( __DIR__ . '/build/blocks/team-members' );

    // wp_enqueue_style(
    //     'team-members-block-style',
    //     plugins_url( 'build/index.css', __FILE__ ),
    //     array(),
    //     filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' )
    // );
}
add_action( 'init', 'create_block_team_members_block_init' );