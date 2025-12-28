// Giscus комментарии
document.addEventListener('DOMContentLoaded', function() {
    const commentsContainer = document.getElementById('giscus-comments');
    if (!commentsContainer) return;
    
    // Проверяем, не загружен ли уже Giscus
    if (document.querySelector('.giscus')) return;
    
    // Настройки из конфига
    const config = {
        repo: '{{ site.giscus.repo }}',
        repoId: '{{ site.giscus.repo-id }}',
        category: '{{ site.giscus.category }}',
        categoryId: '{{ site.giscus.category-id }}',
        mapping: '{{ site.giscus.mapping }}',
        reactionsEnabled: '{{ site.giscus.reactions-enabled }}',
        emitMetadata: '{{ site.giscus.emit-metadata }}',
        inputPosition: '{{ site.giscus.input-position }}',
        theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
        lang: '{{ site.giscus.lang }}'
    };
    
    // Создаем iframe для Giscus
    const giscusFrame = document.createElement('iframe');
    giscusFrame.className = 'giscus-frame';
    giscusFrame.src = `https://giscus.app/client.html?${new URLSearchParams(config).toString()}`;
    giscusFrame.width = '100%';
    giscusFrame.frameBorder = '0';
    giscusFrame.scrolling = 'no';
    
    commentsContainer.appendChild(giscusFrame);
    
    // Обработка сообщений от Giscus
    window.addEventListener('message', function(event) {
        if (event.origin !== 'https://giscus.app') return;
        
        const giscusFrame = document.querySelector('.giscus-frame');
        if (!giscusFrame) return;
        
        const { data } = event;
        if (typeof data !== 'object' || data === null) return;
        
        if (data.type === 'resize' && data.height) {
            giscusFrame.style.height = `${data.height}px`;
        }
    });
});
