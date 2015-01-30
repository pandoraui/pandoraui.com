app.config = {
  default_docs: ['html', 'css', 'javascript', 'framework', 'lib', 'books', 'tutorial', 'wheel', 'panning'],
  docs_host: App.docs_host,
  env: App.environment,
  history_cache_size: 10,
  index_path: App.docs_prefix,
  max_results: 50,
  production_host: '',
  search_param: 'q',
  sentry_dsn: App.sentry_dsn,
  version: ''//Time.now.to_i
};
