<?php

/**
 * Plugin Name: Add Customer for WooCommerce
 * Class description: Main Class. Includes the plugins functionalities to front- and backend. 
 * Author: Dan's Art
 * Author URI: http://dev.dans-art.ch
 *
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
class woo_add_customer extends woo_add_customer_helper
{

    public function __construct()
    {
        $this -> plugin_path = WP_PLUGIN_DIR . '/add-customer-for-woocommerce/';
    }
    /**
     * Loads the admin class
     *
     * @return void
     */
    public function wac_admin_init()
    {
        $adminclass = new woo_add_customer_admin;
    }
}
