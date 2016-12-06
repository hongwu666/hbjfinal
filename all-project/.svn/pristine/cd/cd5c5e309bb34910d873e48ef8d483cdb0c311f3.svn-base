(function ($) {
  function SlickGridPager(dataView, grid, $container, options) {
	var obj = this;
    var __filter = {};
    var defaults = {
	  pagesize: 50,
	  url: ''
	};
    var opts = $.extend(defaults, options);
    if(options.filter){
    	__filter.criteria_ = options.filter;
    }
    var h_request = null;
    var req = null; // ajax request
    var pageSize = 0;
    var pageNum = 0;
    var totalPages = 0;
    var totalRows = 0;

    function init() {
      pageSize = opts.pagesize;
      constructPagerUI();
      ajaxGetData(0);
    }

    function getNavState() {
      var cannotLeaveEditMode = !Slick.GlobalEditorLock.commitCurrentEdit();
      var lastPage = totalPages - 1;
      return {
        canGotoFirst: !cannotLeaveEditMode && pageSize != 0 && pageNum > 0,
        canGotoLast: !cannotLeaveEditMode && pageSize != 0 && pageNum != lastPage,
        canGotoPrev: !cannotLeaveEditMode && pageSize != 0 && pageNum > 0,
        canGotoNext: !cannotLeaveEditMode && pageSize != 0 && pageNum < lastPage
      };
    }
    
    function ajaxGetData(fromPage){
    	var param = $.extend(true,__filter,{
            start : fromPage * opts.pagesize,
            limit : opts.pagesize,
            _time_stamp_ : new Date().getTime(),
        });
    	if (h_request != null) {
            clearTimeout(h_request);
        }
    	h_request = setTimeout(function () {
    		
    		try{
    			  App.blockUI({
    		          boxed: true
    		      }); 
    		}catch(e){
    			
    		}
    		
    		req = $.ajax({
    			type : "POST",
    	        url: opts.url,
    	        async:true,
    	        dataType: "json",
    	        cache: true,
    			data : param,
    	        success: onSuccess,
    	        error: function () {
    	          
    	        },
    	        complete:onComplete
    	      });
    	});
        
    }
    
    var onComplete = function(){
    	
    };

    function onSuccess(resp){
    	
    	try{
    		 App.unblockUI(); 
		}catch(e){
			
		}
    	
    	totalRows = resp.totalRows;
    	totalPages = Math.ceil(parseInt(totalRows)/parseInt(pageSize));
    	updatePager();
    	dataView.setItems([]);
    	dataView.setItems(resp.results);
    	req = null;
    }
    
    obj.setSearch = function(str) {
     	__filter.criteria_ = str;
    };
    
    obj.setSort = function(str){
    	__filter.sort_ = str;
    };
    
    function setPageSize(n) {
      dataView.setRefreshHints({
        isFilterUnchanged: true
      });
      dataView.setPagingOptions({pageSize: n});
    }

    function gotoFirst() {
      if (getNavState().canGotoFirst) {
        pageNum = 0;
        ajaxGetData(0);
      }
    }

    function gotoLast() {
      var state = getNavState();
      if (state.canGotoLast) {
        pageNum = totalPages - 1;
        ajaxGetData(pageNum);
      }
    }

    function gotoPrev() {
      var state = getNavState();
      if (state.canGotoPrev) {
        pageNum = pageNum - 1;
        ajaxGetData(pageNum);
      }
    }

    function gotoNext() {
      var state = getNavState();
      if (state.canGotoNext) {
        pageNum = pageNum + 1;
        ajaxGetData(pageNum);
      }
    }
    
    function gotoPage(){
    	if(Slick.GlobalEditorLock.commitCurrentEdit()){
    		var page = $("#pageNo").val();
    		if(page >0 && page <= totalPages){
    			pageNum = page - 1;
    			ajaxGetData(pageNum);
    		}
    	}
    }
    
    obj.reload = function(exp,onC){
    	if(exp){
        	opts = $.extend(opts, exp);
    	}
    	$("#pageNo").val(1);
    	pageNum = 0;
    	if(onC){
    		onComplete = onC;
    	}else{
    		onComplete = function(){};
    	}
    	init();
    };
    
    obj.getOpt = function(){
    	return opts;
    };
    
    obj.url = function(url){
    	opts.url = url;
    	obj.reload();
    };
    
    function constructPagerUI() {
        $container.empty();

        var $pDiv = $("<div class='pDiv2'></div>").appendTo($container);
        var $pGroup = $("<div class='pGroup'></div>").appendTo($pDiv);
        $("<div class='btnseparator'></div>").appendTo($pDiv);
        var $pGroup1 = $("<div class='pGroup'></div>").appendTo($pDiv);
        $("<div class='btnseparator'></div>").appendTo($pDiv);
        var $pGroup2 = $("<div class='pGroup'></div>").appendTo($pDiv);
        $("<div class='btnseparator'></div>").appendTo($pDiv);
        var $pGroup3 = $("<div class='pGroup'></div>").appendTo($pDiv);
        $("<div class='btnseparator'></div>").appendTo($pDiv);
        var $pGroup4 = $("<div class='pGroup'></div>").appendTo($pDiv);
        $("<div class='pDivCustom'></div>").appendTo($pDiv);
        
        
        $("<span class='pControl'>第<input id='pageNo' type='text' size='4'>页,共<span></span>页</span>").appendTo($pGroup1);
        $("<span class='pPageStat'></span>").appendTo($pGroup4);

        var icon_prefix = "<div class=' ";
        var icon_middle = "	pButton om-icon'><span class='";
        var icon_suffix = "' /></span></div>";

        $pGroup1.find("span.pControl").find("input").keydown(function(event){
        	if(event.keyCode == 13 || event.keyCode == 108)
        		gotoPage();
        });
        
        $(icon_prefix + "pFirst" + icon_middle + "om-icon-seek-start" + icon_suffix)
            .click(gotoFirst).appendTo($pGroup);
        $(icon_prefix + "pPrev" + icon_middle + "om-icon-seek-prev" + icon_suffix)
        	.click(gotoPrev).appendTo($pGroup);
        $(icon_prefix + "pNext" + icon_middle + "om-icon-seek-next" + icon_suffix)
        	.click(gotoNext).appendTo($pGroup2);
        $(icon_prefix + "pLast" + icon_middle + "om-icon-seek-end" + icon_suffix)
        	.click(gotoLast).appendTo($pGroup2);
        
        $(icon_prefix + "pReload" + icon_middle + "om-icon-seek-refresh" + icon_suffix)
        .click(gotoPage).appendTo($pGroup3);
        
        $container.children().wrapAll("<div class='pDiv om-state-default' />");
      }

    function updatePager() {
      var state = getNavState();

      $container.find("div[class='pGroup']").find("div").removeClass("ui-state-disabled");
      if (!state.canGotoFirst) {
        $container.find(".pFirst").addClass("ui-state-disabled");
      }
      if (!state.canGotoLast) {
        $container.find(".pLast").addClass("ui-state-disabled");
      }
      if (!state.canGotoNext) {
        $container.find(".pNext").addClass("ui-state-disabled");
      }
      if (!state.canGotoPrev) {
        $container.find(".pPrev").addClass("ui-state-disabled");
      }

      $container.find(".pControl").find("input").val(pageNum + 1);
      $container.find(".pControl").find("span").html(totalPages);
      
      if(totalRows > 0){
    	  $container.find(".pPageStat").html("共" + totalRows + "条数据");
      }else{
    	  $container.find(".pPageStat").html("无数据");
      }
    }

    init();
    return obj;
  }

  // Slick.Controls.Pager
  $.extend(true, window, { Slick:{ Controls:{ Pager:SlickGridPager }}});
})(jQuery);
