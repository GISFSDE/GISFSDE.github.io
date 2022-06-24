import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as t,c as i,a as n,b as c,d as s,e as r}from"./app.95807bc9.js";const o={},d=n("blockquote",null,[n("p",null,'Nginx("engine x")\u662F\u4E00\u6B3E\u662F\u7531\u4FC4\u7F57\u65AF\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u5E08Igor Sysoev\u6240\u5F00\u53D1\u9AD8\u6027\u80FD\u7684 Web\u548C \u53CD\u5411\u4EE3\u7406 \u670D\u52A1\u5668\uFF0C\u4E5F\u662F\u4E00\u4E2A IMAP/POP3/SMTP \u4EE3\u7406\u670D\u52A1\u5668\u3002\u5728\u9AD8\u8FDE\u63A5\u5E76\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0CNginx\u662FApache\u670D\u52A1\u5668\u4E0D\u9519\u7684\u66FF\u4EE3\u54C1\u3002')],-1),v={id:"\u4E0B\u8F7D",tabindex:"-1"},p=n("a",{class:"header-anchor",href:"#\u4E0B\u8F7D","aria-hidden":"true"},"#",-1),m=s(),u={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},k=s("\u4E0B\u8F7D"),b=r(`<h1 id="\u5B89\u88C5\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u90E8\u7F72" aria-hidden="true">#</a> \u5B89\u88C5\u90E8\u7F72</h1><p>\u200B \u89E3\u538B\u540E\u4E0D\u8981\u76F4\u63A5\u70B9\u51FBexe\uFF0C\u4F1A\u5BFC\u81F4\u4FEE\u6539\u914D\u7F6E\u540E\u91CD\u542F\u3001\u505C\u6B62nginx\u65E0\u6548\uFF0C\u9700\u8981\u624B\u52A8\u5173\u95ED\u4EFB\u52A1\u7BA1\u7406\u5668\u5185\u7684\u6240\u6709nginx\u8FDB\u7A0B\uFF0C\u518D\u542F\u52A8\u624D\u53EF\u4EE5\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>start nginx<span class="token comment">//\u542F\u52A8\u670D\u52A1</span>
nginx <span class="token operator">-</span>s reload<span class="token comment">//\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u5E76\u542F\u52A8</span>
nginx <span class="token operator">-</span>s stop<span class="token comment">//  \u5FEB\u901F\u505C\u6B62</span>
nginx <span class="token operator">-</span>s quit<span class="token comment">//\u5B8C\u6574\u6709\u5E8F\u7684\u5173\u95ED</span>
nginx <span class="token operator">-</span>t  <span class="token comment">// \u68C0\u67E5\u914D\u7F6E\u662F\u5426\u6B63\u786E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u914D\u7F6E\u81EA\u5B9A\u4E49nginx-conf" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u81EA\u5B9A\u4E49nginx-conf" aria-hidden="true">#</a> \u914D\u7F6E\u81EA\u5B9A\u4E49nginx.conf</h1><p>\u6307\u4EE4\u5FC5\u987B\u4EE5\u5206\u53F7\u7ED3\u675F</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment">#user  nobody;</span>

<span class="token comment">#==\u5DE5\u4F5C\u8FDB\u7A0B\u6570\uFF0C\u4E00\u822C\u8BBE\u7F6E\u4E3Acpu\u6838\u5FC3\u6570</span>
<span class="token key attr-name">worker_processes</span> <span class="token value attr-value"> 1;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


<span class="token key attr-name">events</span> <span class="token value attr-value">{</span>

<span class="token comment">    #==\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u4E00\u822C\u8BBE\u7F6E\u4E3Acpu*2048</span>
<span class="token key attr-name">    worker_connections</span> <span class="token value attr-value"> 1024;</span>
}


<span class="token key attr-name">http</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    include</span> <span class="token value attr-value">      mime.types;</span>
<span class="token key attr-name">    default_type</span> <span class="token value attr-value"> application/octet-stream;</span>

<span class="token comment">    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
<span class="token comment">    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
<span class="token comment">    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

<span class="token comment">    #access_log  logs/access.log  main;</span>

<span class="token key attr-name">    sendfile</span> <span class="token value attr-value">       on;</span>
<span class="token comment">    #tcp_nopush     on;</span>

<span class="token comment">    #keepalive_timeout  0;</span>
    
<span class="token comment">    #==\u5BA2\u6237\u7AEF\u94FE\u63A5\u8D85\u65F6\u65F6\u95F4</span>
<span class="token key attr-name">    keepalive_timeout</span> <span class="token value attr-value"> 65;</span>

<span class="token comment">    #gzip  on;</span>

<span class="token comment">    #\u5F53\u914D\u7F6E\u591A\u4E2Aserver\u8282\u70B9\u65F6\uFF0C\u9ED8\u8BA4server names\u7684\u7F13\u5B58\u533A\u5927\u5C0F\u5C31\u4E0D\u591F\u4E86\uFF0C\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u5927\u4E00\u70B9</span>
<span class="token key attr-name">    server_names_hash_bucket_size</span> <span class="token value attr-value">512;</span>

<span class="token comment">    #server\u8868\u793A\u865A\u62DF\u4E3B\u673A\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u7AD9\u70B9\uFF0C\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2Aserver\u8282\u70B9\u642D\u5EFA\u591A\u4E2A\u7AD9\u70B9</span>
<span class="token comment">    #\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u8FDB\u6765\u786E\u5B9A\u4F7F\u7528\u54EA\u4E2Aserver\u7531server_name\u786E\u5B9A</span>
<span class="token key attr-name">    server</span> <span class="token value attr-value">{</span>
<span class="token comment">        #\u7AD9\u70B9\u76D1\u542C\u7AEF\u53E3</span>
<span class="token key attr-name">        listen</span> <span class="token value attr-value">      8800;</span>
<span class="token comment">        #\u7AD9\u70B9\u8BBF\u95EE\u57DF\u540D</span>
<span class="token key attr-name">        server_name</span> <span class="token value attr-value"> localhost;</span>
        
<span class="token comment">        #\u7F16\u7801\u683C\u5F0F\uFF0C\u907F\u514Durl\u53C2\u6570\u4E71\u7801</span>
<span class="token key attr-name">        charset</span> <span class="token value attr-value">utf-8;</span>

<span class="token comment">        #access_log  logs/host.access.log  main;</span>

<span class="token comment">        #location\u7528\u6765\u5339\u914D\u540C\u4E00\u57DF\u540D\u4E0B\u591A\u4E2AURI\u7684\u8BBF\u95EE\u89C4\u5219</span>
<span class="token comment">        #\u6BD4\u5982\u52A8\u6001\u8D44\u6E90\u5982\u4F55\u8DF3\u8F6C\uFF0C\u9759\u6001\u8D44\u6E90\u5982\u4F55\u8DF3\u8F6C\u7B49</span>
<span class="token comment">        #location\u540E\u9762\u8DDF\u7740\u7684/\u4EE3\u8868\u5339\u914D\u89C4\u5219</span>
<span class="token key attr-name">        location</span> <span class="token value attr-value">/ {</span>
<span class="token comment">            #\u7AD9\u70B9\u6839\u76EE\u5F55\uFF0C\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7EDD\u5BF9\u8DEF\u5F84</span>
<span class="token key attr-name">            root</span> <span class="token value attr-value">  html;</span>
<span class="token comment">            #\u9ED8\u8BA4\u4E3B\u9875</span>
<span class="token key attr-name">            index</span> <span class="token value attr-value"> index.html index.htm;</span>
            
<span class="token comment">            #\u8F6C\u53D1\u540E\u7AEF\u7AD9\u70B9\u5730\u5740\uFF0C\u4E00\u822C\u7528\u4E8E\u505A\u8F6F\u8D1F\u8F7D\uFF0C\u8F6E\u8BE2\u540E\u7AEF\u670D\u52A1\u5668</span>
<span class="token comment">            #proxy_pass http://11.11.11.11:8080;</span>

<span class="token comment">            #\u62D2\u7EDD\u8BF7\u6C42\uFF0C\u8FD4\u56DE403\uFF0C\u4E00\u822C\u7528\u4E8E\u67D0\u4E9B\u76EE\u5F55\u7981\u6B62\u8BBF\u95EE</span>
<span class="token comment">            #deny all;</span>
            
<span class="token comment">            #\u5141\u8BB8\u8BF7\u6C42</span>
<span class="token comment">            #allow all;</span>
            
<span class="token key attr-name">            add_header</span> <span class="token value attr-value">&#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;</span>
<span class="token key attr-name">            add_header</span> <span class="token value attr-value">&#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;</span>
<span class="token key attr-name">            add_header</span> <span class="token value attr-value">&#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS&#39;;</span>
<span class="token key attr-name">            add_header</span> <span class="token value attr-value">&#39;Access-Control-Allow-Headers&#39; &#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type&#39;;</span>
<span class="token comment">            #\u91CD\u65B0\u5B9A\u4E49\u6216\u8005\u6DFB\u52A0\u53D1\u5F80\u540E\u7AEF\u670D\u52A1\u5668\u7684\u8BF7\u6C42\u5934</span>
<span class="token comment">            #\u7ED9\u8BF7\u6C42\u5934\u4E2D\u6DFB\u52A0\u5BA2\u6237\u8BF7\u6C42\u4E3B\u673A\u540D</span>
<span class="token key attr-name">            proxy_set_header</span> <span class="token value attr-value">Host $host;</span>
<span class="token comment">            #\u7ED9\u8BF7\u6C42\u5934\u4E2D\u6DFB\u52A0\u5BA2\u6237\u7AEFIP</span>
<span class="token key attr-name">            proxy_set_header</span> <span class="token value attr-value">X-Real-IP $remote_addr;</span>
<span class="token comment">            #\u5C06$remote_addr\u53D8\u91CF\u503C\u6DFB\u52A0\u5728\u5BA2\u6237\u7AEF\u201CX-Forwarded-For\u201D\u8BF7\u6C42\u5934\u7684\u540E\u9762\uFF0C\u5E76\u4EE5\u9017\u53F7\u5206\u9694\u3002 \u5982\u679C\u5BA2\u6237\u7AEF\u8BF7\u6C42\u672A\u643A\u5E26\u201CX-Forwarded-For\u201D\u8BF7\u6C42\u5934\uFF0C$proxy_add_x_forwarded_for\u53D8\u91CF\u503C\u5C06\u4E0E$remote_addr\u53D8\u91CF\u76F8\u540C  </span>
<span class="token key attr-name">            proxy_set_header</span> <span class="token value attr-value">X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="token comment">            #\u7ED9\u8BF7\u6C42\u5934\u4E2D\u6DFB\u52A0\u5BA2\u6237\u7AEF\u7684Cookie</span>
<span class="token key attr-name">            proxy_set_header</span> <span class="token value attr-value">Cookie $http_cookie;</span>
<span class="token comment">            #\u5C06\u4F7F\u7528\u4EE3\u7406\u670D\u52A1\u5668\u7684\u4E3B\u57DF\u540D\u548C\u7AEF\u53E3\u53F7\u6765\u66FF\u6362\u3002\u5982\u679C\u7AEF\u53E3\u662F80\uFF0C\u53EF\u4EE5\u4E0D\u52A0\u3002</span>
<span class="token key attr-name">            proxy_redirect</span> <span class="token value attr-value">off;</span>
            
<span class="token comment">            #\u6D4F\u89C8\u5668\u5BF9 Cookie \u6709\u5F88\u591A\u9650\u5236\uFF0C\u5982\u679C Cookie \u7684 Domain \u90E8\u5206\u4E0E\u5F53\u524D\u9875\u9762\u7684 Domain \u4E0D\u5339\u914D\u5C31\u65E0\u6CD5\u5199\u5165\u3002</span>
<span class="token comment">            #\u6240\u4EE5\u5982\u679C\u8BF7\u6C42 A \u57DF\u540D\uFF0C\u670D\u52A1\u5668 proxy_pass \u5230 B \u57DF\u540D\uFF0C\u7136\u540E B \u670D\u52A1\u5668\u8F93\u51FA Domian=B \u7684 Cookie\uFF0C</span>
<span class="token comment">            #\u524D\u7AEF\u7684\u9875\u9762\u4F9D\u7136\u505C\u7559\u5728 A \u57DF\u540D\u4E0A\uFF0C\u4E8E\u662F\u6D4F\u89C8\u5668\u5C31\u65E0\u6CD5\u5C06 Cookie \u5199\u5165\u3002</span>
            
\u3000\u3000         #\u4E0D\u4EC5\u662F\u57DF\u540D\uFF0C\u6D4F\u89C8\u5668\u5BF9 Path \u4E5F\u6709\u9650\u5236\u3002\u6211\u4EEC\u7ECF\u5E38\u4F1A proxy_pass \u5230\u76EE\u6807\u670D\u52A1\u5668\u7684\u67D0\u4E2A Path \u4E0B\uFF0C
<span class="token comment">            #\u4E0D\u628A\u8FD9\u4E2A Path \u66B4\u9732\u7ED9\u6D4F\u89C8\u5668\u3002\u8FD9\u65F6\u5019\u5982\u679C\u76EE\u6807\u670D\u52A1\u5668\u7684 Cookie \u5199\u6B7B\u4E86 Path \u4E5F\u4F1A\u51FA\u73B0 Cookie \u65E0\u6CD5\u5199\u5165\u7684\u95EE\u9898\u3002</span>
            
<span class="token comment">            #\u8BBE\u7F6E\u201CSet-Cookie\u201D\u54CD\u5E94\u5934\u4E2D\u7684domain\u5C5E\u6027\u7684\u66FF\u6362\u6587\u672C\uFF0C\u5176\u503C\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u3001\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6A21\u5F0F\u6216\u4E00\u4E2A\u5F15\u7528\u7684\u53D8\u91CF</span>
<span class="token comment">            #\u8F6C\u53D1\u540E\u7AEF\u670D\u52A1\u5668\u5982\u679C\u9700\u8981Cookie\u5219\u9700\u8981\u5C06cookie domain\u4E5F\u8FDB\u884C\u8F6C\u6362\uFF0C\u5426\u5219\u524D\u7AEF\u57DF\u540D\u4E0E\u540E\u7AEF\u57DF\u540D\u4E0D\u4E00\u81F4cookie\u5C31\u4F1A\u65E0\u6CD5\u5B58\u53D6</span>
\u3000\u3000\u3000\u3000\u3000\u3000  #\u914D\u7F6E\u89C4\u5219\uFF1Aproxy_cookie_domain serverDomain(\u540E\u7AEF\u670D\u52A1\u5668\u57DF) nginxDomain(nginx\u670D\u52A1\u5668\u57DF)
<span class="token key attr-name">            proxy_cookie_domain</span> <span class="token value attr-value">localhost .testcaigou800.com;</span>
            
<span class="token comment">            #\u53D6\u6D88\u5F53\u524D\u914D\u7F6E\u7EA7\u522B\u7684\u6240\u6709proxy_cookie_domain\u6307\u4EE4</span>
<span class="token comment">            #proxy_cookie_domain off;</span>
<span class="token comment">            #\u4E0E\u540E\u7AEF\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\u3002\u4E00\u822C\u4E0D\u53EF\u80FD\u5927\u4E8E75\u79D2\uFF1B</span>
<span class="token key attr-name">            proxy_connect_timeout</span> <span class="token value attr-value">30;</span>
        }

<span class="token comment">        #error_page  404              /404.html;</span>

<span class="token comment">        # redirect server error pages to the static page /50x.html</span>
<span class="token comment">        #</span>
<span class="token key attr-name">        error_page</span> <span class="token value attr-value">  500 502 503 504  /50x.html;</span>
<span class="token key attr-name">        location</span> <span class="token punctuation">=</span> <span class="token value attr-value">/50x.html {</span>
<span class="token key attr-name">            root</span> <span class="token value attr-value">  html;</span>
        }

    }
    
\u3000\u3000#\u5F53\u9700\u8981\u5BF9\u540C\u4E00\u7AEF\u53E3\u76D1\u542C\u591A\u4E2A\u57DF\u540D\u65F6\uFF0C\u4F7F\u7528\u5982\u4E0B\u914D\u7F6E\uFF0C\u7AEF\u53E3\u76F8\u540C\u57DF\u540D\u4E0D\u540C\uFF0Cserver_name\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u8FDB\u884C\u914D\u7F6E
\u3000\u3000#\u4F46\u8981\u6CE8\u610Fserver\u8FC7\u591A\u9700\u8981\u624B\u52A8\u6269\u5927server_names_hash_bucket_size\u7F13\u5B58\u533A\u5927\u5C0F
\u3000\u3000server {
\u3000\u3000\u3000\u3000listen 80;
\u3000\u3000\u3000\u3000server_name www.abc.com;
\u3000\u3000\u3000\u3000charset utf-8;
\u3000\u3000\u3000\u3000location / {
\u3000\u3000\u3000\u3000\u3000\u3000proxy_pass http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>10001;
\u3000\u3000\u3000\u3000}
\u3000\u3000}
\u3000\u3000server {
\u3000\u3000\u3000\u3000listen 80;
\u3000\u3000\u3000\u3000server_name aaa.abc.com;
\u3000\u3000\u3000\u3000charset utf-8;
\u3000\u3000\u3000\u3000location / {
\u3000\u3000\u3000\u3000\u3000\u3000proxy_pass http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>20002;
\u3000\u3000\u3000\u3000}
\u3000\u3000}
<span class="token comment">    #\u914D\u7F6E https   \u8DE8\u57DF\u89E3\u51B3</span>
<span class="token key attr-name">    server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        listen</span> <span class="token value attr-value">      86 ssl;</span>
<span class="token key attr-name">        server_name</span> <span class="token value attr-value"> xxx.xxx.com;</span>
		
<span class="token key attr-name">		ssl_certificate</span> <span class="token value attr-value">E://soft//nginx-1.20.1//key_pem//7585805__hzsgis.com.pem;</span>
<span class="token key attr-name">		ssl_certificate_key</span> <span class="token value attr-value">E://soft//nginx-1.20.1//key_pem//7585805__hzsgis.com.key;</span>
<span class="token key attr-name">		ssl_session_cache</span> <span class="token value attr-value">shared:SSL:1m;</span>
<span class="token key attr-name">		ssl_session_timeout</span> <span class="token value attr-value">20m;</span>
<span class="token key attr-name">		ssl_ciphers</span> <span class="token value attr-value">ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!aNULL:!MD5:!ADH:!RC4;</span>
<span class="token key attr-name">		ssl_protocols</span> <span class="token value attr-value">TLSv1 TLSv1.1 TLSv1.2;</span>
<span class="token key attr-name">		ssl_prefer_server_ciphers</span> <span class="token value attr-value">on;</span>
<span class="token comment">        #charset koi8-r;</span>

<span class="token comment">        #access_log  logs/host.access.log  main;</span>
<span class="token key attr-name">		root</span> <span class="token value attr-value">     E:\\lxl\\Project\\ghyzt\\dist;</span>
	

<span class="token key attr-name">		location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">            try_files</span> <span class="token value attr-value">$uri $uri/ @router;</span>
<span class="token key attr-name">            index</span> <span class="token value attr-value"> index.html index.htm;</span>
<span class="token key attr-name">			client_max_body_size</span> <span class="token value attr-value">600m;</span>
        }
		
<span class="token key attr-name">		location</span> <span class="token value attr-value">@router {</span>
<span class="token key attr-name">		     rewrite</span> <span class="token value attr-value">^.*$ /index.html last;</span>
		}
		
<span class="token key attr-name">        location</span> <span class="token value attr-value">^~/prod-api/ {</span>
<span class="token key attr-name">		rewrite</span> <span class="token value attr-value"> ^/prod-api/(.*)$ /$1 break;</span>
<span class="token key attr-name">		add_header</span> <span class="token value attr-value">Cache-Control &quot;no-catche,no-store&quot;;</span>
<span class="token key attr-name">		if</span> <span class="token value attr-value">($request_method = &#39;OPTIONS&#39;) {</span>
<span class="token key attr-name">            	add_header</span> <span class="token value attr-value">&#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;</span>
<span class="token key attr-name">            	add_header</span> <span class="token value attr-value">&#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;</span>
<span class="token key attr-name">            	add_header</span> <span class="token value attr-value">&#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, PATCH, DELETE, PUT, OPTIONS&#39;;</span>
<span class="token key attr-name">             	add_header</span> <span class="token value attr-value">&#39;Access-Control-Allow-Headers&#39; &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,  Access-Control-Expose-Headers, Token, Authorization&#39;;</span>
<span class="token key attr-name">            	add_header</span> <span class="token value attr-value">&#39;Access-Control-Max-Age&#39; 1728000;</span>
<span class="token key attr-name">            	add_header</span> <span class="token value attr-value">&#39;Content-Type&#39; &#39;text/plain charset=UTF-8&#39;;</span>
<span class="token key attr-name">            	add_header</span> <span class="token value attr-value">&#39;Content-Length&#39; 0;</span>
<span class="token key attr-name">            	return</span> <span class="token value attr-value">204;</span>
        	}
<span class="token key attr-name">        	add_header</span> <span class="token value attr-value">&#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;</span>
<span class="token key attr-name">            proxy_pass</span> <span class="token value attr-value">http://172.0.0.1:8086;</span>
<span class="token key attr-name">            proxy_buffering</span> <span class="token value attr-value">off;</span>
<span class="token key attr-name">            proxy_request_buffering</span> <span class="token value attr-value">off;</span>
        }
		

<span class="token key attr-name">		client_max_body_size</span> <span class="token value attr-value">600m;</span>

<span class="token comment">        #location / {</span>
<span class="token comment">            #root   html;</span>
<span class="token comment">            #index  index.html index.htm;</span>
<span class="token comment">        #}</span>

<span class="token comment">        #error_page  404              /404.html;</span>

<span class="token comment">        # redirect server error pages to the static page /50x.html</span>
<span class="token comment">        #</span>
<span class="token key attr-name">        error_page</span> <span class="token value attr-value">  500 502 503 504  /50x.html;</span>
<span class="token key attr-name">        location</span> <span class="token punctuation">=</span> <span class="token value attr-value">/50x.html {</span>
<span class="token key attr-name">            root</span> <span class="token value attr-value">  html;</span>
        }

<span class="token comment">        # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
<span class="token comment">        #</span>
<span class="token comment">        #location ~ \\.php$ {</span>
<span class="token comment">        #    proxy_pass   http://127.0.0.1;</span>
<span class="token comment">        #}</span>

<span class="token comment">        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
<span class="token comment">        #</span>
<span class="token comment">        #location ~ \\.php$ {</span>
<span class="token comment">        #    root           html;</span>
<span class="token comment">        #    fastcgi_pass   127.0.0.1:9000;</span>
<span class="token comment">        #    fastcgi_index  index.php;</span>
<span class="token comment">        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
<span class="token comment">        #    include        fastcgi_params;</span>
<span class="token comment">        #}</span>

<span class="token comment">        # deny access to .htaccess files, if Apache&#39;s document root</span>
<span class="token comment">        # concurs with nginx&#39;s one</span>
<span class="token comment">        #</span>
<span class="token comment">        #location ~ /\\.ht {</span>
<span class="token comment">        #    deny  all;</span>
<span class="token comment">        #}</span>
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h1><h2 id="_1-\u6B63\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_1-\u6B63\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> 1\uFF09\u6B63\u53CD\u5411\u4EE3\u7406</h2><pre><code>   \u6B63\u5411\u4EE3\u7406\uFF1A\u7279\u5B9A\u60C5\u51B5\u4E0B\uFF0C\u4EE3\u7406\u7528\u6237\u8BBF\u95EE\u670D\u52A1\u5668\uFF0C\u9700\u8981\u7528\u6237\u624B\u52A8\u7684\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u7684ip\u548C\u7AEF\u53E3\u53F7\u3002

   \u53CD\u5411\u4EE3\u7406\uFF1A\u662F\u7528\u6765\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4EE3\u7406\u7528\u6237\u8981\u8BBF\u95EE\u7684\u76EE\u6807\u670D\u52A1\u5668\u3002\u4EE3\u7406\u670D\u52A1\u5668\u63A5\u53D7\u8BF7\u6C42\uFF0C\u7136\u540E\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5185\u90E8\u7F51\u7EDC\u7684\u670D\u52A1\u5668(\u670D\u52A1\u96C6\u7FA4\u6A21\u5F0F)\uFF0C\u5E76\u5C06\u4ECE\u670D\u52A1\u5668\u4E0A\u5F97\u5230\u7684\u7ED3\u679C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u6B64\u65F6\u4EE3\u7406\u670D\u52A1\u5668\u5BF9\u5916\u5C31\u8868\u73B0\u4E3A\u4E00\u4E2A\u670D\u52A1\u5668\u3002                            

    Nginx\u5728\u53CD\u5411\u4EE3\u7406\u4E0A\uFF0C\u63D0\u4F9B\u7075\u6D3B\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u7684\u6B63\u5219\u91C7\u7528\u4E0D\u540C\u7684\u8F6C\u53D1\u7B56\u7565\uFF0C\u5982\u56FE\u8BBE\u7F6E\u597D\u540E\u4E0D\u540C\u7684\u8BF7\u6C42\u5C31\u53EF\u4EE5\u8D70\u4E0D\u540C\u7684\u670D\u52A1\u5668\u3002
</code></pre><h2 id="_2-\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_2-\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 2\uFF09\u8D1F\u8F7D\u5747\u8861</h2><pre><code>   \u8D1F\u8F7D\u5747\u8861\uFF1A\u591A\u5728\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u9700\u8981\u4F7F\u7528\u3002\u5176\u539F\u7406\u5C31\u662F\u5C06\u6570\u636E\u6D41\u91CF\u5206\u644A\u5230\u591A\u4E2A\u670D\u52A1\u5668\u6267\u884C\uFF0C\u51CF\u8F7B\u6BCF\u53F0\u670D\u52A1\u5668\u7684\u538B\u529B\uFF0C\u591A\u53F0\u670D\u52A1\u5668(\u96C6\u7FA4)\u5171\u540C\u5B8C\u6210\u5DE5\u4F5C\u4EFB\u52A1\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4E86\u6570\u636E\u7684\u541E\u5410\u91CF\u3002

    Nginx\u53EF\u4F7F\u7528\u7684\u8D1F\u8F7D\u5747\u8861\u7B56\u7565\u6709\uFF1A\u8F6E\u8BE2\uFF08\u9ED8\u8BA4\uFF09\u3001\u6743\u91CD\u3001ip_hash\u3001url_hash(\u7B2C\u4E09\u65B9)\u3001fair(\u7B2C\u4E09\u65B9)\u3002
</code></pre><h2 id="_3-\u52A8\u9759\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#_3-\u52A8\u9759\u5206\u79BB" aria-hidden="true">#</a> 3\uFF09\u52A8\u9759\u5206\u79BB</h2><pre><code>   \u5E38\u7528\u4E8E\u524D\u540E\u7AEF\u5206\u79BB\uFF0CNginx\u63D0\u4F9B\u7684\u52A8\u9759\u5206\u79BB\u662F\u6307\u628A\u52A8\u6001\u8BF7\u6C42\u548C\u9759\u6001\u8BF7\u6C42\u5206\u79BB\u5F00\uFF0C\u5408\u9002\u7684\u670D\u52A1\u5668\u5904\u7406\u76F8\u5E94\u7684\u8BF7\u6C42\uFF0C\u4F7F\u6574\u4E2A\u670D\u52A1\u5668\u7CFB\u7EDF\u7684\u6027\u80FD\u3001\u6548\u7387\u66F4\u9AD8\u3002

   Nginx\u53EF\u4EE5\u6839\u636E\u914D\u7F6E\u5BF9\u4E0D\u540C\u7684\u8BF7\u6C42\u505A\u4E0D\u540C\u8F6C\u53D1\uFF0C\u8FD9\u662F\u52A8\u6001\u5206\u79BB\u7684\u57FA\u7840\u3002\u9759\u6001\u8BF7\u6C42\u5BF9\u5E94\u7684\u9759\u6001\u8D44\u6E90\u53EF\u4EE5\u76F4\u63A5\u653E\u5728Nginx\u4E0A\u505A\u7F13\u51B2\uFF0C\u66F4\u597D\u7684\u505A\u6CD5\u662F\u653E\u5728\u76F8\u5E94\u7684\u7F13\u51B2\u670D\u52A1\u5668\u4E0A\u3002\u52A8\u6001\u8BF7\u6C42\u7531\u76F8\u5E94\u7684\u540E\u7AEF\u670D\u52A1\u5668\u5904\u7406\u3002
</code></pre>`,13);function _(h,y){const a=l("ExternalLinkIcon");return t(),i("div",null,[d,n("h1",v,[p,m,n("a",u,[k,c(a)])]),b])}var f=e(o,[["render",_],["__file","Nginx.html.vue"]]);export{f as default};
