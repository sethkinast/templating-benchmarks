(function(){dust.register("search-results",body_0);function body_0(chk,ctx){return chk.write("<div class=\"search-results-container\"><div class=\"searching\" id=\"searching\"><div class=\"wait-indicator-icon\"></div> Searching...</div><div id=\"resultsContainer\"><div class=\"hd\"><span class=\"count\"><span id=\"count\">").reference(ctx.get(["totalCount"], false),ctx,"h").write("</span> results</span><div class=\"view-modifiers\"><div class=\"view-select\">View: <div class=\"view-icon view-icon-selected\" id=\"viewIconGallery\"><i class=\"icon-th\"></i></div><div class=\"view-icon\" id=\"viewIconList\"><i class=\"icon-th-list\"></i></div></div></div></div><div id=\"resultsTarget\"><div class=\"search-results view-").reference(ctx.get(["view"], false),ctx,"h").write("\">").section(ctx.get(["searchRecords"], false),ctx,{"block":body_1},{}).write("</div></div></div></div>");}function body_1(chk,ctx){return chk.write("<div class=\"search-item\"><div class=\"search-item-container drop-shadow\"><div class=\"img-container\"><img src=\"").reference(ctx.get(["imgUrl"], false),ctx,"h").write("\"></div><h4 class=\"title\"><a href=\"").reference(ctx.get(["viewItemUrl"], false),ctx,"h").write("\">").reference(ctx.get(["title"], false),ctx,"h").write("</a></h4>").reference(ctx.get(["description"], false),ctx,"h").exists(ctx.get(["featured"], false),ctx,{"block":body_2},{}).exists(ctx.get(["sizes"], false),ctx,{"block":body_3},{}).write("</div></div>");}function body_2(chk,ctx){return chk.write("<div>Featured!</div>");}function body_3(chk,ctx){return chk.write("<div>Sizes available:<ul>").section(ctx.get(["sizes"], false),ctx,{"block":body_4},{}).write("</ul></div>");}function body_4(chk,ctx){return chk.write("<li>").reference(ctx.getPath(true, []),ctx,"h").write("</li>");}return body_0;})();