(function ($) {
  // Register namespace
  $.extend(true, window, {
    "Slick": {
      "ColumnsMemory": ColumnsMemory
    }
  });


  function ColumnsMemory(options) {
    var _grid;
    var _self = this;
    var _defaults = {
      ajaxGetSlickColumnsMemory: window["QHGlobal"]["contextPath"] + "/comm/ajaxGetSlickColumnsMemory.do", 
      ajaxUpdateSlickColumnsMemory: window["QHGlobal"]["contextPath"] + "/comm/ajaxUpdateSlickColumnsMemory.do"
    };
    
    /**
     * Initialize plugin.
     */
    function init(grid) {
      options = $.extend(true, {}, _defaults, options);
      _grid = grid;
      if(!options.slickGridId)return;
      buildColumnsMemory();
      
      _grid.onColumnsReordered.subscribe(columnsMemory);
      _grid.onColumnsResized.subscribe(columnsMemory);
    }
    
    /**
     * Destroy plugin.
     */
    function destroy() {
      _grid.onColumnsReordered.subscribe(columnsMemory);
      _grid.onColumnsResized.subscribe(columnsMemory);
    }
    
    function buildColumnsMemory(){
		  $.ajax({url:options.ajaxGetSlickColumnsMemory,data:{slickGridId:options.slickGridId},success:function(data){
			  if(data.success){
				  var _columns = data.data;
				  var __tempColumns = [];
				  
				  for(var a = 0,b; b = _columns[a++];){
					  for(var i = 0,j;j = _grid.getColumns()[i++];){
						  if(b.columnId == j.id){
							  j.width = b.width;
							  __tempColumns.push(j);
							  break;
						  }
					  }
				  }
				  
				  var __hasColumns = false;
				  for(var i = 0,j;j = _grid.getColumns()[i++];){
					  __hasColumns = false;
					  for(var a = 0,b;b = __tempColumns[a++];){
						  if(b.id == j.id){
							  __hasColumns = true;
							  break;
						  }
					  }
					  if(!__hasColumns)__tempColumns.push(j);
				  }
				  _grid.setColumns(__tempColumns);
			  }
		  },dataType:"json"});
    }
    
    
    function columnsMemory() {
    	var _columns = _grid.getColumns();
    	var uiSlickGridColumnsResult = {};
    	uiSlickGridColumnsResult.slickGridId = options.slickGridId;
    	uiSlickGridColumnsResult.uiSlickGridColumnUserSettingVOs = [];
    	for(var i = 0,j;j = _grid.getColumns()[i++];){
    		uiSlickGridColumnsResult.uiSlickGridColumnUserSettingVOs.push({columnId:j.id,width:j.width,indexNum:i});
    	}
		  $.ajax({url:options.ajaxUpdateSlickColumnsMemory,type : "POST",data:{uiSlickGridColumnsResult:QihanFw.json2String(uiSlickGridColumnsResult)},success:function(data){
			  if(!data.success){
				  //alert(data.error);
			  }
		  },dataType:"json"});
    }

    
    // Public API
    $.extend(this, {
      "init": init,
      "destroy": destroy
    });
  }
})(jQuery);