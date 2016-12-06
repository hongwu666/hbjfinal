/**
 * HashTable 
 */

HashTable = function(){
	var normalHashTable = {};
	var length = 0;
	
	this.isEmpty = function() {   
        return (length < 1);   
    }; 
	this.clear = function() {   
       normalHashTable = {};
       length = 0; 
    };
	this.size = function(){
		return	length;
	};
	this.put = function(_key, _value){
		if(!this.containsKey(_key)){
			length ++;
		}
		return normalHashTable[_key] = _value;
	};
	this.get = function(_key){
		return this.containsKey(_key) ? normalHashTable[_key] : null;
	};
	this.containsKey = function(_key) {   
        return (_key in normalHashTable);   
    }; 
	this.containsValue = function ( _value ){     
        for(var prop in normalHashTable){     
              if(normalHashTable[prop] == _value){     
                  return true;     
              }     
        }     
        return false;     
    };   
    this.remove = function(_key){
		if(_key in normalHashTable){
			var value = normalHashTable[_key];
			if(delete normalHashTable[_key]){
				length --;
				return value;
			}	
		}
		return null;
	};
	this.keys = function(){
		var arr = new Array();
		for(var _key in normalHashTable){
			arr.push(_key);
		}
		return arr;
	};
	this.values = function(){
		var arr = new Array();
		for(var _key in normalHashTable){
			arr.push(normalHashTable[_key]);
		}
		return arr;
	};
	/**    
     * 遍历Map,执行处理函数     
     * @param {Function} 回调函数 function(arrary){..}    
     */     
    this.each = function(fn){
        for (var key in normalHashTable) { 
          var value = normalHashTable[key], pair = [key, value];   
          pair.key = key;   
          pair.value = value;   
          fn(pair);   
        }   
    };
}

/**
		 * Sample usage.
		 * String.format("i am {0}, {1}", "strong", "haha");
		 * @param join
		 * @return
		 */
		String.format = function(fmt) {
			var params = arguments;
			var pattern = /{{|{[1-9][0-9]*}|\x7B0\x7D/g;
			return fmt.replace(pattern, function(p) {
				if (p == "{{")
					return "{";
				return params[parseInt(p.substr(1, p.length - 2), 10) + 1];
			});   
		};
		// 衍生源JS对象
		// String.prototype.trim
		String.prototype.trim = function(){
			return this.replace(/^\s+|\s+$/, "");
		};
		
		// String.prototype.htmlEncode
		String.prototype.htmlEncode = function(){
			var div = document.createElement("DIV");
			return function(){
				var text;
				div.appendChild(document.createTextNode(this));
				text = div.innerHTML;
				div.innerHTML = "";
				return text;
			};
		}();
		/**
		 * 截取字符串，兼容中文的情况
		 */
		String.prototype.sub = function(n){
			var r = /[^\x00-\xff]/g;
			if(this.replace(r, "mm").length <= n){
				return this;
			}
			var m = Math.floor(n/2);
			for(var i=m; i<this.length; i++){
				if(this.substr(0, i).replace(r, "mm").length >= n){
					return this.substr(0, i) + "...";
				}
			}
			return this;
		};
		
		/**  
	     * 扩展基础类  
	     * 得到字符串的长度，包括中文和英文  
	     **/  
	    String.prototype.byteLength = function() {
	    	var arr = this.match(/[^\x00-\xff]/ig);   
	        return this.length + (arr? arr.length : 0);
	    };
	    
	    String.prototype.replaceAll = function(s1,s2) {
	        return this.replace(new RegExp(s1,"gm"),s2);
	    }
	    
	    //一个应该常用的javascript string函数，不知为何没有直接提供
	    String.prototype.escapeHTML = function () {                                       
	        return this.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
	    };
		
	    String.prototype.unescapeHTML = function () {                                       
	        return this.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'\"').replace(/&nbsp;/g,' ');
	    };
	    
	    Array.prototype.indexOf = function (val) {
	    	for (var i = 0; i < this.length; i++) {
	    		if (this[i] == val) {
	    			return i;
	    		}
	    	}
	    	return -1;
	    };
	    /**
	     *  方法:Array.remove(dx)
	     *  功能:根据元素值删除数组元素.
	     *  参数:元素值
	     *  返回:在原数组上修改数组
	     */
	    Array.prototype.remove = function (val) {
	    	var index = this.indexOf(val);
	    	if (index > -1) {
	    		this.splice(index, 1);
	    	}
	    };
	    
	    Date.prototype.pattern = function(fmt) {      
		    var o = {         
		    "M+" : this.getMonth()+1, //月份         
		    "d+" : this.getDate(), //日         
		    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
		    "H+" : this.getHours(), //小时         
		    "m+" : this.getMinutes(), //分         
		    "s+" : this.getSeconds(), //秒         
		    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
		    "S" : this.getMilliseconds() //毫秒         
		    };         
		    var week = {         
		    "0" : "\u65e5",         
		    "1" : "\u4e00",         
		    "2" : "\u4e8c",         
		    "3" : "\u4e09",         
		    "4" : "\u56db",         
		    "5" : "\u4e94",         
		    "6" : "\u516d"        
		    };         
		    if(/(y+)/.test(fmt)){         
		        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
		    }         
		    if(/(E+)/.test(fmt)){         
		        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);         
		    }         
		    for(var k in o){         
		        if(new RegExp("("+ k +")").test(fmt)){         
		            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
		        }         
		    }         
		    return fmt;         
		};
		
		function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }
	jQuery.extend({  
	    browser: function()   
	    {  
	        var  
	        rwebkit = /(webkit)\/([\w.]+)/,  
	        ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,  
	        rmsie = /(msie) ([\w.]+)/,  
	        rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,      
	        browser = {},  
	        ua = window.navigator.userAgent,  
	        browserMatch = uaMatch(ua);  
	  
	        if (browserMatch.browser) {  
	            browser[browserMatch.browser] = true;  
	            browser.version = browserMatch.version;  
	        }  
	        return { browser: browser };  
	    },  
	});  
	