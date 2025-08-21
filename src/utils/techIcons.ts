export const getTechIcon = (iconName: string) => {
  const icons: Record<string, string> = {
    // Frontend
    react: '/images/icons/react.svg',
    nextjs: '/images/icons/nextjs.svg',
    javascript: '/images/icons/javascript.svg',
    tailwind: '/images/icons/tailwindcss.svg',
    html: '/images/icons/html.svg',
    css: '/images/icons/css.svg',
    typescript: '/images/icons/typescript.svg',

    // Backend
    php: '/images/icons/php.svg',
    laravel: '/images/icons/laravel.svg',
    c: '/images/icons/c.svg',
    cpp: '/images/icons/c++.svg',
    java: '/images/icons/java.svg',
    python: '/images/icons/python.svg',

    // Database
    postgresql: '/images/icons/postgres.svg',
    mysql: '/images/icons/mysql.svg',
    redis: '/images/icons/redis.svg',

    // DevOps
    docker: '/images/icons/docker.svg',
    git: '/images/icons/git.svg',
    cicd: '/images/icons/ci-cd.jpg',
    linux: '/images/icons/linux.svg',

    // Integrations
    api: '/images/icons/apirest.svg',
    blade: '/images/icons/blade.svg',
    filament: '/images/icons/filament.svg',

    // Testing
    phpunit: '/images/icons/phpunit.svg',
    swagger: '/images/icons/swagger.svg',

    // Management
    notion: '/images/icons/notion.svg',
    jira: '/images/icons/jira.svg',
    vscode: '/images/icons/vscode.svg',
  };

  return icons[iconName] || '/images/icons/vscode.svg';
};
