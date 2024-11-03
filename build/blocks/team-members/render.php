<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
extract($attributes );

$className = $className ?? '';
$blockClassName = 'wp-block-tmbp-team-members ' . $className . ' align' . $align;

?>

<div 
    class='<?php echo esc_attr( $blockClassName ); ?>' 
    data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
>
</div>