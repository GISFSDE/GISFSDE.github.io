import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as c,c as o,a as n,b as i,e as a,d as s}from"./app.95807bc9.js";const d={},p=a(`<blockquote><h3 id="linux-shell-\u8F6F\u4EF6\u7B49\u5E38\u7528\u547D\u4EE4\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#linux-shell-\u8F6F\u4EF6\u7B49\u5E38\u7528\u547D\u4EE4\u5FEB\u6377\u952E" aria-hidden="true">#</a> Linux,Shell,\u8F6F\u4EF6\u7B49\u5E38\u7528\u547D\u4EE4\u5FEB\u6377\u952E</h3></blockquote><h1 id="\u6280\u672F\u5B98\u65B9\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u5B98\u65B9\u6587\u6863" aria-hidden="true">#</a> \u6280\u672F\u5B98\u65B9\u6587\u6863</h1><p>JAVA</p><p>Spring\u5168\u5BB6\u6876</p><p>MYSQL</p><h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> JAVA</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -\u9009\u9879
\u5176\u4E2D\u9009\u9879\u5305\u62EC:
    -d32          \u4F7F\u7528 <span class="token number">32</span> \u4F4D\u6570\u636E\u6A21\u578B <span class="token punctuation">(</span>\u5982\u679C\u53EF\u7528<span class="token punctuation">)</span>
    -d64          \u4F7F\u7528 <span class="token number">64</span> \u4F4D\u6570\u636E\u6A21\u578B <span class="token punctuation">(</span>\u5982\u679C\u53EF\u7528<span class="token punctuation">)</span>
    -server       \u9009\u62E9 <span class="token string">&quot;server&quot;</span> VM
                  \u9ED8\u8BA4 VM \u662F server.
    -cp <span class="token punctuation">\\</span><span class="token operator">&lt;</span>\u76EE\u5F55\u548C zip/jar \u6587\u4EF6\u7684\u7C7B\u641C\u7D22\u8DEF\u5F84<span class="token operator">&gt;</span>
    -classpath <span class="token punctuation">\\</span><span class="token operator">&lt;</span>\u76EE\u5F55\u548C zip/jar \u6587\u4EF6\u7684\u7C7B\u641C\u7D22\u8DEF\u5F84<span class="token operator">&gt;</span>
                  \u7528 <span class="token punctuation">;</span> \u5206\u9694\u7684\u76EE\u5F55, JAR \u6863\u6848
                  \u548C ZIP \u6863\u6848\u5217\u8868, \u7528\u4E8E\u641C\u7D22\u7C7B\u6587\u4EF6\u3002
    -D<span class="token punctuation">\\</span><span class="token operator">&lt;</span>\u540D\u79F0<span class="token operator">&gt;=</span><span class="token punctuation">\\</span><span class="token operator">&lt;</span>\u503C<span class="token operator">&gt;</span> \u8BBE\u7F6E\u7CFB\u7EDF\u5C5E\u6027
    -verbose:<span class="token punctuation">[</span>class<span class="token operator">|</span>gc<span class="token operator">|</span>jni<span class="token punctuation">]</span>
                  \u542F\u7528\u8BE6\u7EC6\u8F93\u51FA
    -version      \u8F93\u51FA\u4EA7\u54C1\u7248\u672C\u5E76\u9000\u51FA
    -showversion  \u8F93\u51FA\u4EA7\u54C1\u7248\u672C\u5E76\u7EE7\u7EED
    -ea<span class="token punctuation">[</span>:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>packagename<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token operator">|</span>:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>classname<span class="token operator">&gt;</span><span class="token punctuation">]</span>
    -enableassertions<span class="token punctuation">[</span>:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>packagename<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token operator">|</span>:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>classname<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  \u6309\u6307\u5B9A\u7684\u7C92\u5EA6\u542F\u7528\u65AD\u8A00
    -da<span class="token punctuation">[</span>:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>packagename<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token operator">|</span>:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>classname<span class="token operator">&gt;</span><span class="token punctuation">]</span>
    -disableassertions<span class="token punctuation">[</span>:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>packagename<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token operator">|</span>:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>classname<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  \u7981\u7528\u5177\u6709\u6307\u5B9A\u7C92\u5EA6\u7684\u65AD\u8A00
    -esa <span class="token operator">|</span> -enablesystemassertions
                  \u542F\u7528\u7CFB\u7EDF\u65AD\u8A00
    -dsa <span class="token operator">|</span> -disablesystemassertions
                  \u7981\u7528\u7CFB\u7EDF\u65AD\u8A00
    -agentlib:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>libname<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token operator">&lt;</span>\u9009\u9879<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  \u52A0\u8F7D\u672C\u673A\u4EE3\u7406\u5E93 <span class="token punctuation">\\</span><span class="token operator">&lt;</span>libname<span class="token operator">&gt;</span>, \u4F8B\u5982 -agentlib:hprof
                  \u53E6\u8BF7\u53C2\u9605 -agentlib:jdwp<span class="token operator">=</span>help \u548C -agentlib:hprof<span class="token operator">=</span>help
    -agentpath:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>pathname<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token operator">&lt;</span>\u9009\u9879<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  \u6309\u5B8C\u6574\u8DEF\u5F84\u540D\u52A0\u8F7D\u672C\u673A\u4EE3\u7406\u5E93
    -javaagent:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>jarpath<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token operator">&lt;</span>\u9009\u9879<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  \u52A0\u8F7D Java \u7F16\u7A0B\u8BED\u8A00\u4EE3\u7406, \u8BF7\u53C2\u9605 java.lang.instrument
    -splash:<span class="token punctuation">\\</span><span class="token operator">&lt;</span>imagepath<span class="token operator">&gt;</span>
                  \u4F7F\u7528\u6307\u5B9A\u7684\u56FE\u50CF\u663E\u793A\u542F\u52A8\u5C4F\u5E55
\u6709\u5173\u8BE6\u7EC6\u4FE1\u606F, \u8BF7\u53C2\u9605 http://www.oracle.com/technetwork/java/javase/documentation/index.html\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528" aria-hidden="true">#</a> \u5E38\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770BJDK\u5B89\u88C5\u8DEF\u5F84 \u7ED3\u679C\u7B2C\u4E00\u884C</span>
java -verbose
<span class="token comment">#[Opened C:\\Program Files\\Java\\jdk1.8.0_181\\jre\\lib\\rt.jar]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h1><h2 id="\u7535\u8111\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u7535\u8111\u4FE1\u606F" aria-hidden="true">#</a> \u7535\u8111\u4FE1\u606F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u7535\u8111\u4FE1\u606F</span>
systeminfo
<span class="token comment">#\u67E5\u770B\u5F00\u673A\u542F\u52A8\u6587\u4EF6\u5939</span>
shell:common startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u4EF6\u4FE1\u606F</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>#\u67E5\u770B\u6587\u4EF6\u6811\u4E0D\u52A0/f\u4E3A\u67E5\u770B\u6587\u4EF6\u76EE\u5F55\u6811
tree /f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cmd\u7A97\u53E3\u70B9\u51FB\u5185\u5BB9\u4F1A\u6682\u505C\uFF0C\u53F3\u952E\u5C5E\u6027\u5173\u95ED\u5FEB\u901F\u7F16\u8F91\u5373\u53EF\uFF0C\u4F46\u662F\u5173\u95ED\u540E\u65E0\u6CD5\u590D\u5236cmd\u5185\u5BB9\u3002</p><h2 id="\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC" aria-hidden="true">#</a> \u7F51\u7EDC</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u627E\u5BF9\u5E94\u7AEF\u53E3pid</span>
<span class="token function">netstat</span>  -aon<span class="token operator">|</span>findstr  <span class="token string">&quot;59207&quot;</span>
<span class="token comment">#\u67E5\u770B\u5BF9\u5E94pid\u7A0B\u5E8F</span>
tasklist<span class="token operator">|</span>findstr <span class="token string">&quot;1396&quot;</span>
<span class="token comment">#\u5173\u95ED\u5BF9\u5E94\u7AEF\u53E3</span>
taskkill /t /f /pid <span class="token string">&quot;8888&quot;</span>
<span class="token comment">#\u542F\u52A8\u8FDC\u7A0B\u684C\u9762</span>
mstsc  
<span class="token comment">#\u7B56\u7565\u7EC4</span>
gpedit.msc
<span class="token comment">#\u7ED9\u540C\u5C40\u57DF\u7F51\u53D1\u9001\u6D88\u606F\u5F39\u7A97</span>
msg /server:126.11.9.213 * \u6D88\u606F    
<span class="token comment">#\u67E5\u770B\u57DF\u540DIP</span>
<span class="token function">nslookup</span> \u57DF\u540D
<span class="token comment">#\u67E5\u770B\u7AEF\u53E3\u662F\u5426\u4E92\u901A\uFF0C\u9700\u8981\u63A7\u5236\u9762\u677F\u6253\u5F00 telnet\u529F\u80FD</span>
telnet <span class="token function">ip</span> \u7AEF\u53E3
<span class="token comment">#\u67E5\u770B\u4E3B\u677F\u652F\u6301\u6700\u5927\u5185\u5B58</span>
wmic memphysical get maxcapacity 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F51\u7EDC\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5207\u6362" aria-hidden="true">#</a> \u7F51\u7EDC\u5207\u6362</h2><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>@ echo off
%1 %2
ver|find &quot;5.&quot;&gt;nul&amp;&amp;goto :Admin
mshta vbscript:createobject(&quot;shell.application&quot;).shellexecute(&quot;%~s0&quot;,&quot;goto :Admin&quot;,&quot;&quot;,&quot;runas&quot;,1)(window.close)&amp;goto :eof
:Admin

netsh interface set interface &quot;WLAN&quot; enabled
netsh interface set interface &quot;INSEIDE&quot; disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),r={id:"windows\u5FEB\u6377\u5F39\u7A97",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#windows\u5FEB\u6377\u5F39\u7A97","aria-hidden":"true"},"#",-1),m=s(),v={href:"https://blog.csdn.net/younghaiqing/article/details/60867393",target:"_blank",rel:"noopener noreferrer"},b=s("windows\u5FEB\u6377\u5F39\u7A97"),k=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8BA1\u7B97\u5668	</span>
calc
<span class="token comment">#\u526A\u8D34\u7C3F\u67E5\u770B\u5668	</span>
clipbrd
<span class="token comment">#\u8BBE\u5907\u7BA1\u7406\u5668	</span>
devmgmt.msc
<span class="token comment">#\u663E\u793A\u5C5E\u6027	</span>
control desktop <span class="token punctuation">(</span>desk.cpl<span class="token punctuation">)</span>
<span class="token comment">#Internet\u5C5E\u6027	</span>
inetcpl.cpl
<span class="token comment">#IP\u914D\u7F6E\u5B9E\u7528\u7A0B\u5E8F(\u663E\u793A\u8FDE\u63A5\u914D\u7F6E)	</span>
ipconfig /all
<span class="token comment">#IP\u914D\u7F6E\u5B9E\u7528\u7A0B\u5E8F(\u663E\u793ADNS\u7F13\u5B58\u5185\u5BB9)	</span>
ipconfig /displaydns
<span class="token comment">#IP\u914D\u7F6E\u5B9E\u7528\u7A0B\u5E8F(\u5220\u9664DNS\u7F13\u5B58\u5185\u5BB9)	</span>
ipconfig /flushdns
<span class="token comment">#IP\u914D\u7F6E\u5B9E\u7528\u7A0B\u5E8F(\u91CA\u653E\u5168\u90E8(\u6216\u6307\u5B9A)\u9002\u914D\u5668\u7684\u7531DHCP\u5206\u914D\u7684\u52A8\u6001IP\u5730\u5740)	</span>
ipconfig /release
<span class="token comment">#IP\u914D\u7F6E\u5B9E\u7528\u7A0B\u5E8F(\u4E3A\u5168\u90E8\u9002\u914D\u5668\u91CD\u65B0\u5206\u914DIP\u5730\u5740)	</span>
ipconfig /renew
<span class="token comment">#IP\u914D\u7F6E\u5B9E\u7528\u7A0B\u5E8F(\u5237\u65B0DHCP\u5E76\u91CD\u65B0\u6CE8\u518CDNS)	</span>
ipconfig /registerdns
<span class="token comment">#IP\u914D\u7F6E\u5B9E\u7528\u7A0B\u5E8F(\u663E\u793ADHCP Class ID)	</span>
ipconfig /showclassid
<span class="token comment">#IP\u914D\u7F6E\u5B9E\u7528\u7A0B\u5E8F(\u4FEE\u6539DHCP Class ID)	</span>
ipconfig /setclassid
<span class="token comment">#Java\u63A7\u5236\u9762\u677F(\u5982\u679C\u5DF2\u7ECF\u5B89\u88C5)	</span>
jpicpl32.cpl
<span class="token comment">#\u672C\u5730\u5B89\u5168\u8BBE\u7F6E	</span>
secpol.msc
<span class="token comment">#\u4ECEWindows\u6CE8\u9500	</span>
logoff
<span class="token comment">#\u7F51\u7EDC\u8FDE\u63A5	</span>
control netconnections <span class="token punctuation">(</span>ncpa.cpl<span class="token punctuation">)</span>
<span class="token comment">#\u8BB0\u4E8B\u672C	</span>
notepad
<span class="token comment">#\u8FDC\u7A0B\u684C\u9762	</span>
mstsc
<span class="token comment">#Windows\u5B89\u5168\u4E2D\u5FC3	</span>
wscui.cpl
<span class="token comment">#\u670D\u52A1	</span>
services.msc
<span class="token comment">#\u5171\u4EAB\u6587\u4EF6\u5939	</span>
fsmgmt.msc
<span class="token comment">#\u58F0\u97F3\u548C\u97F3\u9891\u8BBE\u5907\u5C5E\u6027	</span>
mmsys.cpl
<span class="token comment">#\u7CFB\u7EDF\u914D\u7F6E\u5B9E\u7528\u7A0B\u5E8F	</span>
msconfig
<span class="token comment">#\u4EFB\u52A1\u7BA1\u7406\u5668	</span>
taskmgr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="hexo" tabindex="-1"><a class="header-anchor" href="#hexo" aria-hidden="true">#</a> HEXO</h1><p>Hexo c \u6E05\u7406 Hexo g\u7F16\u8BD1 Hexo s\u8FD0\u884C Hexo d\u90E8\u7F72 hexo new draft\uFF08scaffolds\u4E2D\u6A21\u677F\u540D\u5B57\uFF09\u201C\u6807\u9898\u201D\u65B0\u5EFA\u8349\u7A3F \u5728source/_drafts\u76EE\u5F55 hexo new \u201C\u6807\u9898\u201D\u65B0\u5EFA\u6587\u6863 hexo publish \u201C\u6807\u9898\u201D\u8349\u7A3F\u79FB\u52A8\u5230source/_post\u76EE\u5F55</p><h1 id="idea" tabindex="-1"><a class="header-anchor" href="#idea" aria-hidden="true">#</a> IDEA</h1><p>ctrl +R \u66FF\u6362</p><p>ctrl +shift + \u6570\u5B57\u6807\u8BB0\u6587\u4EF6\u5185\u4F4D\u7F6E ctrl+\u6570\u5B57\u56DE\u5230\u5BF9\u5E94\u4F4D\u7F6E</p><p>\u53CC\u51FBshift\u5168\u5C40\u641C\u7D22</p><p>ctrl + shift +F \u5168\u5C40\u6587\u5B57\u641C\u7D22</p><p>ctrl + shift +y \u641C\u7D22\u63D2\u4EF6\u7FFB\u8BD1\u9009\u4E2D\u6587\u5B57</p><p>ctrl + shift +o codota\u641C\u7D22\u6240\u9009\u4EE3\u7801\u793A\u4F8B \u4E0D\u9009\u4E2D\u4EE3\u7801\u65F6\u663E\u793A\u7FFB\u8BD1\u8F93\u5165\u6846</p><p>alt + F7 \u5FEB\u901F\u5339\u914D\u9879\u76EE\u4E2D\u6240\u6709\u6B64\u7528\u6CD5</p><p>Ctrl+Alt+Shift+U UML\u56FE</p><p>Shift+Alt \u9009\u4E2D\u6587\u4EF6\u6C47\u603B\u6240\u6709\u5F53\u524D\u5B57\u7B26</p><p>Ctrl+Shift+E \u53EF\u83B7\u53D6\u6700\u8FD1\u67E5\u770B\u6216\u66F4\u6539\u7684\u4EE3\u7801\u6BB5\u7684\u5217\u8868</p><p>\u81EA\u5B9A\u4E49\u6A21\u677F\u540E\uFF0C\u65B9\u6CD5\u540D\u4E0A/* \u7136\u540Etab \u6DFB\u52A0\u6CE8\u91CA</p><h1 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> WINDOWS</h1><p>alt + tab \u4E24\u5E94\u7528\u4E4B\u95F4\u5207\u6362</p><p>ctrl+w\u5173\u95ED\u5F53\u524D\u7A97\u53E3</p><p>\u670D\u52A1\u81EA\u52A8\u91CD\u542F</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>#nginx
https://www.jb51.net/article/211867.htm
#Redis
redis-server --service-install redis.windows-service.conf --loglevel verbose

#tomcat
1\u3001\u8FDB\u5165\u5230tomcat\\bin\u76EE\u5F55\u4E0B\uFF0C\u6253\u5F00cmd\u547D\u4EE4\u7A97\u53E3
2\u3001\u8F93\u5165 service install tomcat\u670D\u52A1\u540D(\u670D\u52A1\u540D\u79F0\u81EA\u5B9A\u4E49\uFF09

\u5728\u8FD0\u884C\u7A97\u53E3\u8F93\u5165\uFF1Anet start \u670D\u52A1\u540D\u79F0
\u8FD9\u6837tomcat\u670D\u52A1\u5C31\u542F\u52A8\u4E86

\u505A\u6210\u5F00\u673A\u4E3B\u542F\u52A8
\u5728\u6211\u7684\u7535\u8111\u53F3\u51FB--&gt;\u7BA1\u7406--&gt;\u670D\u52A1\u548C\u5E94\u7528\u7A0B\u5E8F--&gt;\u9009\u62E9\u670D\u52A1
\u6216\u5728cmd\u547D\u4EE4\u7A97\u53E3\u8F93\u5165\uFF1Aservice.msc
\u627E\u5230Apache Tomcat XXXX [\u670D\u52A1\u540D\u79F0]
\u5C06\u624B\u52A8\u4FEE\u6539\u6210\u81EA\u52A8\u540E\u5C31\u53EF\u4EE5\u5F00\u673A\u81EA\u542F\u52A8\u4E86\u3002

\u5982\u679C\u8981\u5220\u9664\uFF0C\u548C\u4FEE\u6539\u670D\u52A1\uFF01
\u5728cmd\u547D\u4EE4\u7A97\u53E3\u8F93\u5165\uFF1A
\u5220\u9664\uFF1Asc delete \u670D\u52A1\u540D
\u4FEE\u6539\uFF1Asc config \u670D\u52A1\u540D [\u53C2\u6570]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> LINUX</h1><p>yum install net-tools \u5B89\u88C5\u7F51\u7EDC\u5DE5\u5177</p><p>linux\u53EF\u76F4\u63A5\u590D\u5236\u7ED9\u522B\u4EBA\uFF0C\u590D\u5236VMware\u5DE5\u4F5C\u76EE\u5F55\u7136\u540E\u76F4\u63A5\u6253\u5F00</p><p>su \u56DE\u8F66\u8F93\u5165\u5BC6\u7801\u8F6C\u6362\u4E3A\u8D85\u7EA7\u7BA1\u7406\u5458 ifconfig\u67E5\u8BE2\u7F51\u7EDC\u76F8\u5173 clear\u6E05\u7A7A\u663E\u793A ifconfig eth0 192.16.\u3002\u3002\u3002\u8BBE\u7F6EIP\u5730\u5740 \u547D\u4EE4\u591A\u6570\u4E3A\u4E34\u65F6\u751F\u6548\uFF0C\u5199\u5165\u914D\u7F6E\u6587\u4EF6\u4E3A\u6C38\u4E45\u751F\u6548 ls [-\u9009\u9879][\u53C2\u6570]\uFF1Als -la /etc \u76EE\u5F55\u5904\u7406\u547D\u4EE4\uFF08list\uFF09 ls -a/l/lh/ld/i \u9690\u85CF\u6587\u4EF6/\u6587\u4EF6\u8BE6\u7EC6\u4FE1\u606F/\u5927\u5C0F\u5355\u4F4D\u663E\u793A/\u67E5\u770B\u76EE\u5F55\u4FE1\u606F/\u67E5\u770B\u6587\u4EF6id</p><ul><li>d l \u6587\u4EF6\u5F00\u5934 \u6587\u4EF6\u3001\u76EE\u5F55\u3001\u8F6F\u8FDE\u63A5 \u6743\u9650</li></ul><p>mkdir\u3010make directories\u3011 \u521B\u5EFA\u76EE\u5F55 -p\u9012\u5F52\u521B\u5EFA \u521B\u5EFA\u6CA1\u6709\u6B64\u76EE\u5F55\u4E0B\u7684\u76EE\u5F55\uFF0C\u53EF\u540C\u65F6\u521B\u5EFA\u591A\u4E2Amkdir /tmp/a/b /tmp/a/c cd \u3010change directory\u3011\u5207\u6362\u76EE\u5F55 cd ..\u8FD4\u56DE\u4E0A\u4E00\u7EA7\u76EE\u5F55 pwd\u3010print working directory\u3011 cd ./.. \u5F53\u524D\u76EE\u5F55/\u4E0A\u7EA7\u76EE\u5F55 remdir\u3010remove empty dirctories\u3011 \u5220\u9664\u7A7A\u76EE\u5F55 cp\u3010copy\u3011\u590D\u5236 \u6E90\u6587\u4EF6 \u76EE\u5F55 -r\u590D\u5236\u76EE\u5F55 -p\u590D\u5236\u5E76\u4FDD\u7559\u6587\u4EF6\u5C5E\u6027\uFF08\u6BD4\u5982\u521B\u5EFA\u65F6\u95F4\uFF09 \u590D\u5236\u5E76\u6539\u540D mv\u3010move\u3011 \u526A\u5207 rm\u3010remove\u3011\u5220\u9664\u6587\u4EF6\uFF0C\u76EE\u5F55 -r\u5220\u9664\u76EE\u5F55 -f\u5F3A\u5236\u5220\u9664 -rf\u76F4\u63A5\u5220\u9664 ctrl+c\u7EC8\u6B62\u64CD\u4F5C touch \u521B\u5EFA\u6587\u4EF6 \u53EF\u521B\u5EFA\u591A\u4E2A\uFF0C\u521B\u5EFA\u7A7A\u683C\u6587\u4EF6\u540D\u4F7F\u7528\u53CC\u5F15\u53F7\u4F46\u662F\u4E0D\u5EFA\u8BAE cat \u6D4F\u89C8\u6587\u4EF6\u5185\u5BB9 -n\u663E\u793A\u884C\u53F7 tac \u5012\u7F6E\u6D4F\u89C8\u6587\u4EF6\u5185\u5BB9 more \u5206\u9875\u663E\u793A\u957F\u6587\u4EF6 \u7A7A\u683C\u7FFB\u9875\uFF0C\u56DE\u8F66\u6362\u884C\uFF0Cq\u9000\u51FA\uFF0C less \u663E\u793A\u6587\u4EF6\u5185\u5BB9\uFF0C\u53EF\u5411\u4E0A\u7FFB\u9875pageup\uFF0C\u53EF\u641C\u7D22\uFF1A/\u5173\u952E\u8BCD n\u663E\u793A\u4E0B\u4E00\u4E2A\u641C\u7D22\u7ED3\u679C<br> head \u53EA\u770B\u6587\u4EF6\u524D\u51E0\u884C -n 7 \u6587\u4EF6 \u663E\u793A\u524D7\u884C\uFF0C\u9ED8\u8BA4\u524D\u5341\u884C tail \u540C\u4E0A -f\u52A8\u6001\u663E\u793A\u53D8\u5316 ctrl+c\u9000\u51FA</p><p>ln\u3010link\u3011 -s\u521B\u5EFA\u8F6F\u8FDE\u63A5 \u4E0D\u5199-s\u521B\u5EFA\u786C\u94FE\u63A5\u3010\u8F6F\u8FDE\u63A5\u76F8\u5F53\u4E8E\u5FEB\u6377\u65B9\u5F0Frwxrwxrwx\uFF0C\u6743\u9650\u8DDF\u6E90\u6587\u4EF6\u6743\u9650\u65E0\u5173\uFF0C\u786C\u94FE\u63A5\u76F8\u5F53\u4E8E\u62F7\u8D1Dcp -p\u5E76\u4E14\u540C\u6B65\u66F4\u65B0\uFF0C\u786C\u94FE\u63A5\u901A\u8FC7i\u8282\u70B9\u533A\u5206\uFF0C\u4E0D\u80FD\u8DE8\u5206\u533A\uFF08\u76F8\u5F53\u4E8E\u4E0D\u80FDc\u76D8\u590D\u5236\u5230d\u76D8\uFF09\uFF0C\u4E0D\u80FD\u9488\u5BF9\u76EE\u5F55\u4F7F\u7528\u3011 yum -y install git sudo -s1\u83B7\u5F97\u7BA1\u7406\u5458\u6743\u9650 \u547D\u4EE4\uFF1Asudo -s\u56DE\u8F66 \u8F93\u5165\u5BC6\u7801</p><p>\u7F16\u8F91\u4FDD\u5B58\u6587\u4EF6----------------------------------- \u7B2C\u4E00\u6B65\uFF1Acd\u5230\u8BE5\u6587\u4EF6\u7684\u76EE\u5F55\u4E0B</p><p>\u7B2C\u4E8C\u6B65\uFF1Avi \u8981\u7F16\u8F91\u7684\u6587\u4EF6\u540D\uFF0C\u8FDB\u5165\u666E\u901A\u6A21\u5F0F\uFF0C\uFF08\u53EF\u4EE5\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\uFF09 sudo gedit /etc/apt/sources.list \u53EF\u89C6\u5316\u7F16\u8F91 \u7B2C\u4E09\u6B65\uFF1A\u8F93\u5165 i \u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F\uFF0C\u5F00\u59CB\u7F16\u8F91\u6587\u672C</p><p>\u7B2C\u56DB\u6B65\uFF1A\u7F16\u8F91\u4E4B\u540E\uFF0C\u6309ESC\u9000\u51FA\u5230\u666E\u901A\u6A21\u5F0F\u3002</p><p>\u7B2C\u4E94\u6B65\uFF1A\u5728\u666E\u901A\u6A21\u5F0F\u4E0B\uFF0C\u8F93\u5165 : \u8FDB\u5165\u547D\u4EE4\u6A21\u5F0F</p><p>\u7B2C\u516D\u6B65\uFF1A\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\u8F93\u5165wq, \u5373\u53EF\u4FDD\u5B58\u5E76\u9000\u51FA</p><p>\u3010#\u3011\u4EE3\u8868 root\u6743\u9650 \u3010$\u3011\u4EE3\u8868\u666E\u901A\u7528\u6237 reboot\u91CD\u542F</p>`,33),g=s("BUG\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2013 centos7 cannot find a valid baseurl for repo\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7 "),h={href:"https://blog.csdn.net/jiankunking/article/details/82770502",target:"_blank",rel:"noopener noreferrer"},f=s("https://blog.csdn.net/jiankunking/article/details/82770502"),x=s(" zlib.h: No such file or directory\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7 yum install zlib-devel CentOS Name or service not known\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7 vi /etc/sysconfig/network-scripts/ifcfg-ens33\u547D\u4EE4\u6765\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6 Job for network.service failed because the control process exited with error code\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7 \u5173\u95ED NetworkManger \u670D\u52A1\u5C31\u597D\u4E86\uFF0C service NetworkManager stop \u7981\u6B62\u5F00\u673A\u542F\u52A8 chkconfig NetworkManager off su: Authentication failure\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7 sudo passwd root \u7F51\u7EDC\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014"),q=a(`<p>\u7F51\u7EDC\u4E0D\u884C\u90FD\u7528\u6865\u63A5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart network //\u91CD\u542F\u7F51\u5361
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>====ifup eth0\uFF08\u7F51\u5361\u540D\u79F0\uFF09 ip addr\u67E5\u8BE2\u7F51\u7EDC\u4FE1\u606F</p><p>postgresql\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014- sudo -u postgres psql \u8FDB\u5165psql\u4EA4\u4E92\u73AF\u5883 alter user postgres with password&#39;\u5BC6\u7801&#39;; \u4FEE\u6539postgres\u7528\u6237\u7684\u5BC6\u7801 \\q \u9000\u51FA\u6570\u636E\u5E93 ? \\password\uFF1A\u8BBE\u7F6E\u5BC6\u7801 \\h\uFF1A\u67E5\u770BSQL\u547D\u4EE4\u7684\u89E3\u91CA\uFF0C\u6BD4\u5982\\h select\u3002 ?\uFF1A\u67E5\u770Bpsql\u547D\u4EE4\u5217\u8868\u3002 \\l\uFF1A\u5217\u51FA\u6240\u6709\u6570\u636E\u5E93\u3002 \\c [database_name]\uFF1A\u8FDE\u63A5\u5176\u4ED6\u6570\u636E\u5E93\u3002 \\d\uFF1A\u5217\u51FA\u5F53\u524D\u6570\u636E\u5E93\u7684\u6240\u6709\u5BF9\u8C61\uFF0C\u5982Table,View\u7B49\u3002 \\dt: \u5217\u51FA\u5F53\u524D\u6570\u636E\u5E93\u7684\u6240\u6709Table\u3002 \\d [table_name]\uFF1A\u5217\u51FA\u67D0\u4E00\u5F20\u8868\u683C\u7684\u7ED3\u6784\u3002 \\du\uFF1A\u5217\u51FA\u6240\u6709\u7528\u6237\u3002 \\e\uFF1A\u6253\u5F00\u6587\u672C\u7F16\u8F91\u5668\u3002 \\conninfo\uFF1A\u5217\u51FA\u5F53\u524D\u6570\u636E\u5E93\u548C\u8FDE\u63A5\u7684\u4FE1\u606F\u3002 df \u547D\u4EE4 \u6765\u68C0\u67E5\u5F53\u524D\u78C1\u76D8\u5229\u7528\u7387</p><p>SecureCRT============================== alt+p\u8FDB\u5165sftp put -r \u8DEF\u5F84\u4F20\u76EE\u5F55</p><p>shp\u5BFC\u5165\u5230postgresql\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 shp2pgsql -s 4544 -c -W &quot;UTF-8&quot; ADDRESS.shp public.rrrrr| psql -h 192.168.22.128 -d postgres -U postgres -W</p><p>\u8F6C\u6362\u683C\u5F0F\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 ogr2ogr -f &quot;GeoJSON&quot; ./natural.json PG:&quot;host=localhost dbname=postgres user=postgres password=724111&quot; -sql &quot;select * from natural&quot;</p><p>\u5207\u7247\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 tippecanoe -z 14 -Z 5 -ps -Bg -o buildings.mbtiles buildings.json tippecanoe -e lakepbf -pC -Z1 -z17 -f natural.json</p><h1 id="\u5404\u79CD\u5E38\u7528\u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5404\u79CD\u5E38\u7528\u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5" aria-hidden="true">#</a> \u5404\u79CD\u5E38\u7528\u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5</h1><h1 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> NPM</h1><p>npm install ---install dependencies</p><p>npm run dev---serve with hot reload at localhost:8080</p><p>npm run build---build for production with minification</p><p>npm run build --report----build for production and view the bundle analyzer report</p><p>npm run unit---run unit tests</p><p>npm run e2e---run e2e tests</p><p>npm test----run all tests</p><h1 id="redids" tabindex="-1"><a class="header-anchor" href="#redids" aria-hidden="true">#</a> REDIDS</h1><p>./redis-server redis.windows.conf \u542F\u52A8\u670D\u52A1</p><p>server.exe --service-install redis.windows.conf --loglevel verbose \u5F00\u673A\u542F\u52A8 windows</p><p>redis-server --service-install redis.windows-service.conf --loglevel verbose</p><h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> VSCODE</h1><p>ctrl+~ \uFF1A\u6253\u5F00\u7EC8\u7AEF F1 \u6216 Ctrl+Shift+P\uFF08\u4FD7\u79F0\u4E07\u80FD\u952E\uFF09 \uFF1A\u6253\u5F00\u547D\u4EE4\u9762\u677F\u3002\u5728\u6253\u5F00\u7684\u8F93\u5165\u6846\u5185\uFF0C\u53EF\u4EE5\u8F93\u5165\u4EFB\u4F55\u547D\u4EE4 \u4EE3\u7801\u683C\u5F0F\u5316: Shift+Alt+F</p><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> VUE</h1>`,24),w=s("\u811A\u624B\u67B6 npm config set registry "),_={href:"https://registry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"},$=s("https://registry.npm.taobao.org"),D=s(" vue init webpack projectName cd projectName npm install npm run dev npm i element-ui -S npm install axios"),y=a(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h1><h1 id="git\u5E38\u7528\u547D\u4EE4\u53CA\u65B9\u6CD5\u5927\u5168" tabindex="-1"><a class="header-anchor" href="#git\u5E38\u7528\u547D\u4EE4\u53CA\u65B9\u6CD5\u5927\u5168" aria-hidden="true">#</a> <strong>Git\u5E38\u7528\u547D\u4EE4\u53CA\u65B9\u6CD5\u5927\u5168</strong></h1><blockquote><p><img src="https://imgconvert.csdnimg.cn/aHR0cDovL3d3dy5ydWFueWlmZW5nLmNvbS9ibG9naW1nL2Fzc2V0LzIwMTUvYmcyMDE1MTIwOTAxLnBuZw?x-oss-process=image/format,png" alt="img" loading="lazy"></p><p>\u4E0B\u9762\u662F\u6211\u6574\u7406\u7684\u5E38\u7528 Git \u547D\u4EE4\u6E05\u5355\u3002\u51E0\u4E2A\u4E13\u7528\u540D\u8BCD\u7684\u8BD1\u540D\u5982\u4E0B\u3002</p><blockquote><ul><li>Workspace\uFF1A\u5DE5\u4F5C\u533A</li><li>Index / Stage\uFF1A\u6682\u5B58\u533A</li><li>Repository\uFF1A\u4ED3\u5E93\u533A\uFF08\u6216\u672C\u5730\u4ED3\u5E93\uFF09</li><li>Remote\uFF1A\u8FDC\u7A0B\u4ED3\u5E93</li></ul></blockquote></blockquote><blockquote><h2 id="\u672C\u5730\u5206\u652F\u5173\u8054\u8FDC\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5206\u652F\u5173\u8054\u8FDC\u7A0B" aria-hidden="true">#</a> <strong>\u672C\u5730\u5206\u652F\u5173\u8054\u8FDC\u7A0B</strong></h2><div class="language-vbnet ext-vbnet line-numbers-mode"><pre class="language-vbnet"><code>git branch <span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">-</span>upstream<span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">=</span>origin<span class="token operator">/</span>\u5206\u652F\u540D \u5206\u652F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u5E93\u4FEE\u6539\u5BC6\u7801\u540Epush\u4E0D\u4E0A\u53BB\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5E93\u4FEE\u6539\u5BC6\u7801\u540Epush\u4E0D\u4E0A\u53BB\u600E\u4E48\u529E" aria-hidden="true">#</a> \u4EE3\u7801\u5E93\u4FEE\u6539\u5BC6\u7801\u540Epush\u4E0D\u4E0A\u53BB\u600E\u4E48\u529E\uFF1F</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u91CD\u65B0\u8F93\u5165\u5BC6\u7801</span>
git config <span class="token operator">--</span>system <span class="token operator">--</span><span class="token keyword">unset</span> credential<span class="token operator">.</span>helper
<span class="token comment">// \u5BC6\u7801\u5B58\u50A8\u540C\u6B65</span>
git config <span class="token operator">--</span><span class="token keyword">global</span> credential<span class="token operator">.</span>helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u4E00\u3001\u65B0\u5EFA\u4EE3\u7801\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u65B0\u5EFA\u4EE3\u7801\u5E93" aria-hidden="true">#</a> \u4E00\u3001\u65B0\u5EFA\u4EE3\u7801\u5E93</h2><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u5F53\u524D\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2AGit\u4EE3\u7801\u5E93</span>
$ <span class="token function">git</span> init
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5C06\u5176\u521D\u59CB\u5316\u4E3AGit\u4EE3\u7801\u5E93</span>
$ <span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>
<span class="token comment"># \u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2</span>
$ <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u4E8C\u3001\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u914D\u7F6E" aria-hidden="true">#</a> \u4E8C\u3001\u914D\u7F6E</h2><p>Git\u7684\u8BBE\u7F6E\u6587\u4EF6\u4E3A<code>.gitconfig</code>\uFF0C\u5B83\u53EF\u4EE5\u5728\u7528\u6237\u4E3B\u76EE\u5F55\u4E0B\uFF08\u5168\u5C40\u914D\u7F6E\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\uFF08\u9879\u76EE\u914D\u7F6E\uFF09\u3002</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u5F53\u524D\u7684Git\u914D\u7F6E</span>
$ <span class="token function">git</span> config --list
<span class="token comment"># \u7F16\u8F91Git\u914D\u7F6E\u6587\u4EF6</span>
$ <span class="token function">git</span> config -e <span class="token punctuation">[</span>--global<span class="token punctuation">]</span>
<span class="token comment"># \u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u4E09\u3001\u589E\u52A0-\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u589E\u52A0-\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> \u4E09\u3001\u589E\u52A0/\u5220\u9664\u6587\u4EF6</h2><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
<span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u76EE\u5F55\u5230\u6682\u5B58\u533A\uFF0C\u5305\u62EC\u5B50\u76EE\u5F55</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
<span class="token comment"># \u6DFB\u52A0\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u6DFB\u52A0\u6BCF\u4E2A\u53D8\u5316\u524D\uFF0C\u90FD\u4F1A\u8981\u6C42\u786E\u8BA4</span>
<span class="token comment"># \u5BF9\u4E8E\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u591A\u5904\u53D8\u5316\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5206\u6B21\u63D0\u4EA4</span>
 $ <span class="token function">git</span> <span class="token function">add</span> -p
<span class="token comment"># \u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u6B21\u5220\u9664\u653E\u5165\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
<span class="token comment"># \u505C\u6B62\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\uFF0C\u4F46\u8BE5\u6587\u4EF6\u4F1A\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u6539\u540D\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u4E2A\u6539\u540D\u653E\u5165\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u56DB\u3001\u4EE3\u7801\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u4EE3\u7801\u63D0\u4EA4" aria-hidden="true">#</a> \u56DB\u3001\u4EE3\u7801\u63D0\u4EA4</h2><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u5230\u4ED3\u5E93\u533A</span>
$ <span class="token function">git</span> commit -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>
<span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u4ED3\u5E93\u533A</span>
$ <span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>
<span class="token comment"># \u63D0\u4EA4\u5DE5\u4F5C\u533A\u81EA\u4E0A\u6B21commit\u4E4B\u540E\u7684\u53D8\u5316\uFF0C\u76F4\u63A5\u5230\u4ED3\u5E93\u533A</span>
$ <span class="token function">git</span> commit -a
<span class="token comment"># \u63D0\u4EA4\u65F6\u663E\u793A\u6240\u6709diff\u4FE1\u606F</span>
$ <span class="token function">git</span> commit -v
 <span class="token comment"># \u4F7F\u7528\u4E00\u6B21\u65B0\u7684commit\uFF0C\u66FF\u4EE3\u4E0A\u4E00\u6B21\u63D0\u4EA4</span>
<span class="token comment"># \u5982\u679C\u4EE3\u7801\u6CA1\u6709\u4EFB\u4F55\u65B0\u53D8\u5316\uFF0C\u5219\u7528\u6765\u6539\u5199\u4E0A\u4E00\u6B21commit\u7684\u63D0\u4EA4\u4FE1\u606F</span>
$ <span class="token function">git</span> commit --amend -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>
<span class="token comment"># \u91CD\u505A\u4E0A\u4E00\u6B21commit\uFF0C\u5E76\u5305\u62EC\u6307\u5B9A\u6587\u4EF6\u7684\u65B0\u53D8\u5316</span>
$ <span class="token function">git</span> commit --amend <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u4E94\u3001\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u5206\u652F" aria-hidden="true">#</a> \u4E94\u3001\u5206\u652F</h2><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F</span>
$ <span class="token function">git</span> branch
<span class="token comment"># \u5217\u51FA\u6240\u6709\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch -r
<span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> branch -a
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u4F9D\u7136\u505C\u7559\u5728\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
 <span class="token comment"># \u4EE5\u8FDC\u7A0B\u5206\u652F\u4E3A\u57FA\u7840\u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span>
$ <span class="token function">git</span> checkout -b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> origin/<span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u6307\u5B9Acommit</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</span>
$ <span class="token function">git</span> branch --track <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>
<span class="token comment"># \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\uFF0C\u5E76\u66F4\u65B0\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token comment"># \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F</span>
$ <span class="token function">git</span> checkout -
<span class="token comment"># \u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB\uFF0C\u5728\u73B0\u6709\u5206\u652F\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u4E4B\u95F4</span>
$ <span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>
 <span class="token comment"># \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment"># \u9009\u62E9\u4E00\u4E2Acommit\uFF0C\u5408\u5E76\u8FDB\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u5220\u9664\u5206\u652F</span>
$ <span class="token function">git</span> branch -d <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
$ <span class="token function">git</span> push origin --delete <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
$ <span class="token function">git</span> branch -dr <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u516D\u3001\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u6807\u7B7E" aria-hidden="true">#</a> \u516D\u3001\u6807\u7B7E</h2><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709tag</span>
$ <span class="token function">git</span> tag
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u5F53\u524Dcommit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u6307\u5B9Acommit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u5220\u9664\u672C\u5730tag</span>
$ <span class="token function">git</span> tag -d <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
 <span class="token comment"># \u5220\u9664\u8FDC\u7A0Btag</span>
$ <span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>
<span class="token comment"># \u67E5\u770Btag\u4FE1\u606F</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
<span class="token comment"># \u63D0\u4EA4\u6307\u5B9Atag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
<span class="token comment"># \u63D0\u4EA4\u6240\u6709tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --tags
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u67D0\u4E2Atag</span>
$ <span class="token function">git</span> checkout -b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u4E03\u3001\u67E5\u770B\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001\u67E5\u770B\u4FE1\u606F" aria-hidden="true">#</a> \u4E03\u3001\u67E5\u770B\u4FE1\u606F</h2><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> status
<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5386\u53F2</span>
$ <span class="token function">git</span> log
<span class="token comment"># \u663E\u793Acommit\u5386\u53F2\uFF0C\u4EE5\u53CA\u6BCF\u6B21commit\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> log --stat
<span class="token comment"># \u641C\u7D22\u63D0\u4EA4\u5386\u53F2\uFF0C\u6839\u636E\u5173\u952E\u8BCD</span>
$ <span class="token function">git</span> log -S <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>
 <span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u6BCF\u4E2Acommit\u5360\u636E\u4E00\u884C</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD --pretty<span class="token operator">=</span>format:%s
<span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u5176&quot;\u63D0\u4EA4\u8BF4\u660E&quot;\u5FC5\u987B\u7B26\u5408\u641C\u7D22\u6761\u4EF6</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD --grep feature
<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u6587\u4EF6\u7684\u7248\u672C\u5386\u53F2\uFF0C\u5305\u62EC\u6587\u4EF6\u6539\u540D</span>
$ <span class="token function">git</span> log --follow <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
$ <span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u76F8\u5173\u7684\u6BCF\u4E00\u6B21diff</span>
$ <span class="token function">git</span> log -p <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u8FC7\u53BB5\u6B21\u63D0\u4EA4</span>
$ <span class="token function">git</span> log -5 --pretty --oneline
<span class="token comment"># \u663E\u793A\u6240\u6709\u63D0\u4EA4\u8FC7\u7684\u7528\u6237\uFF0C\u6309\u63D0\u4EA4\u6B21\u6570\u6392\u5E8F</span>
 $ <span class="token function">git</span> shortlog -sn
<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u662F\u4EC0\u4E48\u4EBA\u5728\u4EC0\u4E48\u65F6\u95F4\u4FEE\u6539\u8FC7</span>
$ <span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span>
<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u4E0A\u4E00\u4E2Acommit\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u5206\u652F\u6700\u65B0commit\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD
<span class="token comment"># \u663E\u793A\u4E24\u6B21\u63D0\u4EA4\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u4ECA\u5929\u4F60\u5199\u4E86\u591A\u5C11\u884C\u4EE3\u7801</span>
 $ <span class="token function">git</span> <span class="token function">diff</span> --shortstat <span class="token string">&quot;@{0 day ago}&quot;</span>
<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u7684\u5143\u6570\u636E\u548C\u5185\u5BB9\u53D8\u5316</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u53D1\u751F\u53D8\u5316\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u65F6\uFF0C\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u51E0\u6B21\u63D0\u4EA4</span>
$ <span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u516B\u3001\u8FDC\u7A0B\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001\u8FDC\u7A0B\u540C\u6B65" aria-hidden="true">#</a> \u516B\u3001\u8FDC\u7A0B\u540C\u6B65</h2><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8</span>
$ <span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> remote -v
<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F</span>
$ <span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>
<span class="token comment"># \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u547D\u540D</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
 <span class="token comment"># \u53D6\u56DE\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\uFF0C\u5E76\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76</span>
$ <span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment"># \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment"># \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --force
<span class="token comment"># \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u4E5D\u3001\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#\u4E5D\u3001\u64A4\u9500" aria-hidden="true">#</a> \u4E5D\u3001\u64A4\u9500</h2><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u6062\u590D\u67D0\u4E2Acommit\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> checkout <span class="token builtin class-name">.</span>
<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
 <span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4$ git reset --hard</span>
<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684\u6307\u9488\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684HEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u6307\u5B9Acommit\u4E00\u81F4</span>
$ <span class="token function">git</span> reset --hard <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u91CD\u7F6E\u5F53\u524DHEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u4F46\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
$ <span class="token function">git</span> reset --keep <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Acommit\uFF0C\u7528\u6765\u64A4\u9500\u6307\u5B9Acommit</span>
<span class="token comment"># \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
<span class="token comment"># \u6682\u65F6\u5C06\u672A\u63D0\u4EA4\u7684\u53D8\u5316\u79FB\u9664\uFF0C\u7A0D\u540E\u518D\u79FB\u5165</span>
$ <span class="token function">git</span> stash
 $ <span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u5341\u3001\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5341\u3001\u5176\u4ED6" aria-hidden="true">#</a> \u5341\u3001\u5176\u4ED6</h2><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u751F\u6210\u4E00\u4E2A\u53EF\u4F9B\u53D1\u5E03\u7684\u538B\u7F29\u5305</span>
$ <span class="token function">git</span> archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h1 id="git\u5206\u652F\u7BA1\u7406\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#git\u5206\u652F\u7BA1\u7406\u7B56\u7565" aria-hidden="true">#</a> Git\u5206\u652F\u7BA1\u7406\u7B56\u7565</h1><p><strong>\u4E00\u3001\u4E3B\u5206\u652FMaster</strong></p><p>\u9996\u5148\uFF0C\u4EE3\u7801\u5E93\u5E94\u8BE5\u6709\u4E00\u4E2A\u3001\u4E14\u4EC5\u6709\u4E00\u4E2A\u4E3B\u5206\u652F\u3002\u6240\u6709\u63D0\u4F9B\u7ED9\u7528\u6237\u4F7F\u7528\u7684\u6B63\u5F0F\u7248\u672C\uFF0C\u90FD\u5728\u8FD9\u4E2A\u4E3B\u5206\u652F\u4E0A\u53D1\u5E03\u3002</p><p><img src="https://imgconvert.csdnimg.cn/aHR0cDovL3d3dy5ydWFueWlmZW5nLmNvbS9ibG9naW1nL2Fzc2V0LzIwMTIwNy9iZzIwMTIwNzA1MDMucG5n?x-oss-process=image/format,png" alt="img" loading="lazy"></p><p>Git\u4E3B\u5206\u652F\u7684\u540D\u5B57\uFF0C\u9ED8\u8BA4\u53EB\u505AMaster\u3002\u5B83\u662F\u81EA\u52A8\u5EFA\u7ACB\u7684\uFF0C\u7248\u672C\u5E93\u521D\u59CB\u5316\u4EE5\u540E\uFF0C\u9ED8\u8BA4\u5C31\u662F\u5728\u4E3B\u5206\u652F\u5728\u8FDB\u884C\u5F00\u53D1\u3002</p><p><strong>\u4E8C\u3001\u5F00\u53D1\u5206\u652FDevelop</strong></p><p>\u4E3B\u5206\u652F\u53EA\u7528\u6765\u5206\u5E03\u91CD\u5927\u7248\u672C\uFF0C\u65E5\u5E38\u5F00\u53D1\u5E94\u8BE5\u5728\u53E6\u4E00\u6761\u5206\u652F\u4E0A\u5B8C\u6210\u3002\u6211\u4EEC\u628A\u5F00\u53D1\u7528\u7684\u5206\u652F\uFF0C\u53EB\u505ADevelop\u3002</p><p><img src="https://imgconvert.csdnimg.cn/aHR0cDovL3d3dy5ydWFueWlmZW5nLmNvbS9ibG9naW1nL2Fzc2V0LzIwMTIwNy9iZzIwMTIwNzA1MDQucG5n?x-oss-process=image/format,png" alt="img" loading="lazy"></p><p>\u8FD9\u4E2A\u5206\u652F\u53EF\u4EE5\u7528\u6765\u751F\u6210\u4EE3\u7801\u7684\u6700\u65B0\u9694\u591C\u7248\u672C\uFF08nightly\uFF09\u3002\u5982\u679C\u60F3\u6B63\u5F0F\u5BF9\u5916\u53D1\u5E03\uFF0C\u5C31\u5728Master\u5206\u652F\u4E0A\uFF0C\u5BF9Develop\u5206\u652F\u8FDB\u884C&quot;\u5408\u5E76&quot;\uFF08merge\uFF09\u3002</p><p>Git\u521B\u5EFADevelop\u5206\u652F\u7684\u547D\u4EE4\uFF1A</p><blockquote><p>git checkout -b develop master</p></blockquote><p>\u5C06Develop\u5206\u652F\u53D1\u5E03\u5230Master\u5206\u652F\u7684\u547D\u4EE4\uFF1A</p><blockquote><p># \u5207\u6362\u5230Master\u5206\u652F \u3000\u3000git checkout master</p><p># \u5BF9Develop\u5206\u652F\u8FDB\u884C\u5408\u5E76 \u3000\u3000git merge --no-ff develop</p></blockquote><p>\u8FD9\u91CC\u7A0D\u5FAE\u89E3\u91CA\u4E00\u4E0B\uFF0C\u4E0A\u4E00\u6761\u547D\u4EE4\u7684--no-ff\u53C2\u6570\u662F\u4EC0\u4E48\u610F\u601D\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CGit\u6267\u884C&quot;\u5FEB\u8FDB\u5F0F\u5408\u5E76&quot;\uFF08fast-farward merge\uFF09\uFF0C\u4F1A\u76F4\u63A5\u5C06Master\u5206\u652F\u6307\u5411Develop\u5206\u652F\u3002</p><p><img src="https://imgconvert.csdnimg.cn/aHR0cDovL3d3dy5ydWFueWlmZW5nLmNvbS9ibG9naW1nL2Fzc2V0LzIwMTIwNy9iZzIwMTIwNzA1MDUucG5n?x-oss-process=image/format,png" alt="img" loading="lazy"></p>`,40),A=s("\u4F7F\u7528--no-ff\u53C2\u6570\u540E\uFF0C\u4F1A\u6267\u884C\u6B63\u5E38\u5408\u5E76\uFF0C\u5728Master\u5206\u652F\u4E0A\u751F\u6210\u4E00\u4E2A\u65B0\u8282\u70B9\u3002\u4E3A\u4E86\u4FDD\u8BC1\u7248\u672C\u6F14\u8FDB\u7684\u6E05\u6670\uFF0C\u6211\u4EEC\u5E0C\u671B\u91C7\u7528\u8FD9\u79CD\u505A\u6CD5\u3002\u5173\u4E8E\u5408\u5E76\u7684\u66F4\u591A\u89E3\u91CA\uFF0C\u8BF7\u53C2\u8003Benjamin Sandofsky\u7684"),G={href:"http://sandofsky.com/blog/git-workflow.html",target:"_blank",rel:"noopener noreferrer"},L=s("\u300AUnderstanding the Git Workflow\u300B"),I=s("\u3002"),M=a('<p><img src="https://imgconvert.csdnimg.cn/aHR0cDovL3d3dy5ydWFueWlmZW5nLmNvbS9ibG9naW1nL2Fzc2V0LzIwMTIwNy9iZzIwMTIwNzA1MDYucG5n?x-oss-process=image/format,png" alt="img" loading="lazy"></p><p><strong>\u4E09\u3001\u4E34\u65F6\u6027\u5206\u652F</strong></p><p>\u524D\u9762\u8BB2\u5230\u7248\u672C\u5E93\u7684\u4E24\u6761\u4E3B\u8981\u5206\u652F\uFF1AMaster\u548CDevelop\u3002\u524D\u8005\u7528\u4E8E\u6B63\u5F0F\u53D1\u5E03\uFF0C\u540E\u8005\u7528\u4E8E\u65E5\u5E38\u5F00\u53D1\u3002\u5176\u5B9E\uFF0C\u5E38\u8BBE\u5206\u652F\u53EA\u9700\u8981\u8FD9\u4E24\u6761\u5C31\u591F\u4E86\uFF0C\u4E0D\u9700\u8981\u5176\u4ED6\u4E86\u3002</p><p>\u4F46\u662F\uFF0C\u9664\u4E86\u5E38\u8BBE\u5206\u652F\u4EE5\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u4E34\u65F6\u6027\u5206\u652F\uFF0C\u7528\u4E8E\u5E94\u5BF9\u4E00\u4E9B\u7279\u5B9A\u76EE\u7684\u7684\u7248\u672C\u5F00\u53D1\u3002\u4E34\u65F6\u6027\u5206\u652F\u4E3B\u8981\u6709\u4E09\u79CD\uFF1A</p><blockquote><p>* \u529F\u80FD\uFF08feature\uFF09\u5206\u652F</p><p>* \u9884\u53D1\u5E03\uFF08release\uFF09\u5206\u652F</p><p>* \u4FEE\u8865bug\uFF08fixbug\uFF09\u5206\u652F</p></blockquote><p>\u8FD9\u4E09\u79CD\u5206\u652F\u90FD\u5C5E\u4E8E\u4E34\u65F6\u6027\u9700\u8981\uFF0C\u4F7F\u7528\u5B8C\u4EE5\u540E\uFF0C\u5E94\u8BE5\u5220\u9664\uFF0C\u4F7F\u5F97\u4EE3\u7801\u5E93\u7684\u5E38\u8BBE\u5206\u652F\u59CB\u7EC8\u53EA\u6709Master\u548CDevelop\u3002</p><p><strong>\u56DB\u3001 \u529F\u80FD\u5206\u652F</strong></p><p>\u63A5\u4E0B\u6765\uFF0C\u4E00\u4E2A\u4E2A\u6765\u770B\u8FD9\u4E09\u79CD&quot;\u4E34\u65F6\u6027\u5206\u652F&quot;\u3002</p><p>\u7B2C\u4E00\u79CD\u662F\u529F\u80FD\u5206\u652F\uFF0C\u5B83\u662F\u4E3A\u4E86\u5F00\u53D1\u67D0\u79CD\u7279\u5B9A\u529F\u80FD\uFF0C\u4ECEDevelop\u5206\u652F\u4E0A\u9762\u5206\u51FA\u6765\u7684\u3002\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u8981\u518D\u5E76\u5165Develop\u3002</p><p><img src="https://imgconvert.csdnimg.cn/aHR0cDovL3d3dy5ydWFueWlmZW5nLmNvbS9ibG9naW1nL2Fzc2V0LzIwMTIwNy9iZzIwMTIwNzA1MDcucG5n?x-oss-process=image/format,png" alt="img" loading="lazy"></p><p>\u529F\u80FD\u5206\u652F\u7684\u540D\u5B57\uFF0C\u53EF\u4EE5\u91C7\u7528feature-*\u7684\u5F62\u5F0F\u547D\u540D\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A\u529F\u80FD\u5206\u652F\uFF1A</p><blockquote><p>git checkout -b feature-x develop</p></blockquote><p>\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u5C06\u529F\u80FD\u5206\u652F\u5408\u5E76\u5230develop\u5206\u652F\uFF1A</p><blockquote><p>git checkout develop</p><p>git merge --no-ff feature-x</p></blockquote><p>\u5220\u9664feature\u5206\u652F\uFF1A</p><blockquote><p>git branch -d feature-x</p></blockquote><p><strong>\u4E94\u3001\u9884\u53D1\u5E03\u5206\u652F</strong></p><p>\u7B2C\u4E8C\u79CD\u662F\u9884\u53D1\u5E03\u5206\u652F\uFF0C\u5B83\u662F\u6307\u53D1\u5E03\u6B63\u5F0F\u7248\u672C\u4E4B\u524D\uFF08\u5373\u5408\u5E76\u5230Master\u5206\u652F\u4E4B\u524D\uFF09\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u6709\u4E00\u4E2A\u9884\u53D1\u5E03\u7684\u7248\u672C\u8FDB\u884C\u6D4B\u8BD5\u3002</p><p>\u9884\u53D1\u5E03\u5206\u652F\u662F\u4ECEDevelop\u5206\u652F\u4E0A\u9762\u5206\u51FA\u6765\u7684\uFF0C\u9884\u53D1\u5E03\u7ED3\u675F\u4EE5\u540E\uFF0C\u5FC5\u987B\u5408\u5E76\u8FDBDevelop\u548CMaster\u5206\u652F\u3002\u5B83\u7684\u547D\u540D\uFF0C\u53EF\u4EE5\u91C7\u7528release-*\u7684\u5F62\u5F0F\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A\u9884\u53D1\u5E03\u5206\u652F\uFF1A</p><blockquote><p>git checkout -b release-1.2 develop</p></blockquote><p>\u786E\u8BA4\u6CA1\u6709\u95EE\u9898\u540E\uFF0C\u5408\u5E76\u5230master\u5206\u652F\uFF1A</p><blockquote><p>git checkout master</p><p>git merge --no-ff release-1.2</p><p># \u5BF9\u5408\u5E76\u751F\u6210\u7684\u65B0\u8282\u70B9\uFF0C\u505A\u4E00\u4E2A\u6807\u7B7E \u3000\u3000git tag -a 1.2</p></blockquote><p>\u518D\u5408\u5E76\u5230develop\u5206\u652F\uFF1A</p><blockquote><p>git checkout develop</p><p>git merge --no-ff release-1.2</p></blockquote><p>\u6700\u540E\uFF0C\u5220\u9664\u9884\u53D1\u5E03\u5206\u652F\uFF1A</p><blockquote><p>git branch -d release-1.2</p></blockquote><p><strong>\u516D\u3001\u4FEE\u8865bug\u5206\u652F</strong></p><p>\u6700\u540E\u4E00\u79CD\u662F\u4FEE\u8865bug\u5206\u652F\u3002\u8F6F\u4EF6\u6B63\u5F0F\u53D1\u5E03\u4EE5\u540E\uFF0C\u96BE\u514D\u4F1A\u51FA\u73B0bug\u3002\u8FD9\u65F6\u5C31\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u8FDB\u884Cbug\u4FEE\u8865\u3002</p><p>\u4FEE\u8865bug\u5206\u652F\u662F\u4ECEMaster\u5206\u652F\u4E0A\u9762\u5206\u51FA\u6765\u7684\u3002\u4FEE\u8865\u7ED3\u675F\u4EE5\u540E\uFF0C\u518D\u5408\u5E76\u8FDBMaster\u548CDevelop\u5206\u652F\u3002\u5B83\u7684\u547D\u540D\uFF0C\u53EF\u4EE5\u91C7\u7528fixbug-*\u7684\u5F62\u5F0F\u3002</p><p><img src="https://imgconvert.csdnimg.cn/aHR0cDovL3d3dy5ydWFueWlmZW5nLmNvbS9ibG9naW1nL2Fzc2V0LzIwMTIwNy9iZzIwMTIwNzA1MDgucG5n?x-oss-process=image/format,png" alt="img" loading="lazy"></p><p>\u521B\u5EFA\u4E00\u4E2A\u4FEE\u8865bug\u5206\u652F\uFF1A</p><blockquote><p>git checkout -b fixbug-0.1 master</p></blockquote><p>\u4FEE\u8865\u7ED3\u675F\u540E\uFF0C\u5408\u5E76\u5230master\u5206\u652F\uFF1A</p><blockquote><p>git checkout master</p><p>git merge --no-ff fixbug-0.1</p><p>git tag -a 0.1.1</p></blockquote><p>\u518D\u5408\u5E76\u5230develop\u5206\u652F\uFF1A</p><blockquote><p>git checkout develop</p><p>git merge --no-ff fixbug-0.1</p></blockquote><p>\u6700\u540E\uFF0C\u5220\u9664&quot;\u4FEE\u8865bug\u5206\u652F&quot;\uFF1A</p><blockquote><p>git branch -d fixbug-0.1</p></blockquote><h1 id="\u7248\u672C\u56DE\u9000-\u64A4\u9500\u6587\u4EF6\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u56DE\u9000-\u64A4\u9500\u6587\u4EF6\u4FEE\u6539" aria-hidden="true">#</a> \u7248\u672C\u56DE\u9000-\u64A4\u9500\u6587\u4EF6\u4FEE\u6539</h1>',41),N=n("p",{\u9488\u5BF9\u6587\u4EF6\u4FEE\u6539\u6062\u590D:""},null,-1),z=a(`<h2 id="\u5DE5\u4F5C\u533A\u4FEE\u6539\u4E00\u4E2A\u6587\u4EF6\u540E-\u53C8\u60F3\u56DE\u5230\u4FEE\u6539\u524D-git-add\u524D" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u533A\u4FEE\u6539\u4E00\u4E2A\u6587\u4EF6\u540E-\u53C8\u60F3\u56DE\u5230\u4FEE\u6539\u524D-git-add\u524D" aria-hidden="true">#</a> \u5DE5\u4F5C\u533A\u4FEE\u6539\u4E00\u4E2A\u6587\u4EF6\u540E\uFF0C\u53C8\u60F3\u56DE\u5230\u4FEE\u6539\u524D(git add\u524D)</h2><p>\\1. \u5F53\u7136\u53EF\u4EE5\u76F4\u63A5\u624B\u52A8\u518D\u5728\u5DE5\u4F5C\u533A\u4E2D\u5C06\u6587\u4EF6\u4FEE\u6539\u56DE\u53BB</p><p>\\2. \u4FEE\u6539\u540E\uFF0C\u901A\u8FC7\u547D\u4EE4git status\u67E5\u770B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git status



# On branch master



# Changes not staged for commit:



#   (use &quot;git add \\<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>...&quot; to update what will be committed)



#   (use &quot;git checkout -- \\<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>...&quot; to discard changes in working directory)



#



#       modified:   readme.txt



#



no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6Git\u4F1A\u544A\u8BC9\u4F60\uFF0Cgit checkout -- file\u53EF\u4EE5\u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git checkout -- readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note</strong>:</p><p>\\1. git checkout -- file\u547D\u4EE4\u4E2D\u7684--\u5F88\u91CD\u8981\uFF0C\u6CA1\u6709--\uFF0C\u5C31\u53D8\u6210\u4E86\u201C\u5207\u6362\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u201D\u7684\u547D\u4EE4\uFF0C\u6211\u4EEC\u5728\u540E\u9762\u7684\u5206\u652F\u7BA1\u7406\u4E2D\u4F1A\u518D\u6B21\u9047\u5230git checkout\u547D\u4EE4\u3002</p><p>\\2. \u547D\u4EE4git checkout -- readme.txt\u610F\u601D\u5C31\u662F\uFF0C\u628Areadme.txt\u6587\u4EF6\u5728\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\u5168\u90E8\u64A4\u9500\uFF0C\u8FD9\u91CC\u6709\u4E24\u79CD\u60C5\u51B5\uFF1A</p><p>\u4E00\u79CD\u662Freadme.txt\u81EA\u4FEE\u6539\u540E\u8FD8\u6CA1\u6709\u88AB\u653E\u5230\u6682\u5B58\u533A\uFF0C\u73B0\u5728\uFF0C\u64A4\u9500\u4FEE\u6539\u5C31\u56DE\u5230\u548C\u7248\u672C\u5E93\u4E00\u6A21\u4E00\u6837\u7684\u72B6\u6001\uFF1B\u4E00\u79CD\u662Freadme.txt\u5DF2\u7ECF\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u540E\uFF0C\u53C8\u4F5C\u4E86\u4FEE\u6539\uFF0C\u73B0\u5728\uFF0C\u64A4\u9500\u4FEE\u6539\u5C31\u56DE\u5230\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u540E\u7684\u72B6\u6001\u3002\u603B\u4E4B\uFF0C\u5C31\u662F\u8BA9\u8FD9\u4E2A\u6587\u4EF6\u56DE\u5230\u6700\u8FD1\u4E00\u6B21git commit\u6216git add\u65F6\u7684\u72B6\u6001\u3002</p>`,10),H=s("\\3. \u5DE5\u4F5C\u533A\u3001\u6682\u5B58\u533A\u7684\u6982\u5FF5\u4E0D\u6E05\u695A\u7684\u53EF\u89C1\u4E8E"),E={href:"http://blog.csdn.net/pipisorry/article/details/44588351",target:"_blank",rel:"noopener noreferrer"},S=s("Git\u7248\u672C\u63A7\u5236\u6559\u7A0B - Git\u672C\u5730\u4ED3\u5E93"),W=a(`<h2 id="\u5982\u679C\u5728\u5DE5\u4F5C\u533A\u4E2D\u4FEE\u6539\u4E86\u6587\u4EF6\u8FD8git-add\u5230\u6682\u5B58\u533A-\u4F46\u662F\u5728commit\u4E4B\u524D" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u5728\u5DE5\u4F5C\u533A\u4E2D\u4FEE\u6539\u4E86\u6587\u4EF6\u8FD8git-add\u5230\u6682\u5B58\u533A-\u4F46\u662F\u5728commit\u4E4B\u524D" aria-hidden="true">#</a> \u5982\u679C\u5728\u5DE5\u4F5C\u533A\u4E2D\u4FEE\u6539\u4E86\u6587\u4EF6\u8FD8git add\u5230\u6682\u5B58\u533A\uFF08\u4F46\u662F\u5728commit\u4E4B\u524D\uFF09</h2><p>\u7528git status\u67E5\u770B\u4E00\u4E0B\uFF0C\u4FEE\u6539\u53EA\u662F\u6DFB\u52A0\u5230\u4E86\u6682\u5B58\u533A\uFF0C\u8FD8\u6CA1\u6709\u63D0\u4EA4\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git status



# On branch master



# Changes to be committed:



#   (use &quot;git reset HEAD \\<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>...&quot; to unstage)



#



#       modified:   readme.txt



#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git\u540C\u6837\u544A\u8BC9\u6211\u4EEC\uFF0C\u7528\u547D\u4EE4git reset HEAD file\u53EF\u4EE5\u628A\u6682\u5B58\u533A\u7684\u4FEE\u6539\u64A4\u9500\u6389\uFF08unstage\uFF09\uFF0C\u91CD\u65B0\u653E\u56DE\u5DE5\u4F5C\u533A\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git reset HEAD readme.txt



Unstaged changes after reset:



M       readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git reset\u547D\u4EE4\u65E2\u53EF\u4EE5\u56DE\u9000\u7248\u672C\uFF0C\u4E5F\u53EF\u4EE5\u628A\u6682\u5B58\u533A\u7684\u4FEE\u6539\u56DE\u9000\u5230\u5DE5\u4F5C\u533A\u3002\u5F53\u6211\u4EEC\u7528HEAD\u65F6\uFF0C\u8868\u793A\u6700\u65B0\u7684\u7248\u672C\u3002</p><p>\u518D\u7528git status\u67E5\u770B\u4E00\u4E0B\uFF0C\u73B0\u5728\u6682\u5B58\u533A\u662F\u5E72\u51C0\u7684\uFF0C\u5DE5\u4F5C\u533A\u6709\u4FEE\u6539\u3002</p><p>\u7136\u540E\u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git checkout -- readme.txt



 



$ git status



# On branch master



nothing to commit (working directory clean)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0D\u4F46\u4FEE\u6539\u4E86\u6587\u4EF6\u8FD8\u4ECE\u6682\u5B58\u533A\u63D0\u4EA4commit\u5230\u4E86\u7248\u672C\u5E93-\u7248\u672C\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u4F46\u4FEE\u6539\u4E86\u6587\u4EF6\u8FD8\u4ECE\u6682\u5B58\u533A\u63D0\u4EA4commit\u5230\u4E86\u7248\u672C\u5E93-\u7248\u672C\u56DE\u9000" aria-hidden="true">#</a> \u4E0D\u4F46\u4FEE\u6539\u4E86\u6587\u4EF6\u8FD8\u4ECE\u6682\u5B58\u533A\u63D0\u4EA4commit\u5230\u4E86\u7248\u672C\u5E93 - \u7248\u672C\u56DE\u9000</h2><p>\u7248\u672C\u56DE\u9000\u53EF\u4EE5\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C\u3002\u4E0D\u8FC7\uFF0C\u8FD9\u662F\u6709\u6761\u4EF6\u7684\uFF0C\u5C31\u662F\u4F60\u8FD8\u6CA1\u6709\u628A\u81EA\u5DF1\u7684\u672C\u5730\u7248\u672C\u5E93\u63A8\u9001\u5230\u8FDC\u7A0B\u3002Git\u662F\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u3002</p><p>\u5728\u5DE5\u4F5C\u4E2D\u5BF9\u67D0\u4E2A\u6587\u4EF6\uFF08\u5982readme.txt\uFF09\u8FDB\u884C\u591A\u6B21\u4FEE\u6539\u4EA4commit\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u547D\u4EE4\u544A\u8BC9\u6211\u4EEC\u63D0\u4EA4\u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u5728Git\u4E2D\uFF0C\u6211\u4EEC\u7528git log\u547D\u4EE4\u67E5\u770B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git log



commit 3628164fb26d48395383f8f31179f24e0882e1e0



Author: Michael Liao \\<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>askxuefeng@gmail.com</span><span class="token punctuation">&gt;</span></span>



Date:   Tue Aug 20 15:11:49 2013 +0800



 



    append GPL



 



commit ea34578d5496d7dd233c827ed32a8cd576c5ee85



Author: Michael Liao \\<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>askxuefeng@gmail.com</span><span class="token punctuation">&gt;</span></span>



Date:   Tue Aug 20 14:53:12 2013 +0800



 



    add distributed



 



commit cb926e7ea50ad11b8f9e909c05226233bf755030



Author: Michael Liao \\<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>askxuefeng@gmail.com</span><span class="token punctuation">&gt;</span></span>



Date:   Mon Aug 19 17:51:55 2013 +0800



 



    wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong>:</p><p>\\1. git log\u547D\u4EE4\u663E\u793A\u4ECE\u6700\u8FD1\u5230\u6700\u8FDC\u7684\u63D0\u4EA4\u65E5\u5FD7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u52303\u6B21\u63D0\u4EA4\uFF0C\u6700\u8FD1\u7684\u4E00\u6B21\u662Fappend GPL\uFF0C\u4E0A\u4E00\u6B21\u662Fadd distributed\uFF0C\u6700\u65E9\u7684\u4E00\u6B21\u662Fwrote a readme file\u3002</p><p>\\2. \u5982\u679C\u5ACC\u8F93\u51FA\u4FE1\u606F\u592A\u591A\uFF0C\u770B\u5F97\u773C\u82B1\u7F2D\u4E71\u7684\uFF0C\u53EF\u4EE5\u8BD5\u8BD5\u52A0\u4E0A--pretty=oneline\u53C2\u6570\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git log --pretty=oneline



3628164fb26d48395383f8f31179f24e0882e1e0 append GPL



ea34578d5496d7dd233c827ed32a8cd576c5ee85 add distributed



cb926e7ea50ad11b8f9e909c05226233bf755030 wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\3. \u4F60\u770B\u5230\u7684\u4E00\u5927\u4E32\u7C7B\u4F3C3628164...882e1e0\u7684\u662Fcommit id\uFF08\u7248\u672C\u53F7\uFF09\uFF0C\u548CSVN\u4E0D\u4E00\u6837\uFF0CGit\u7684commit id\u4E0D\u662F1\uFF0C2\uFF0C3\u2026\u2026\u9012\u589E\u7684\u6570\u5B57\uFF0C\u800C\u662F\u4E00\u4E2ASHA1\u8BA1\u7B97\u51FA\u6765\u7684\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u6570\u5B57\uFF0C\u7528\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u800C\u4E14\u4F60\u770B\u5230\u7684commit id\u548C\u6211\u7684\u80AF\u5B9A\u4E0D\u4E00\u6837\uFF0C\u4EE5\u4F60\u81EA\u5DF1\u7684\u4E3A\u51C6\u3002\u4E3A\u4EC0\u4E48commit id\u9700\u8981\u7528\u8FD9\u4E48\u4E00\u5927\u4E32\u6570\u5B57\u8868\u793A\u5462\uFF1F\u56E0\u4E3AGit\u662F\u5206\u5E03\u5F0F\u7684\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF0C\u540E\u9762\u6211\u4EEC\u8FD8\u8981\u7814\u7A76\u591A\u4EBA\u5728\u540C\u4E00\u4E2A\u7248\u672C\u5E93\u91CC\u5DE5\u4F5C\uFF0C\u5982\u679C\u5927\u5BB6\u90FD\u75281\uFF0C2\uFF0C3\u2026\u2026\u4F5C\u4E3A\u7248\u672C\u53F7\uFF0C\u90A3\u80AF\u5B9A\u5C31\u51B2\u7A81\u4E86\u3002</p><p>\\4. \u6BCF\u63D0\u4EA4\u4E00\u4E2A\u65B0\u7248\u672C\uFF0C\u5B9E\u9645\u4E0AGit\u5C31\u4F1A\u628A\u5B83\u4EEC\u81EA\u52A8\u4E32\u6210\u4E00\u6761\u65F6\u95F4\u7EBF\u3002\u5982\u679C\u4F7F\u7528\u53EF\u89C6\u5316\u5DE5\u5177\uFF08\u5982GitX\u3001github\u7684\u5BA2\u6237\u7AEF\u3001pycharm\uFF09\u67E5\u770BGit\u5386\u53F2\uFF0C\u5C31\u53EF\u4EE5\u66F4\u6E05\u695A\u5730\u770B\u5230\u63D0\u4EA4\u5386\u53F2\u7684\u65F6\u95F4\u7EBF\u3002</p><h3 id="\u73B0\u5728\u6211\u4EEC\u60F3\u8981\u628Areadme-txt\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u73B0\u5728\u6211\u4EEC\u60F3\u8981\u628Areadme-txt\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C" aria-hidden="true">#</a> \u73B0\u5728\u6211\u4EEC\u60F3\u8981\u628Areadme.txt\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C</h3><p>\u5982\u201Cadd distributed\u201D\u7684\u90A3\u4E2A\u7248\u672C\uFF0C\u600E\u4E48\u505A\u5462\uFF1F\u9996\u5148\uFF0CGit\u5FC5\u987B\u77E5\u9053\u5F53\u524D\u7248\u672C\u662F\u54EA\u4E2A\u7248\u672C\uFF0C\u5728Git\u4E2D\uFF0C\u7528HEAD\u8868\u793A\u5F53\u524D\u7248\u672C\uFF0C\u4E5F\u5C31\u662F\u6700\u65B0\u7684\u63D0\u4EA43628164...882e1e0\uFF08\u6CE8\u610F\u6211\u7684\u63D0\u4EA4ID\u548C\u4F60\u7684\u80AF\u5B9A\u4E0D\u4E00\u6837\uFF09\uFF0C\u4E0A\u4E00\u4E2A\u7248\u672C\u5C31\u662FHEAD<sup>\uFF0C\u4E0A\u4E0A\u4E00\u4E2A\u7248\u672C\u5C31\u662FHEAD</sup><sup>\uFF0C\u5F53\u7136\u5F80\u4E0A100\u4E2A\u7248\u672C\u5199100\u4E2A</sup>\u6BD4\u8F83\u5BB9\u6613\u6570\u4E0D\u8FC7\u6765\uFF0C\u6240\u4EE5\u5199\u6210HEAD~100\u3002</p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u8981\u628A\u5F53\u524D\u7248\u672C\u201Cappend GPL\u201D\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u7248\u672C\u201Cadd distributed\u201D\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528git reset\u547D\u4EE4\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>$ git reset <span class="token operator">--</span>hard HEAD<span class="token operator">^</span>



HEAD <span class="token keyword">is</span> <span class="token class-name">now</span> at ea34578 <span class="token keyword">add</span> distributed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6readme.txt\u7684\u5185\u5BB9\u5C31\u6210\u4E86\u7248\u672Cadd distributed</p><p>\u6211\u4EEC\u7528git log\u518D\u770B\u770B\u73B0\u5728\u7248\u672C\u5E93\u7684\u72B6\u6001\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git log



commit ea34578d5496d7dd233c827ed32a8cd576c5ee85



Author: Michael Liao \\<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>askxuefeng@gmail.com</span><span class="token punctuation">&gt;</span></span>



Date:   Tue Aug 20 14:53:12 2013 +0800



 



    add distributed



 



commit cb926e7ea50ad11b8f9e909c05226233bf755030



Author: Michael Liao \\<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>askxuefeng@gmail.com</span><span class="token punctuation">&gt;</span></span>



Date:   Mon Aug 19 17:51:55 2013 +0800



 



    wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u65B0\u7684\u90A3\u4E2A\u7248\u672Cappend GPL\u5DF2\u7ECF\u770B\u4E0D\u5230\u4E86\uFF01</p><h2 id="\u6062\u590D\u6587\u4EF6\u540E-\u8981\u662F\u6211\u4EEC\u53C8\u60F3\u56DE\u5230\u4FEE\u6539\u540E\u7684\u6587\u4EF6\u5462-\u547D\u4EE4\u884C\u7A97\u53E3\u8FD8\u6CA1\u6709\u88AB\u5173\u6389" tabindex="-1"><a class="header-anchor" href="#\u6062\u590D\u6587\u4EF6\u540E-\u8981\u662F\u6211\u4EEC\u53C8\u60F3\u56DE\u5230\u4FEE\u6539\u540E\u7684\u6587\u4EF6\u5462-\u547D\u4EE4\u884C\u7A97\u53E3\u8FD8\u6CA1\u6709\u88AB\u5173\u6389" aria-hidden="true">#</a> \u6062\u590D\u6587\u4EF6\u540E\uFF0C\u8981\u662F\u6211\u4EEC\u53C8\u60F3\u56DE\u5230\u4FEE\u6539\u540E\u7684\u6587\u4EF6\u5462\uFF1F\uFF08\u547D\u4EE4\u884C\u7A97\u53E3\u8FD8\u6CA1\u6709\u88AB\u5173\u6389\uFF09</h2>`,29),P=n("p",{\u8FD9\u4E2A\u662Fgit:"",reset:"","--hard\u540E\uFF0C\u53C8\u53CD\u6094\u4E86\uFF0C\u60F3\u56DE\u5230\u4FEE\u6539\u540E\u7684\u72B6\u6001":""},null,-1),j=a(`<p>\u53EA\u8981\u4E0A\u9762\u7684\u547D\u4EE4\u884C\u7A97\u53E3\u8FD8\u6CA1\u6709\u88AB\u5173\u6389\uFF0C\u4F60\u5C31\u53EF\u4EE5\u987A\u7740\u5F80\u4E0A\u627E\u554A\u627E\u554A\uFF0C\u627E\u5230\u90A3\u4E2Aappend GPL\u7684commit id\u662F3628164...\uFF0C\u4E8E\u662F\u5C31\u53EF\u4EE5\u6307\u5B9A\u56DE\u5230\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git reset --hard 3628164



HEAD is now at 3628164 append GPL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7248\u672C\u53F7\u6CA1\u5FC5\u8981\u5199\u5168\uFF0C\u524D\u51E0\u4F4D\u5C31\u53EF\u4EE5\u4E86\uFF0CGit\u4F1A\u81EA\u52A8\u53BB\u627E\u3002</p><p>Git\u7684\u7248\u672C\u56DE\u9000\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u56E0\u4E3AGit\u5728\u5185\u90E8\u6709\u4E2A\u6307\u5411\u5F53\u524D\u7248\u672C\u7684HEAD\u6307\u9488\uFF0C\u5F53\u4F60\u56DE\u9000\u7248\u672C\u7684\u65F6\u5019\uFF0CGit\u4EC5\u4EC5\u662F\u628AHEAD\u4ECE\u6307\u5411append GPL\uFF1A</p><p><img src="https://img-blog.csdn.net/20150824103212235?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt="git-head" loading="lazy"></p><p>\u6539\u4E3A\u6307\u5411add distributed\uFF1A</p><p><img src="https://img-blog.csdn.net/20150824103242645?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt="git-head-move" loading="lazy"></p><p>\u7136\u540E\u987A\u4FBF\u628A\u5DE5\u4F5C\u533A\u7684\u6587\u4EF6\u66F4\u65B0\u4E86\u3002\u6240\u4EE5\u4F60\u8BA9HEAD\u6307\u5411\u54EA\u4E2A\u7248\u672C\u53F7\uFF0C\u4F60\u5C31\u628A\u5F53\u524D\u7248\u672C\u5B9A\u4F4D\u5728\u54EA\u3002</p><h2 id="\u6062\u590D\u6587\u4EF6\u540E-\u8981\u662F\u6211\u4EEC\u53C8\u60F3\u56DE\u5230\u4FEE\u6539\u540E\u7684\u6587\u4EF6\u5462-\u547D\u4EE4\u884C\u7A97\u53E3\u65E9\u5C31\u5173\u6389\u4E86" tabindex="-1"><a class="header-anchor" href="#\u6062\u590D\u6587\u4EF6\u540E-\u8981\u662F\u6211\u4EEC\u53C8\u60F3\u56DE\u5230\u4FEE\u6539\u540E\u7684\u6587\u4EF6\u5462-\u547D\u4EE4\u884C\u7A97\u53E3\u65E9\u5C31\u5173\u6389\u4E86" aria-hidden="true">#</a> \u6062\u590D\u6587\u4EF6\u540E\uFF0C\u8981\u662F\u6211\u4EEC\u53C8\u60F3\u56DE\u5230\u4FEE\u6539\u540E\u7684\u6587\u4EF6\u5462\uFF1F\uFF08\u547D\u4EE4\u884C\u7A97\u53E3\u65E9\u5C31\u5173\u6389\u4E86\uFF09</h2>`,9),T=n("p",{\u8FD9\u4E2A\u662Fgit:"",reset:"","--hard\u540E\uFF0C\u53C8\u53CD\u6094\u4E86\uFF0C\u60F3\u56DE\u5230\u4FEE\u6539\u540E\u7684\u72B6\u6001":""},null,-1),C=n("p",null,"\u60F3\u6062\u590D\u5230\u65B0\u7248\u672C\u600E\u4E48\u529E\uFF1F\u627E\u4E0D\u5230\u65B0\u7248\u672C\u7684commit id\u600E\u4E48\u529E\uFF1F\u5F53\u4F60\u7528$ git reset --hard HEAD^\u56DE\u9000\u5230add distributed\u7248\u672C\u65F6\uFF0C\u518D\u60F3\u6062\u590D\u5230append GPL\uFF0C\u5C31\u5FC5\u987B\u627E\u5230append GPL\u7684commit id\u3002",-1),F=s("Git\u63D0\u4F9B\u4E86\u4E00\u4E2A\u547D\u4EE4git reflog\u7528\u6765\u8BB0\u5F55\u4F60\u7684\u6BCF\u4E00\u6B21\u547D\u4EE4\uFF1A["),V={href:"http://blog.csdn.net/pipisorry/article/details/50669350",target:"_blank",rel:"noopener noreferrer"},Z=s("Git\u9AD8\u7EA7\u6559\u7A0B"),R=s(":git log\u4E0Egit reflog]"),J=a(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>$ git reflog



ea34578 HEAD@{0}: reset: moving to HEAD^



3628164 HEAD@{1}: commit: append GPL



ea34578 HEAD@{2}: commit: add distributed



cb926e7 HEAD@{3}: commit (initial): wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u884C\u663E\u793Aappend GPL\u7684commit id\u662F3628164\uFF0C\u73B0\u5728\uFF0C\u4F60\u53C8\u53EF\u4EE5\u4E58\u5750\u65F6\u5149\u673A\u56DE\u5230\u672A\u6765\u4E86\u3002</p>`,2);function U(O,B){const e=l("ExternalLinkIcon");return c(),o("div",null,[p,n("h2",r,[u,m,n("a",v,[b,i(e)])]),k,n("p",null,[g,n("a",h,[f,i(e)]),x]),q,n("p",null,[w,n("a",_,[$,i(e)]),D]),y,n("p",null,[A,n("a",G,[L,i(e)]),I]),M,N,z,n("p",null,[H,n("a",E,[S,i(e)])]),W,P,j,T,C,n("p",null,[F,n("a",V,[Z,i(e)]),R]),J])}var Y=t(d,[["render",U],["__file","QuickSearch.html.vue"]]);export{Y as default};
