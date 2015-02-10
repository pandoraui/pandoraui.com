app.config = {
    default_docs: ['html', 'css', 'javascript', 'algorithm', 'program', 'books', 'tutorial', 'wheel', 'panning'],
    //default_docs: ['html', 'css', 'javascript', 'algorithm', 'program', 'framework', 'lib', 'books', 'tutorial', 'wheel', 'panning'],
    site_title: 'Developer',
    docs_host: App.docs_host, //'localhost:3000', 
    env: App.environment,
    history_cache_size: 15,
    index_path: App.docs_prefix,
    max_results: 50,
    production_host: '',
    search_param: 'q',
    sentry_dsn: App.sentry_dsn,
    version: '' //Time.now.to_i
};
