/**
 * Plugin Name: Add Customer for WooCommerce
 * File description: Various Javascript functions.
 * Author: Dan's Art
 * Author URI: http://dev.dans-art.ch
 */
let wac_scripts = {

    construct(){
        /**
         * Fires on change of the wac checkbox. If selected, the "Notify customer" checkbox will be shown.
         */
        jQuery('#wac_add_customer').change(() => {
            this.wac_checkbox_checker();
        });

        //Run after document loaded to show the second checkbox.
        jQuery(document).ready(function(){
            wac_scripts.wac_checkbox_checker();
        });
    },

    /**
     * Checks if the secondary checkbox for the notification has to be shown or not.
     */
    wac_checkbox_checker(){
        if (jQuery('#wac_add_customer').is(":checked")) {
            jQuery('p.wac_add_customer_notify_field').show();
        } else {
            jQuery('p.wac_add_customer_notify_field').hide();
        }
    }

};

wac_scripts.construct();


