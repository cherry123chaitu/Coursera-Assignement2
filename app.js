(function(){
	angular.module('app',[])
	.controller('ListController',ListController)
	.factory('Factory',Factory);
	var count=0;
	var items=[];
	var boughtitems=[];
	ListController.$inject=['Factory'];
	function ListController(Factory){

		var list = this;

		var listService=Factory();

		list.items= listService.getItems();
		list.boughtitems=listService.showItems();
		list.itemName="";
		list.itemQuantity="";

		list.addItem=function(){
			listService.addItem(list.itemName, list.itemQuantity);
		};
		list.removeItem =function(itemIndex){ 
			listService.removeItem(itemIndex);
		};
	}

	function ListingService(){
		var service =this;
		
		var item1={
			name:"Cookies",
			quantity:"20 Bags"
		};
		var item2={
			name:"Cola",
			quantity:"10 Cases"
		};
		items.push(item1);
		items.push(item2);
		service.addItem =function(itemName,itemQuantity){
			var item={
				name : itemName,
				quantity: itemQuantity
			};
			
			items.push(item);
		}

		service.removeItem=function(itemIndex){
			boughtitems[count]=items[itemIndex];
			count++;
			items.splice(itemIndex,1);	
			
		};
		service.showItems=function(){
			return boughtitems;
		}

		service.getItems=function(){
			return items;
		}
	}
	function Factory(){
	var f=function(){
		return new ListingService();
	}
	return f;
}

})();