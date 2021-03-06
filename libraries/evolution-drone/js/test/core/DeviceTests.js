/*
 * Copyright (c) 2014 Brian Neisler. http://brianneisler.com
 *
 * evolution-drone may be freely distributed under the MIT license.
 */


//-------------------------------------------------------------------------------
// Annotations
//-------------------------------------------------------------------------------

//@TestFile

//@Require('Class')
//@Require('bugmeta.BugMeta')
//@Require('bugunit.TestTag')
//@Require('evolution.Device')


//-------------------------------------------------------------------------------
// Context
//-------------------------------------------------------------------------------

require('bugpack').context("*", function(bugpack) {

    //-------------------------------------------------------------------------------
    // BugPack
    //-------------------------------------------------------------------------------

    var Class       = bugpack.require('Class');
    var BugMeta     = bugpack.require('bugmeta.BugMeta');
    var TestTag     = bugpack.require('bugunit.TestTag');
    var Device      = bugpack.require('evolution.Device');


    //-------------------------------------------------------------------------------
    // Simplify References
    //-------------------------------------------------------------------------------

    var bugmeta     = BugMeta.context();
    var test        = TestTag.test;


    //-------------------------------------------------------------------------------
    // Declare Tests
    //-------------------------------------------------------------------------------

    /**
     * This tests
     * 1) Instantiation of a new Device
     */
    var deviceInstantiationTest = {

        // Setup Test
        //-------------------------------------------------------------------------------

        setup: function() {
            this.testHidDevice = {};
            this.testDevice = new Device(this.testHidDevice);
        },


        // Run Test
        //-------------------------------------------------------------------------------

        test: function(test) {
            test.assertTrue(Class.doesExtend(this.testDevice, Device),
                "Assert instance of Device");
            test.assertEqual(this.testDevice.getClass().getConstructor(), Device,
                "Assert #getClass#getConstructor returns Device");
            test.assertEqual(this.testDevice.getHidDevice(), this.testHidDevice,
                "Assert Device#getHidDevice returns testHidDevice");
        }
    };


    //-------------------------------------------------------------------------------
    // BugMeta
    //-------------------------------------------------------------------------------

    bugmeta.tag(deviceInstantiationTest).with(
        test().name("Device -  instantiation test")
    );
});
