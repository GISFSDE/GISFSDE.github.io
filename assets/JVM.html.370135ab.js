const l=JSON.parse('{"key":"v-01dea4f5","path":"/posts/2021/JVM.html","title":"JVM\u4E0E\u4E0A\u5C42\u6280\u672F","lang":"zh-CN","frontmatter":{"index":2,"icon":"markdown","title":"JVM\u4E0E\u4E0A\u5C42\u6280\u672F","date":"2022-06-06T00:00:00.000Z","category":["JVM\u4E0E\u4E0A\u5C42\u6280\u672F"],"tag":["JVM\u4E0E\u4E0A\u5C42\u6280\u672F"],"summary":"\\n\u5411\u4E0B\u624E\u6DF1\uFF0C\u5411\u4E0A\u6269\u5C55\\n\\n","head":[["meta",{"property":"og:url","content":"https://www.gisfsde.com/posts/2021/JVM.html"}],["meta",{"property":"og:site_name","content":"GIS-FSDE"}],["meta",{"property":"og:title","content":"JVM\u4E0E\u4E0A\u5C42\u6280\u672F"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-16T05:33:26.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"GIS-FSDE"}],["meta",{"property":"article:tag","content":"JVM\u4E0E\u4E0A\u5C42\u6280\u672F"}],["meta",{"property":"article:published_time","content":"2022-06-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-16T05:33:26.000Z"}]]},"excerpt":"<blockquote>\\n<p>\u5411\u4E0B\u624E\u6DF1\uFF0C\u5411\u4E0A\u6269\u5C55</p>\\n</blockquote>\\n","headers":[{"level":2,"title":"\u7C7B\u52A0\u8F7D\u8FC7\u7A0B","slug":"\u7C7B\u52A0\u8F7D\u8FC7\u7A0B","children":[]},{"level":2,"title":"\u6574\u4F53\u7ED3\u6784","slug":"\u6574\u4F53\u7ED3\u6784","children":[]},{"level":2,"title":"\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u5B58\u6D3B","slug":"\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u5B58\u6D3B","children":[]},{"level":2,"title":"\u5783\u573E\u56DE\u6536\u7B97\u6CD5","slug":"\u5783\u573E\u56DE\u6536\u7B97\u6CD5","children":[]},{"level":2,"title":"\u5783\u573E\u56DE\u6536\u5668","slug":"\u5783\u573E\u56DE\u6536\u5668","children":[]},{"level":2,"title":"\u6DF1\u62F7\u8D1D\u6D45\u62F7\u8D1D","slug":"\u6DF1\u62F7\u8D1D\u6D45\u62F7\u8D1D","children":[]},{"level":2,"title":"\u53CC\u4EB2\u59D4\u6D3E\u673A\u5236","slug":"\u53CC\u4EB2\u59D4\u6D3E\u673A\u5236","children":[]},{"level":2,"title":"StringTable","slug":"stringtable","children":[]},{"level":2,"title":"\u4F18\u5316\u65B9\u6CD5","slug":"\u4F18\u5316\u65B9\u6CD5","children":[]},{"level":2,"title":"-XX\u9009\u9879\u8868","slug":"xx\u9009\u9879\u8868","children":[{"level":3,"title":"\u5806","slug":"\u5806","children":[]},{"level":3,"title":"\u65B9\u6CD5\u533A","slug":"\u65B9\u6CD5\u533A","children":[]},{"level":3,"title":"\u5783\u573E\u56DE\u6536\u5668","slug":"\u5783\u573E\u56DE\u6536\u5668-1","children":[]}]},{"level":2,"title":"1.JAVA\u4E0EJVM","slug":"_1-java\u4E0Ejvm","children":[{"level":3,"title":"Java\u5927\u4E8B\u4EF6","slug":"java\u5927\u4E8B\u4EF6","children":[]},{"level":3,"title":"JVM\u4ECB\u7ECD","slug":"jvm\u4ECB\u7ECD","children":[]}]},{"level":2,"title":"JVM\u6574\u4F53\u7ED3\u6784","slug":"jvm\u6574\u4F53\u7ED3\u6784","children":[]},{"level":2,"title":"Java\u4EE3\u7801\u6267\u884C\u6D41\u7A0B","slug":"java\u4EE3\u7801\u6267\u884C\u6D41\u7A0B","children":[]},{"level":2,"title":"JVM\u67B6\u6784\u6A21\u578B","slug":"jvm\u67B6\u6784\u6A21\u578B","children":[]},{"level":2,"title":"JVM\u751F\u547D\u5468\u671F","slug":"jvm\u751F\u547D\u5468\u671F","children":[{"level":3,"title":"\u542F\u52A8","slug":"\u542F\u52A8","children":[]},{"level":3,"title":"\u6267\u884C","slug":"\u6267\u884C","children":[]},{"level":3,"title":"\u9000\u51FA","slug":"\u9000\u51FA","children":[]}]},{"level":2,"title":"JVM\u53D1\u5C55\u5386\u7A0B","slug":"jvm\u53D1\u5C55\u5386\u7A0B","children":[{"level":3,"title":"SUN Classic VM","slug":"sun-classic-vm","children":[]},{"level":3,"title":"Exact VM","slug":"exact-vm","children":[]},{"level":3,"title":"SUN\u516C\u53F8\u7684 HotSpot VM","slug":"sun\u516C\u53F8\u7684-hotspot-vm","children":[]},{"level":3,"title":"BEA \u7684JRockit","slug":"bea-\u7684jrockit","children":[]},{"level":3,"title":"IBM \u7684J9","slug":"ibm-\u7684j9","children":[]},{"level":3,"title":"KVM\u548CcDC/CL.DC Hotspot","slug":"kvm\u548Ccdc-cl-dc-hotspot","children":[]},{"level":3,"title":"Azul VM","slug":"azul-vm","children":[]},{"level":3,"title":"Liquid VM","slug":"liquid-vm","children":[]},{"level":3,"title":"Apache Harmony","slug":"apache-harmony","children":[]},{"level":3,"title":"Microsoft JVM","slug":"microsoft-jvm","children":[]},{"level":3,"title":"TaobaoJVM","slug":"taobaojvm","children":[]},{"level":3,"title":"Dalvik VM :","slug":"dalvik-vm","children":[]},{"level":3,"title":"Graal VM","slug":"graal-vm","children":[]}]},{"level":2,"title":"1.\u5185\u5B58\u7B80\u56FE","slug":"_1-\u5185\u5B58\u7B80\u56FE","children":[]},{"level":2,"title":"2.\u7C7B\u52A0\u8F7D\u5668","slug":"_2-\u7C7B\u52A0\u8F7D\u5668","children":[]},{"level":2,"title":"3.\u7C7B\u52A0\u8F7D\u5668ClassLoader\u89D2\u8272","slug":"_3-\u7C7B\u52A0\u8F7D\u5668classloader\u89D2\u8272","children":[{"level":3,"title":"\u83B7\u53D6ClassLoader\u9014\u7ECF","slug":"\u83B7\u53D6classloader\u9014\u7ECF","children":[]}]},{"level":2,"title":"4.\u7C7B\u52A0\u8F7D\u8FC7\u7A0B","slug":"_4-\u7C7B\u52A0\u8F7D\u8FC7\u7A0B","children":[{"level":3,"title":"\u52A0\u8F7D(Loading):","slug":"\u52A0\u8F7D-loading","children":[]},{"level":3,"title":"\u94FE\u63A5","slug":"\u94FE\u63A5","children":[]},{"level":3,"title":"\u521D\u59CB\u5316:","slug":"\u521D\u59CB\u5316","children":[]}]},{"level":2,"title":"5.\u7C7B\u52A0\u8F7D\u5668\u5206\u7C7B","slug":"_5-\u7C7B\u52A0\u8F7D\u5668\u5206\u7C7B","children":[{"level":3,"title":"\xB7\u542F\u52A8\u7C7B\u52A0\u8F7D\u5668\uFF08\u5F15\u5BFC\u7C7B\u52A0\u8F7D\u5668\uFF0CBootstrap classLoader)","slug":"\xB7\u542F\u52A8\u7C7B\u52A0\u8F7D\u5668-\u5F15\u5BFC\u7C7B\u52A0\u8F7D\u5668-bootstrap-classloader","children":[]},{"level":3,"title":"\xB7\u6269\u5C55\u7C7B\u52A0\u8F7D\u5668\uFF08Extension ClassLoader)","slug":"\xB7\u6269\u5C55\u7C7B\u52A0\u8F7D\u5668-extension-classloader","children":[]},{"level":3,"title":"\xB7\u5E94\u7528\u7A0B\u5E8F\u7C7B\u52A0\u8F7D\u5668\uFF08\u7CFB\u7EDF\u7C7B\u52A0\u8F7D\u5668\uFF0CAppClassLoader)","slug":"\xB7\u5E94\u7528\u7A0B\u5E8F\u7C7B\u52A0\u8F7D\u5668-\u7CFB\u7EDF\u7C7B\u52A0\u8F7D\u5668-appclassloader","children":[]}]},{"level":2,"title":"6.\u53CC\u4EB2\u59D4\u6D3E\u673A\u5236","slug":"_6-\u53CC\u4EB2\u59D4\u6D3E\u673A\u5236","children":[{"level":3,"title":"\u5DE5\u4F5C\u539F\u7406","slug":"\u5DE5\u4F5C\u539F\u7406","children":[]},{"level":3,"title":"\u53CC\u4EB2\u59D4\u6D3E\u4F18\u52BF","slug":"\u53CC\u4EB2\u59D4\u6D3E\u4F18\u52BF","children":[]},{"level":3,"title":"\u6C99\u7BB1\u5B89\u5168\u673A\u5236","slug":"\u6C99\u7BB1\u5B89\u5168\u673A\u5236","children":[]}]},{"level":2,"title":"7.\u5176\u4ED6","slug":"_7-\u5176\u4ED6","children":[{"level":3,"title":"\u5BF9\u7C7B\u52A0\u8F7D\u5176\u7684\u5F15\u7528","slug":"\u5BF9\u7C7B\u52A0\u8F7D\u5176\u7684\u5F15\u7528","children":[]},{"level":3,"title":"\u7C7B\u7684\u4E3B\u52A8\u4F7F\u7528\u548C\u88AB\u52A8\u4F7F\u7528","slug":"\u7C7B\u7684\u4E3B\u52A8\u4F7F\u7528\u548C\u88AB\u52A8\u4F7F\u7528","children":[]}]},{"level":2,"title":"1.\u8FD0\u884C\u65F6\u6570\u636E\u533A\u5185\u90E8\u7ED3\u6784","slug":"_1-\u8FD0\u884C\u65F6\u6570\u636E\u533A\u5185\u90E8\u7ED3\u6784","children":[]},{"level":2,"title":"2.\u7EBF\u7A0B","slug":"_2-\u7EBF\u7A0B","children":[{"level":3,"title":"1.Program Counter Register\u4ECB\u7ECD","slug":"_1-program-counter-register\u4ECB\u7ECD","children":[]},{"level":3,"title":"2.\u7A0B\u5E8F\u793A\u4F8B","slug":"_2-\u7A0B\u5E8F\u793A\u4F8B","children":[]},{"level":3,"title":"3.\u4E24\u4E2A\u95EE\u9898","slug":"_3-\u4E24\u4E2A\u95EE\u9898","children":[]},{"level":3,"title":"1.\u6808\u4E3B\u8981\u7279\u70B9","slug":"_1-\u6808\u4E3B\u8981\u7279\u70B9","children":[]},{"level":3,"title":"2.\u6808\u4E2D\u53EF\u80FD\u51FA\u73B0\u7684\u5F02\u5E38","slug":"_2-\u6808\u4E2D\u53EF\u80FD\u51FA\u73B0\u7684\u5F02\u5E38","children":[]},{"level":3,"title":"3.\u6808\u5B58\u50A8\u5355\u4F4D","slug":"_3-\u6808\u5B58\u50A8\u5355\u4F4D","children":[]},{"level":3,"title":"4.\u6808\u5E27\u7ED3\u6784","slug":"_4-\u6808\u5E27\u7ED3\u6784","children":[]}]},{"level":2,"title":"17.\u9762\u8BD5\u9898","slug":"_17-\u9762\u8BD5\u9898","children":[]},{"level":2,"title":"1.\u5806\u7684\u6838\u5FC3\u6982\u8FF0","slug":"_1-\u5806\u7684\u6838\u5FC3\u6982\u8FF0","children":[]},{"level":2,"title":"2.\u5806\u7684\u7EC6\u5206\u5185\u5B58\u7ED3\u6784","slug":"_2-\u5806\u7684\u7EC6\u5206\u5185\u5B58\u7ED3\u6784","children":[]},{"level":2,"title":"3.\u8BBE\u7F6E\u5806\u5185\u5B58\u5927\u5C0F\u4E0EOOM","slug":"_3-\u8BBE\u7F6E\u5806\u5185\u5B58\u5927\u5C0F\u4E0Eoom","children":[{"level":3,"title":"1.\u8BBE\u7F6E\u5806\u5185\u5B58","slug":"_1-\u8BBE\u7F6E\u5806\u5185\u5B58","children":[]},{"level":3,"title":"2.OOM\u8BF4\u660E\u4E0E\u4E3E\u4F8B","slug":"_2-oom\u8BF4\u660E\u4E0E\u4E3E\u4F8B","children":[]}]},{"level":2,"title":"4.\u5E74\u8F7B\u4EE3\u4E0E\u8001\u5E74\u4EE3","slug":"_4-\u5E74\u8F7B\u4EE3\u4E0E\u8001\u5E74\u4EE3","children":[{"level":3,"title":"\u53C2\u6570\u8BBE\u7F6E\uFF1A","slug":"\u53C2\u6570\u8BBE\u7F6E","children":[]},{"level":3,"title":"\u5BF9\u8C61\u6D41\u7A0B\uFF1A","slug":"\u5BF9\u8C61\u6D41\u7A0B","children":[]}]},{"level":2,"title":"5.\u5BF9\u8C61\u5206\u914D\u8FC7\u7A0B","slug":"_5-\u5BF9\u8C61\u5206\u914D\u8FC7\u7A0B","children":[{"level":3,"title":"1.\u4E00\u822C\u8FC7\u7A0B","slug":"_1-\u4E00\u822C\u8FC7\u7A0B","children":[]},{"level":3,"title":"2.\u7279\u6B8A\u60C5\u51B5","slug":"_2-\u7279\u6B8A\u60C5\u51B5","children":[]}]},{"level":2,"title":"6.\u5E38\u7528\u8C03\u4F18\u5DE5\u5177","slug":"_6-\u5E38\u7528\u8C03\u4F18\u5DE5\u5177","children":[]},{"level":2,"title":"7.Minor GC\u3001 Maior GC\u3001 Full GC","slug":"_7-minor-gc\u3001-maior-gc\u3001-full-gc","children":[{"level":3,"title":"1.\u5E74\u8F7B\u4EE3GC( Minor GC)\u89E6\u53D1\u673A\u5236\uFF1A","slug":"_1-\u5E74\u8F7B\u4EE3gc-minor-gc-\u89E6\u53D1\u673A\u5236","children":[]},{"level":3,"title":"2.\u8001\u5E74\u4EE3GC( Major  GC / Full GC) \u89E6\u53D1\u673A\u5236","slug":"_2-\u8001\u5E74\u4EE3gc-major-gc-full-gc-\u89E6\u53D1\u673A\u5236","children":[]},{"level":3,"title":"3.Full GC \u89E6\u53D1\u673A\u5236\uFF1A\uFF08\u540E\u9762\u7EC6\u8BB2\u89E6\u53D1Full GC\u6267\u884C\u7684\u60C5\u51B5\u6709\u5982\u4E0B\u4E94\u79CD\uFF1A","slug":"_3-full-gc-\u89E6\u53D1\u673A\u5236-\u540E\u9762\u7EC6\u8BB2\u89E6\u53D1full-gc\u6267\u884C\u7684\u60C5\u51B5\u6709\u5982\u4E0B\u4E94\u79CD","children":[]}]},{"level":2,"title":"8.GC\u4E3E\u4F8B\u4E0E\u65E5\u5FD7\u5206\u6790","slug":"_8-gc\u4E3E\u4F8B\u4E0E\u65E5\u5FD7\u5206\u6790","children":[]},{"level":2,"title":"9.\u5806\u7A7A\u95F4\u5206\u4EE3\u601D\u60F3","slug":"_9-\u5806\u7A7A\u95F4\u5206\u4EE3\u601D\u60F3","children":[]},{"level":2,"title":"10.\u5185\u5B58\u5206\u914D\u7B56\u7565\uFF08\u5BF9\u8C61\u63D0\u5347\u3010Promotion\u3011\u89C4\u5219\uFF09","slug":"_10-\u5185\u5B58\u5206\u914D\u7B56\u7565-\u5BF9\u8C61\u63D0\u5347\u3010promotion\u3011\u89C4\u5219","children":[]},{"level":2,"title":"11.\u5BF9\u8C61\u5206\u914D\u8FC7\u7A0B\uFF1ATLAB","slug":"_11-\u5BF9\u8C61\u5206\u914D\u8FC7\u7A0B-tlab","children":[{"level":3,"title":"1.\u4E3A\u4EC0\u4E48\u6709TLAB( Thread Local Allocation Buffer)?","slug":"_1-\u4E3A\u4EC0\u4E48\u6709tlab-thread-local-allocation-buffer","children":[]},{"level":3,"title":"2.\u4EC0\u4E48\u662FTLAB?","slug":"_2-\u4EC0\u4E48\u662Ftlab","children":[]}]},{"level":2,"title":"12.\u5806\u7A7A\u95F4\u5E38\u89C1\u53C2\u6570","slug":"_12-\u5806\u7A7A\u95F4\u5E38\u89C1\u53C2\u6570","children":[]},{"level":2,"title":"13.\u901A\u8FC7\u9003\u9038\u5206\u6790\u770B\u5806\u7A7A\u95F4\u7684\u5BF9\u8C61\u5206\u914D","slug":"_13-\u901A\u8FC7\u9003\u9038\u5206\u6790\u770B\u5806\u7A7A\u95F4\u7684\u5BF9\u8C61\u5206\u914D","children":[]},{"level":2,"title":"14.\u9003\u9038\u5206\u6790\uFF1A\u4EE3\u7801\u4F18\u5316","slug":"_14-\u9003\u9038\u5206\u6790-\u4EE3\u7801\u4F18\u5316","children":[{"level":3,"title":"1.\u6808\u4E0A\u5206\u914D","slug":"_1-\u6808\u4E0A\u5206\u914D","children":[]},{"level":3,"title":"2.\u540C\u6B65\u7701\u7565\uFF08\u9501\u6D88\u9664\uFF09","slug":"_2-\u540C\u6B65\u7701\u7565-\u9501\u6D88\u9664","children":[]},{"level":3,"title":"3.\u5206\u79BB\u5BF9\u8C61\u6216\u6807\u91CF\u66FF\u6362","slug":"_3-\u5206\u79BB\u5BF9\u8C61\u6216\u6807\u91CF\u66FF\u6362","children":[]},{"level":3,"title":"4.\u5806\u4E0D\u662F\u5206\u914D\u5BF9\u8C61\u5B58\u50A8\u7684\u552F\u4E00\u9009\u62E9\u5417\uFF1F","slug":"_4-\u5806\u4E0D\u662F\u5206\u914D\u5BF9\u8C61\u5B58\u50A8\u7684\u552F\u4E00\u9009\u62E9\u5417","children":[]}]},{"level":2,"title":"1.\u6808\u3001\u5806\u3001\u65B9\u6CD5\u533A\u95F4\u7684\u4EA4\u4E92\u5173\u7CFB","slug":"_1-\u6808\u3001\u5806\u3001\u65B9\u6CD5\u533A\u95F4\u7684\u4EA4\u4E92\u5173\u7CFB","children":[]},{"level":2,"title":"2.\u65B9\u6CD5\u533A\u57FA\u672C\u7406\u89E3","slug":"_2-\u65B9\u6CD5\u533A\u57FA\u672C\u7406\u89E3","children":[]},{"level":2,"title":"3.HotSpot\u4E2D\u65B9\u6CD5\u533A\u7684\u6F14\u8FDB","slug":"_3-hotspot\u4E2D\u65B9\u6CD5\u533A\u7684\u6F14\u8FDB","children":[]},{"level":2,"title":"4.\u8BBE\u7F6E\u65B9\u6CD5\u533A\u5927\u5C0F","slug":"_4-\u8BBE\u7F6E\u65B9\u6CD5\u533A\u5927\u5C0F","children":[]},{"level":2,"title":"5.OOM\u4E3E\u4F8B","slug":"_5-oom\u4E3E\u4F8B","children":[]},{"level":2,"title":"6.\u65B9\u6CD5\u533A\u5185\u90E8\u7ED3\u6784","slug":"_6-\u65B9\u6CD5\u533A\u5185\u90E8\u7ED3\u6784","children":[{"level":3,"title":"\u7C7B\u578B\u4FE1\u606F\uFF1A","slug":"\u7C7B\u578B\u4FE1\u606F","children":[]},{"level":3,"title":"\u57DF\uFF08Filed\uFF09\u4FE1\u606F","slug":"\u57DF-filed-\u4FE1\u606F","children":[]},{"level":3,"title":"\u65B9\u6CD5\uFF08Method\uFF09\u4FE1\u606F","slug":"\u65B9\u6CD5-method-\u4FE1\u606F","children":[]},{"level":3,"title":"\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60VS\u5E38\u91CF\u6C60","slug":"\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60vs\u5E38\u91CF\u6C60","children":[]}]},{"level":2,"title":"7.\u65B9\u6CD5\u533A\u7684\u6F14\u8FDB\u7EC6\u8282","slug":"_7-\u65B9\u6CD5\u533A\u7684\u6F14\u8FDB\u7EC6\u8282","children":[{"level":3,"title":"1.\u9996\u5148\u660E\u786E\uFF1A\u53EA\u6709 HotSpot\u30AA\u6709\u6C38\u4E45\u4EE3\u3002","slug":"_1-\u9996\u5148\u660E\u786E-\u53EA\u6709-hotspot\u30AA\u6709\u6C38\u4E45\u4EE3\u3002","children":[]},{"level":3,"title":"2, HotSpot\u4E2D\u65B9\u6CD5\u533A\u7684\u53D8\u5316\uFF1A","slug":"_2-hotspot\u4E2D\u65B9\u6CD5\u533A\u7684\u53D8\u5316","children":[]},{"level":3,"title":"3.\u6C38\u4E45\u4EE3\u4E3A\u4EC0\u4E48\u8981\u88AB\u5143\u7A7A\u95F4\u66FF\u6362\uFF1F","slug":"_3-\u6C38\u4E45\u4EE3\u4E3A\u4EC0\u4E48\u8981\u88AB\u5143\u7A7A\u95F4\u66FF\u6362","children":[]},{"level":3,"title":"4\u3001Stringtable\u4E3A\u4EC0\u4E48\u8981\u8C03\u6574\uFF1F","slug":"_4\u3001stringtable\u4E3A\u4EC0\u4E48\u8981\u8C03\u6574","children":[]}]},{"level":2,"title":"8.\u9759\u6001\u53D8\u91CF\u5B58\u5728\u54EA","slug":"_8-\u9759\u6001\u53D8\u91CF\u5B58\u5728\u54EA","children":[]},{"level":2,"title":"9.\u65B9\u6CD5\u533A\u5783\u573E\u56DE\u6536","slug":"_9-\u65B9\u6CD5\u533A\u5783\u573E\u56DE\u6536","children":[]},{"level":2,"title":"1.\u5BF9\u8C61\u5B9E\u4F8B\u5316\u7684\u51E0\u79CD\u65B9\u5F0F","slug":"_1-\u5BF9\u8C61\u5B9E\u4F8B\u5316\u7684\u51E0\u79CD\u65B9\u5F0F","children":[]},{"level":2,"title":"2.\u521B\u5EFA\u5BF9\u8C61\u7684\u6B65\u9AA4","slug":"_2-\u521B\u5EFA\u5BF9\u8C61\u7684\u6B65\u9AA4","children":[{"level":3,"title":"1.\u5224\u65AD\u5BF9\u8C61\u5BF9\u5E94\u7684\u7C7B\u662F\u5426\u52A0\u8F7D\u3001\u94FE\u63A5\u3001\u521D\u59CB\u5316","slug":"_1-\u5224\u65AD\u5BF9\u8C61\u5BF9\u5E94\u7684\u7C7B\u662F\u5426\u52A0\u8F7D\u3001\u94FE\u63A5\u3001\u521D\u59CB\u5316","children":[]},{"level":3,"title":"2.\u4E3A\u5BF9\u8C61\u5206\u914D\u5185\u5B58","slug":"_2-\u4E3A\u5BF9\u8C61\u5206\u914D\u5185\u5B58","children":[]},{"level":3,"title":"3.\u5904\u7406\u5E76\u53D1\u5B89\u5168\u95EE\u9898","slug":"_3-\u5904\u7406\u5E76\u53D1\u5B89\u5168\u95EE\u9898","children":[]},{"level":3,"title":"4,\u521D\u59CB\u5316\u5206\u914D\u5230\u7684\u7A7A\u95F4","slug":"_4-\u521D\u59CB\u5316\u5206\u914D\u5230\u7684\u7A7A\u95F4","children":[]},{"level":3,"title":"5,\u8BBE\u7F6E\u5BF9\u8C61\u7684\u5BF9\u8C61\u5934","slug":"_5-\u8BBE\u7F6E\u5BF9\u8C61\u7684\u5BF9\u8C61\u5934","children":[]},{"level":3,"title":"6,\u6267\u884Cinit\u65B9\u6CD5\u8FDB\u884C\u521D\u59CB\u5316","slug":"_6-\u6267\u884Cinit\u65B9\u6CD5\u8FDB\u884C\u521D\u59CB\u5316","children":[]}]},{"level":2,"title":"3.\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40","slug":"_3-\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40","children":[]},{"level":2,"title":"4.\u5BF9\u8C61\u8BBF\u95EE\u5B9A\u4F4D","slug":"_4-\u5BF9\u8C61\u8BBF\u95EE\u5B9A\u4F4D","children":[]},{"level":2,"title":"1.String\u7684\u57FA\u672C\u7279\u6027","slug":"_1-string\u7684\u57FA\u672C\u7279\u6027","children":[]},{"level":2,"title":"2.String\u7684\u5185\u5B58\u5206\u914D","slug":"_2-string\u7684\u5185\u5B58\u5206\u914D","children":[]},{"level":2,"title":"3.String\u7684\u57FA\u672C\u64CD\u4F5C","slug":"_3-string\u7684\u57FA\u672C\u64CD\u4F5C","children":[]},{"level":2,"title":"4.\u5B57\u7B26\u4E32\u62FC\u63A5\u64CD\u4F5C","slug":"_4-\u5B57\u7B26\u4E32\u62FC\u63A5\u64CD\u4F5C","children":[{"level":3,"title":"\u5B57\u7B26\u4E32\u5982\u4F55\u62FC\u63A5\uFF1F","slug":"\u5B57\u7B26\u4E32\u5982\u4F55\u62FC\u63A5","children":[]}]},{"level":2,"title":"5.intern\uFF08\uFF09\u7684\u4F7F\u7528","slug":"_5-intern-\u7684\u4F7F\u7528","children":[{"level":3,"title":"\u95EE\u9898","slug":"\u95EE\u9898","children":[]},{"level":3,"title":"\u5982\u4F55\u4FDD\u8BC1\u53D8\u91CFs\u6307\u5411\u7684\u662F\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u7684\u6570\u636E\u5462\uFF1F","slug":"\u5982\u4F55\u4FDD\u8BC1\u53D8\u91CFs\u6307\u5411\u7684\u662F\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u7684\u6570\u636E\u5462","children":[]},{"level":3,"title":"\u603B\u7ED3 stringl\u7684 intern\uFF08\uFF09\u7684\u4F7F\u7528","slug":"\u603B\u7ED3-stringl\u7684-intern-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"\u7A7A\u95F4\u6548\u7387\u6D4B\u8BD5","slug":"\u7A7A\u95F4\u6548\u7387\u6D4B\u8BD5","children":[]},{"level":3,"title":"\u5783\u573E\u56DE\u6536\u6D4B\u8BD5","slug":"\u5783\u573E\u56DE\u6536\u6D4B\u8BD5","children":[]},{"level":3,"title":"G1\u7684String\u53BB\u91CD\u64CD\u4F5C","slug":"g1\u7684string\u53BB\u91CD\u64CD\u4F5C","children":[]}]},{"level":2,"title":"1.\u4EC0\u4E48\u662F\u5783\u573E","slug":"_1-\u4EC0\u4E48\u662F\u5783\u573E","children":[]},{"level":2,"title":"2.\u60F3\u8981\u5B66\u4E60GC,\u9996\u5148\u9700\u8981\u7406\u89E3\u4E3A\u4EC0\u4E48\u9700\u8981GC?","slug":"_2-\u60F3\u8981\u5B66\u4E60gc-\u9996\u5148\u9700\u8981\u7406\u89E3\u4E3A\u4EC0\u4E48\u9700\u8981gc","children":[]},{"level":2,"title":"\u65E9\u671F\u5783\u573E\u56DE\u6536","slug":"\u65E9\u671F\u5783\u573E\u56DE\u6536","children":[]},{"level":2,"title":"Java\u5783\u573E\u56DE\u6536\u673A\u5236","slug":"java\u5783\u573E\u56DE\u6536\u673A\u5236","children":[]},{"level":2,"title":"1.\u5783\u573E\u6807\u8BB0\u9636\u6BB5\u7684\u7B97\u6CD5","slug":"_1-\u5783\u573E\u6807\u8BB0\u9636\u6BB5\u7684\u7B97\u6CD5","children":[{"level":3,"title":"1.\u5783\u573E\u6807\u8BB0\u9636\u6BB5\uFF1A\u5BF9\u8C61\u5B58\u6D3B\u5224\u65AD","slug":"_1-\u5783\u573E\u6807\u8BB0\u9636\u6BB5-\u5BF9\u8C61\u5B58\u6D3B\u5224\u65AD","children":[]}]},{"level":2,"title":"2.\u5BF9\u8C61\u7684 finalization\u673A\u5236","slug":"_2-\u5BF9\u8C61\u7684-finalization\u673A\u5236","children":[]},{"level":2,"title":"3.MAT\u4E0E Jprofiler\u7684GC Roots\u6E56\u6E90","slug":"_3-mat\u4E0E-jprofiler\u7684gc-roots\u6E56\u6E90","children":[{"level":3,"title":"MAT","slug":"mat","children":[]},{"level":3,"title":"Jprofiler","slug":"jprofiler","children":[]}]},{"level":2,"title":"4.\u5783\u573E\u6E05\u9664\u9636\u6BB5\u7B97\u6CD5\u4E4B\u6807\u8BB0\u4E00\u6E05\u9664\u7B97\u6CD5","slug":"_4-\u5783\u573E\u6E05\u9664\u9636\u6BB5\u7B97\u6CD5\u4E4B\u6807\u8BB0\u4E00\u6E05\u9664\u7B97\u6CD5","children":[{"level":3,"title":"\u6807\u8BB0 - \u6E05\u9664\u7B97\u6CD5\uFF08Mark Sweep)","slug":"\u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5-mark-sweep","children":[]},{"level":3,"title":"\u590D\u5236\u7B97\u6CD5( Copying)","slug":"\u590D\u5236\u7B97\u6CD5-copying","children":[]},{"level":3,"title":"\u6807\u8BB0 - \u538B\u7F29\u7B97\u6CD5\uFF08Mark Compact\uFF09","slug":"\u6807\u8BB0-\u538B\u7F29\u7B97\u6CD5-mark-compact","children":[]},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","children":[]}]},{"level":2,"title":"\u5206\u533A\u7B97\u6CD5","slug":"\u5206\u533A\u7B97\u6CD5","children":[{"level":3,"title":"\u589E\u91CF\u6536\u96C6\u7B97\u6CD5","slug":"\u589E\u91CF\u6536\u96C6\u7B97\u6CD5","children":[]}]},{"level":2,"title":"1.System.GC()\u7684\u7406\u89E3","slug":"_1-system-gc-\u7684\u7406\u89E3","children":[]},{"level":2,"title":"2.\u5185\u5B58\u6EA2\u51FA\u4E0E\u5185\u5B58\u6CC4\u6F0F","slug":"_2-\u5185\u5B58\u6EA2\u51FA\u4E0E\u5185\u5B58\u6CC4\u6F0F","children":[{"level":3,"title":"\u5185\u5B58\u6EA2\u51FA (\u6EE1\u4E86)","slug":"\u5185\u5B58\u6EA2\u51FA-\u6EE1\u4E86","children":[]},{"level":3,"title":"\u5185\u5B58\u6CC4\u6F0F\uFF08\u4E0D\u80FD\u56DE\u6536\uFF09","slug":"\u5185\u5B58\u6CC4\u6F0F-\u4E0D\u80FD\u56DE\u6536","children":[]}]},{"level":2,"title":"3.Stop The World","slug":"_3-stop-the-world","children":[]},{"level":2,"title":"4.\u5783\u573E\u56DE\u6536\u7684\u5E76\u53D1\u4E0E\u5E76\u884C","slug":"_4-\u5783\u573E\u56DE\u6536\u7684\u5E76\u53D1\u4E0E\u5E76\u884C","children":[]},{"level":2,"title":"5.\u5B89\u5168\u70B9\u4E0E\u5B89\u5168\u533A\u57DF","slug":"_5-\u5B89\u5168\u70B9\u4E0E\u5B89\u5168\u533A\u57DF","children":[]},{"level":2,"title":"6.\u5F15\u7528","slug":"_6-\u5F15\u7528","children":[{"level":3,"title":"\u5F3A\u5F15\u7528","slug":"\u5F3A\u5F15\u7528","children":[]},{"level":3,"title":"\u8F6F\u5F15\u7528","slug":"\u8F6F\u5F15\u7528","children":[]},{"level":3,"title":"\u5F31\u5F15\u7528","slug":"\u5F31\u5F15\u7528","children":[]},{"level":3,"title":"\u865A\u5F15\u7528","slug":"\u865A\u5F15\u7528","children":[]},{"level":3,"title":"\u7EC8\u7ED3\u5668\u5F15\u7528","slug":"\u7EC8\u7ED3\u5668\u5F15\u7528","children":[]}]},{"level":2,"title":"1.GC\u5206\u7C7B","slug":"_1-gc\u5206\u7C7B","children":[]},{"level":2,"title":"2.GC\u6027\u80FD\u8BC4\u4F30\u6307\u6807","slug":"_2-gc\u6027\u80FD\u8BC4\u4F30\u6307\u6807","children":[]},{"level":2,"title":"3.\u541E\u5410\u91CF\u4E0E\u6682\u505C\u65F6\u95F4","slug":"_3-\u541E\u5410\u91CF\u4E0E\u6682\u505C\u65F6\u95F4","children":[]},{"level":2,"title":"4\uFF0C\u5783\u573E\u56DE\u6536\u5668\u53D1\u5C55\u53F2","slug":"_4-\u5783\u573E\u56DE\u6536\u5668\u53D1\u5C55\u53F2","children":[{"level":3,"title":"\u5783\u573E\u6536\u96C6\u5668\u7684\u7EC4\u5408\u5173\u7CFB","slug":"\u5783\u573E\u6536\u96C6\u5668\u7684\u7EC4\u5408\u5173\u7CFB","children":[]}]},{"level":2,"title":"5.\u67E5\u770B\u9ED8\u8BA4\u5783\u573E\u56DE\u6536\u5668","slug":"_5-\u67E5\u770B\u9ED8\u8BA4\u5783\u573E\u56DE\u6536\u5668","children":[]},{"level":2,"title":"Serial \u4E32\u884C\u56DE\u6536","slug":"serial-\u4E32\u884C\u56DE\u6536","children":[]},{"level":2,"title":"ParNew \u5E76\u884C\u56DE\u6536","slug":"parnew-\u5E76\u884C\u56DE\u6536","children":[]},{"level":2,"title":"Parallel Scavenge \u541E\u5410\u91CF\u4F18\u5148","slug":"parallel-scavenge-\u541E\u5410\u91CF\u4F18\u5148","children":[]},{"level":2,"title":"CMS \u4F4E\u5EF6\u8FDF","slug":"cms-\u4F4E\u5EF6\u8FDF","children":[]},{"level":2,"title":"G1 \u533A\u57DF\u5206\u4EE3\u5316","slug":"g1-\u533A\u57DF\u5206\u4EE3\u5316","children":[{"level":3,"title":"\u4F18\u52BF","slug":"\u4F18\u52BF","children":[]},{"level":3,"title":"\u5E76\u884C\u4E0E\u5E76\u53D1","slug":"\u5E76\u884C\u4E0E\u5E76\u53D1","children":[]},{"level":3,"title":"\u5206\u4EE3\u6536\u96C6","slug":"\u5206\u4EE3\u6536\u96C6","children":[]},{"level":3,"title":"\u7A7A\u95F4\u6574\u5408","slug":"\u7A7A\u95F4\u6574\u5408","children":[]},{"level":3,"title":"\u53EF\u9884\u6D4B\u7684\u505C\u987F\u65F6\u95F4\u6A21\u578B(\u5373\uFF1A\u8F6F\u5B9E\u65F6 soft real-time)","slug":"\u53EF\u9884\u6D4B\u7684\u505C\u987F\u65F6\u95F4\u6A21\u578B-\u5373-\u8F6F\u5B9E\u65F6-soft-real-time","children":[]},{"level":3,"title":"\u53C2\u6570\u8BBE\u7F6E","slug":"\u53C2\u6570\u8BBE\u7F6E-1","children":[]},{"level":3,"title":"G1\u56DE\u6536\u5668\u5E38\u89C1\u6B65\u9AA4","slug":"g1\u56DE\u6536\u5668\u5E38\u89C1\u6B65\u9AA4","children":[]},{"level":3,"title":"\u4F7F\u7528\u573A\u666F","slug":"\u4F7F\u7528\u573A\u666F","children":[]},{"level":3,"title":"Region","slug":"region","children":[]},{"level":3,"title":"G1 \u56DE\u6536\u8FC7\u7A0B","slug":"g1-\u56DE\u6536\u8FC7\u7A0B","children":[]}]},{"level":2,"title":"\u5783\u573E\u56DE\u6536\u5668\u603B\u7ED3","slug":"\u5783\u573E\u56DE\u6536\u5668\u603B\u7ED3","children":[]},{"level":2,"title":"GC\u65E5\u5FD7\u5206\u6790","slug":"gc\u65E5\u5FD7\u5206\u6790","children":[]},{"level":2,"title":"\u65E5\u5FD7\u5206\u6790\u5DE5\u5177","slug":"\u65E5\u5FD7\u5206\u6790\u5DE5\u5177","children":[]},{"level":2,"title":"\u5783\u573E\u56DE\u6536\u5668\u7684\u65B0\u65F6\u4EE3\u53D1\u5C55","slug":"\u5783\u573E\u56DE\u6536\u5668\u7684\u65B0\u65F6\u4EE3\u53D1\u5C55","children":[]},{"level":2,"title":"ZGC","slug":"zgc","children":[]}],"git":{"createdTime":1655212572000,"updatedTime":1655357606000,"contributors":[{"name":"GISFSDE","email":"714416426@qq.com","commits":1},{"name":"Passion","email":"714416426@qq.com","commits":1}]},"readingTime":{"minutes":197.39,"words":59216},"filePathRelative":"posts/2021/JVM.md","localizedDate":"2022\u5E746\u67086\u65E5"}');export{l as data};
