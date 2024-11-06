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

function tmbp_init() {
    register_block_type( __DIR__ . '/build/blocks/team-members' );
}
add_action( 'init', 'tmbp_init' );


