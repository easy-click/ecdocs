"use strict";(self.webpackChunkeasyclick_website=self.webpackChunkeasyclick_website||[]).push([[1071],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={},l="\u8282\u70b9\u670d\u52a1\u76f8\u5173",s={unversionedId:"zh-cn/zk/global/zk-node-service",id:"zh-cn/zk/global/zk-node-service",title:"\u8282\u70b9\u670d\u52a1\u76f8\u5173",description:"exit \u9000\u51fa\u811a\u672c",source:"@site/docs/zh-cn/zk/global/zk-node-service.md",sourceDirName:"zh-cn/zk/global",slug:"/zh-cn/zk/global/zk-node-service",permalink:"/docs/zh-cn/zk/global/zk-node-service",draft:!1,tags:[],version:"current",frontMatter:{}},u={},i=[{value:"exit \u9000\u51fa\u811a\u672c",id:"exit-\u9000\u51fa\u811a\u672c",level:2},{value:"setGestureActionMode \u624b\u52bf\u6a21\u5f0f\u4e8b\u4ef6\u7684\u64cd\u4f5c",id:"setgestureactionmode-\u624b\u52bf\u6a21\u5f0f\u4e8b\u4ef6\u7684\u64cd\u4f5c",level:2},{value:"openECSystemSetting \u6253\u5f00EC\u8bbe\u7f6e",id:"openecsystemsetting-\u6253\u5f00ec\u8bbe\u7f6e",level:2},{value:"isAccMode \u662f\u5426\u65e0\u969c\u788d\u6a21\u5f0f",id:"isaccmode-\u662f\u5426\u65e0\u969c\u788d\u6a21\u5f0f",level:2},{value:"isAgentMode \u662f\u5426\u4ee3\u7406\u6a21\u5f0f",id:"isagentmode-\u662f\u5426\u4ee3\u7406\u6a21\u5f0f",level:2},{value:"isServiceOk \u8282\u70b9\u670d\u52a1\u662f\u5426\u6b63\u5e38",id:"isserviceok-\u8282\u70b9\u670d\u52a1\u662f\u5426\u6b63\u5e38",level:2},{value:"startEnv \u542f\u52a8\u73af\u5883",id:"startenv-\u542f\u52a8\u73af\u5883",level:2},{value:"setECSystemConfig \u8bbe\u7f6eEC\u7cfb\u7edf\u53c2\u6570",id:"setecsystemconfig-\u8bbe\u7f6eec\u7cfb\u7edf\u53c2\u6570",level:2}],c={toc:i};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8282\u70b9\u670d\u52a1\u76f8\u5173"},"\u8282\u70b9\u670d\u52a1\u76f8\u5173"),(0,o.kt)("h2",{id:"exit-\u9000\u51fa\u811a\u672c"},"exit \u9000\u51fa\u811a\u672c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9000\u51fa\u811a\u672c")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "exit"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"setgestureactionmode-\u624b\u52bf\u6a21\u5f0f\u4e8b\u4ef6\u7684\u64cd\u4f5c"},"setGestureActionMode \u624b\u52bf\u6a21\u5f0f\u4e8b\u4ef6\u7684\u64cd\u4f5c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5404\u79cd\u624b\u52bf\u6a21\u5f0f\u4e8b\u4ef6\u7684\u64cd\u4f5c\u7c7b\u578b\uff0c\u9ed8\u8ba4\u662f\u5f02\u6b65,\u76ee\u524d\u53ea\u5bf9\u65e0\u969c\u788d\u6a21\u5f0f\u6709\u6548"),(0,o.kt)("li",{parentName:"ul"},"@param mode 1 \u4ee3\u8868\u5f02\u6b65\uff0c2\u4ee3\u8868\u540c\u6b65"),(0,o.kt)("li",{parentName:"ul"},"@param bool true\u4ee3\u8868\u6210\u529f false\u4ee3\u8868\u5931\u8d25")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "setGestureActionMode",\n      "mode": 2\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"openecsystemsetting-\u6253\u5f00ec\u8bbe\u7f6e"},"openECSystemSetting \u6253\u5f00EC\u8bbe\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00EC\u8bbe\u7f6e")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "openECSystemSetting"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"isaccmode-\u662f\u5426\u65e0\u969c\u788d\u6a21\u5f0f"},"isAccMode \u662f\u5426\u65e0\u969c\u788d\u6a21\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u662f\u5426\u65e0\u969c\u788d\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b\uff0ctrue\u4ee3\u8868\u662f\uff0cfalse\u4ee3\u8868\u5426")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "isAccMode"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"isagentmode-\u662f\u5426\u4ee3\u7406\u6a21\u5f0f"},"isAgentMode \u662f\u5426\u4ee3\u7406\u6a21\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u662f\u5426\u4ee3\u7406\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b\uff0ctrue\u4ee3\u8868\u662f\uff0cfalse\u4ee3\u8868\u5426")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "isAgentMode"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"isserviceok-\u8282\u70b9\u670d\u52a1\u662f\u5426\u6b63\u5e38"},"isServiceOk \u8282\u70b9\u670d\u52a1\u662f\u5426\u6b63\u5e38"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8282\u70b9\u670d\u52a1\u662f\u5426\u6b63\u5e38\uff0c\u4e0d\u533a\u5206\u8fd0\u884c\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b\uff0ctrue\u4ee3\u8868\u662f\uff0cfalse\u4ee3\u8868\u5426")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "isServiceOk"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"startenv-\u542f\u52a8\u73af\u5883"},"startEnv \u542f\u52a8\u73af\u5883"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8\u73af\u5883\uff0c\u6700\u597d\u5148\u6fc0\u6d3b\u624b\u673a\uff0c\u8fd9\u6837\u4f1a\u81ea\u52a8\u542f\u52a8\u73af\u5883\uff0c\u4e14\u514droot"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b\uff0ctrue\u4ee3\u8868\u662f\uff0cfalse\u4ee3\u8868\u5426")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "startEnv"\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))),(0,o.kt)("h2",{id:"setecsystemconfig-\u8bbe\u7f6eec\u7cfb\u7edf\u53c2\u6570"},"setECSystemConfig \u8bbe\u7f6eEC\u7cfb\u7edf\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u7f6eEC\u7cfb\u7edf\u53c2\u6570"),(0,o.kt)("li",{parentName:"ul"},"@param settings JSON\u5185\u90e8\u5c5e\u6027\u89e3\u91ca:"),(0,o.kt)("li",{parentName:"ul"},"running_mode : \u8fd0\u884c\u6a21\u5f0f \u503c\u6709 \u65e0\u969c\u788d\uff0c\u4ee3\u7406\u4e24\u79cd"),(0,o.kt)("li",{parentName:"ul"},"auto_start_service\uff1a \u5f00\u673a\u81ea\u542f\u52a8 \u503c\u6709 \u662f\uff0c\u5426 \u4e24\u79cd"),(0,o.kt)("li",{parentName:"ul"},"log_float_window : \u65e5\u5fd7\u60ac\u6d6e\u7a97\u5c55\u793a \u503c\u6709 \u662f\uff0c\u5426 \u4e24\u79cd"),(0,o.kt)("li",{parentName:"ul"},"ctrl_float_window : \u542f\u505c\u63a7\u5236\u60ac\u6d6e\u7a97\u5c55\u793a \u503c\u6709 \u662f\uff0c\u5426 \u4e24\u79cd"),(0,o.kt)("li",{parentName:"ul"},"@return \u5e03\u5c14\u578b\uff0ctrue\u4ee3\u8868\u662f\uff0cfalse\u4ee3\u8868\u5426")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    var request = require(\'request\');\n    var url = "http://127.0.0.1:20390/global";\n    var params = {\n      "type": "setECSystemConfig",\n      "settings": {"running_mode": "\u4ee3\u7406", "auto_start_service": "\u5426", "log_float_window": "\u5426", "ctrl_float_window": "\u5426"}\n    };\n    request({\n      url: url,\n      method: "POST",\n      json: true,\n      headers: {\n        "content-type": "application/json",\n      },\n      body: params\n    }, function (error, response, body) {\n      if (!error && response.statusCode == 200) {\n        console.log(body)\n      } else {\n        console.log(error)\n      }\n    });\n    \n'))))}p.isMDXComponent=!0}}]);