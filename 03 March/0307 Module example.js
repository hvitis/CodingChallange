var myModule = {
 
    myProperty: "someValue",
   
    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
      useCaching: true,
      language: "en"
    },
   
    // a very basic method
    saySomething: function () {
      console.log( "Where in the world is Paul Irish today?" );
    },
   
    // output a value based on the current configuration
    reportMyConfig: function () {
      console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
    },
   
    // override the current configuration
    updateMyConfig: function( newConfig ) {
   
      if ( typeof newConfig === "object" ) {
        this.myConfig = newConfig;
        console.log( "Language has been updated to: " + this.myConfig.language );
      }
    }
  };
   
  // Outputs: Where in the world is Paul Irish today?
  myModule.saySomething();
   
  // Outputs: Caching is: enabled
  myModule.reportMyConfig();
   
  // Outputs: fr
  myModule.updateMyConfig({
    language: "fr",
    useCaching: false
  });
   
  // Outputs: Caching is: disabled
  myModule.reportMyConfig();