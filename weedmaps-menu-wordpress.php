<?php
/*
Plugin Name: WeedMaps Menu for WordPress
Plugin URI: https://github.com/bmoredrew/WeedMaps-Menu-WordPress
Description: Easily embed a WeedMaps Menu into a page using a shortcode
Version: 1.2.0
Author: Drew Poland
Author URI: http://baltimoredrew.com/
License: GPL2
*/

if ( !defined( 'ABSPATH' ) ) exit;

/**
 * BD_WeedMaps_Embed class
 *
 * @class BD_WeedMaps_Embed The class that holds the entire BD_WeedMaps_Embed plugin
 */
class BD_WeedMaps_Embed {

    /**
     * Constructor for BD_WeedMaps_Embed class
     *
     * @uses add_shortcode()
     */
    public function __construct() {
        add_shortcode('weedmaps_menu', array( $this, 'wm_shortcode' ) );
    }

    /**
     * Shortcode [weedmaps_menu]
     */
    public function wm_shortcode( $atts = NULL, $content)  { 
        return "
                <script type='text/javascript'>var wmenu_id = $content;</script>
                <script type='text/javascript'>var wmenu_type = 'dispensaries';</script>
                <script type='text/javascript' src='https://weedmaps.com/components/com_weedmenu/weedmenu-widget.js'></script>
                ";
    }

} // BD_WeedMaps_Embed

new BD_WeedMaps_Embed();