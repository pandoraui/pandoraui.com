// Generated by CoffeeScript 1.8.0
(function() {
  var ctrlKey, navKey;

  ctrlKey = $.isMac() ? 'cmd' : 'ctrl';

  navKey = $.isWindows() ? 'alt' : ctrlKey;

  app.templates.helpPage = '<div class="_toc">\n  <h3 class="_toc-title">Table of Contents</h3>\n  <ul class="_toc-list">\n    <li><a href="#search">Search</a>\n    <li><a href="#shortcuts">Keyboard Shortcuts</a>\n  </ul>\n</div>\n\n<h2 class="_lined-heading" id="search">Search</h2>\n<p>\n  The search is case-insensitive, ignores spaces, and supports fuzzy matching (for queries longer than two characters).\n  For example, searching <code class="_label">bgcp</code> brings up <code class="_label">background-clip</code>.\n<dl>\n  <dt id="doc_search">Searching a single documentation\n  <dd>\n    You can scope the search to a single documentation by typing its name (or an abbreviation),\n    and pressing <code class="_label">Tab</code> (<code class="_label">Space</code> on mobile devices).\n    For example, to search the JavaScript documentation, enter <code class="_label">javascript</code>\n    or <code class="_label">js</code>, then <code class="_label">Tab</code>.<br>\n    To clear the current scope, empty the search field and hit <code class="_label">Backspace</code>.\n  <dt id="url_search">Prefilling the search field\n  <dd>\n    The search field can be prefilled from the URL by visiting <a href="/#q=keyword" target="_top">devdocs.io/#q=keyword</a>.\n    Characters after <code class="_label">#q=</code> will be used as search string.<br>\n    To search a single documentation, add its name and a space before the keyword:\n    <a href="/#q=js%20date" target="_top">devdocs.io/#q=js date</a>.\n  <dt id="browser_search">Searching using the address bar\n  <dd>\n    DevDocs supports OpenSearch, meaning that it can easily be installed as a search engine on most web browsers.\n    <ul>\n      <li>On Chrome, the setup is done automatically. Simply press <code class="_label">Tab</code> when devdocs.io is autocompleted\n          in the omnibox (to set a custom keyword, click <em>Manage search engines\u2026</em> in Chrome\'s settings).\n      <li>On Firefox, open the search engine list (icon in the search bar) and select <em>Add "DevDocs Search"</em>.\n          DevDocs is now available in the search bar. You can also search from the location bar by following\n          <a href="https://support.mozilla.org/en-US/kb/how-search-from-address-bar">these instructions</a>.\n</dl>\n\n<h2 class="_lined-heading" id="shortcuts">Keyboard Shortcuts</h2>\n<h3 class="_shortcuts-title">Selection</h3>\n<dl class="_shortcuts-dl">\n  <dt class="_shortcuts-dt">\n    <code class="kbd">&darr;</code>\n    <code class="kbd">&uarr;</code>\n  <dd class="_shortcuts-dd">Move selection\n  <dt class="_shortcuts-dt">\n    <code class="kbd">&rarr;</code>\n    <code class="kbd">&larr;</code>\n  <dd class="_shortcuts-dd">Show/hide sub-list\n  <dt class="_shortcuts-dt">\n    <code class="kbd">enter</code>\n  <dd class="_shortcuts-dd">Open selection\n  <dt class="_shortcuts-dt">\n    <code class="kbd">' + ctrlKey + ' + enter</code>\n  <dd class="_shortcuts-dd">Open selection in a new tab\n</dl>\n<h3 class="_shortcuts-title">Navigation</h3>\n<dl class="_shortcuts-dl">\n  <dt class="_shortcuts-dt">\n    <code class="kbd">' + navKey + ' + &larr;</code>\n    <code class="kbd">' + navKey + ' + &rarr;</code>\n  <dd class="_shortcuts-dd">Go back/forward\n  <dt class="_shortcuts-dt">\n    <code class="kbd">alt + &darr;</code>\n    <code class="kbd">alt + &uarr;</code>\n  <dd class="_shortcuts-dd">Scroll step by step\n  <dt class="_shortcuts-dt">\n    <code class="kbd">space</code>\n    <code class="kbd">shift + space</code>\n  <dd class="_shortcuts-dd">Scroll screen by screen\n  <dt class="_shortcuts-dt">\n    <code class="kbd">' + ctrlKey + ' + &uarr;</code>\n    <code class="kbd">' + ctrlKey + ' + &darr;</code>\n  <dd class="_shortcuts-dd">Scroll to the top/bottom\n</dl>\n<h3 class="_shortcuts-title">Misc</h3>\n<dl class="_shortcuts-dl">\n  <dt class="_shortcuts-dt">\n    <code class="kbd">alt + f</code>\n  <dd class="_shortcuts-dd">Focus first link in the content area<br>(press tab to focus the other links)\n  <dt class="_shortcuts-dt">\n    <code class="kbd">alt + r</code>\n  <dd class="_shortcuts-dd">Reveal current page in sidebar\n  <dt class="_shortcuts-dt">\n    <code class="kbd">alt + g</code>\n  <dd class="_shortcuts-dd">Search on Google\n  <dt class="_shortcuts-dt">\n    <code class="kbd">escape</code>\n  <dd class="_shortcuts-dd">Reset<br>(press twice in single doc mode)\n  <dt class="_shortcuts-dt">\n    <code class="kbd">?</code>\n  <dd class="_shortcuts-dd">Show this page\n</dl>\n<p class="_note">\n  <strong>Tip:</strong> If the cursor is no longer in the search field, press backspace or\n  continue to type and it will refocus the search field and start showing new results. ';

}).call(this);
