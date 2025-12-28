// Giscus комментарии
function loadComments() {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', '{{ site.giscus.repo }}');
    script.setAttribute('data-repo-id', '{{ site.giscus.repo-id }}');
    script.setAttribute('data-category', '{{ site.giscus.category }}');
    script.setAttribute('data-category-id', '{{ site.giscus.category-id }}');
    script.setAttribute('data-mapping', '{{ site.giscus.mapping }}');
    script.setAttribute('data-reactions-enabled', '{{ site.giscus.reactions-enabled }}');
    script.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    
    document.getElementById('giscus-comments').appendChild(script);
}

// Загружаем комментарии когда страница загружена
document.addEventListener('DOMContentLoaded', loadComments);
