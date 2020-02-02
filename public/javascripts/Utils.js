const Utils = {
   
   randomNumber: function(min, max) {
      return Math.random() * (max - min) + min;
   },
   
   random_rgba: function() {
      var o = Math.round, r = Math.random, s = 255;
      return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
   }

}

export default Utils;