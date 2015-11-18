/* Drink main file */

var Products = [
{
 code : 1,
 name : "Grappa",
 level : 0.4,
 glassML : 300
},
{
 code : 2,
 name : "Birra",
 level : 0.05,
 glassML : 500
},
{
 code : 3,
 name : "Water",
 level : 0,
 glassML : 500
}   
];
    

var Drink = {
    _sum : 0,
  
    ALCOHOL_DANGER : 500,
    ALCOHOL_DRUNK  : 300,
  
    STATUS_DANGER : "danger",
    STATUS_DRUNK  : "drunk",
    STATUS_SOBER  : "sober",
  
    
    init : function (){
        this._sum = 0;
    },
    
    glup : function(code) {        
                
        var _pos = -1;
        for (var i=0; i< Products.length; i++){
            if (Products[i].code == code){
                _pos = i;
                break;
            }
        }
        
        if (_pos >=0){
            this._sum += Products[_pos].level * Products[_pos].glassML;
            return Products[_pos].level * Products[_pos].glassML ;
        } else {
            return null;
        }
        
    },
  
    getStatus : function(){
       if (this._sum <  this.ALCOHOL_DRUNK){
         return this.STATUS_SOBER;
       } else if (this._sum <  this.ALCOHOL_DANGER){
         return this.STATUS_DRUNK;
       } else {
         return this.STATUS_DANGER;
       }
    },
  
    getTotal : function(){
      return this._sum;
    }, 
     
};