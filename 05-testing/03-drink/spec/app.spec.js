describe("App", function() {
    
  describe("Drink.init", function() {
      
    it("should initialize _sum to zero", function() {
        Drink.init();
        expect(Drink._sum).toBe(0);
    });
    
    it("should not be anything else than zero", function() {
        Drink.init();
        expect(Drink._sum).not.toBe(300);
    });
      
  });
    
  describe("Drink.glup(drinkcode)", function() {
      
      it("should return alcohol milliliters in the drink", function() {
        expect( Drink.glup(2) ).toBe(25);
      });
      
      it("should return null if drinkcode doesn't exist", function() {
        expect( Drink.glup(4) ).toBe(null);
      });
      
  });
    
  describe("Drink.getStatus()", function() {
      
      beforeEach( function() {
         Drink.init(); 
      });
      
      it("should return sober if you're under drunk limit", function() {
          Drink.init();
          expect( Drink.getStatus() ).toBe(Drink.STATUS_SOBER);
      });
      
      
      it("should return drunk if you're just over drunk limit", function() {
        Drink.glup(1);
        Drink.glup(1);
        Drink.glup(2);
        Drink.glup(2);
        Drink.glup(2);
        expect( Drink.getStatus() ).toBe(Drink.STATUS_DRUNK);
      });
      
      it("should return drunk if you're under danger limit", function() {
        Drink.glup(1);
        Drink.glup(1);
        Drink.glup(1);
        Drink.glup(1);
        expect( Drink.getStatus() ).toBe(Drink.STATUS_DRUNK);
      });
      
      Drink._sum = parseInt(Drink.ALCOHOL_DANGER) + 1;
      it("should return danger if you're over danger limit", function() {
        Drink.glup(1);
        Drink.glup(1);
        Drink.glup(1);
        Drink.glup(1);
        Drink.glup(2);
        expect( Drink.getStatus() ).toBe(Drink.STATUS_DANGER);
      });
  });
    
  describe("Drink.getTotal()", function() {
     
      it("should return correct drunk milliliters of alcohol", function() {
            Drink.init();
            Drink.glup(1);
            Drink.glup(1);
          expect( Drink.getTotal() ).toBe(240);
      });
      
  });
     
});
