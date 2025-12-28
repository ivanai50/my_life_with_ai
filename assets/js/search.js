document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    function performSearch(query) {
        if (!query.trim()) {
            searchResults.innerHTML = '<p class="no-results">Введите запрос для поиска</p>';
            return;
        }
        
        const terms = query.toLowerCase().split(' ').filter(term => term.length > 2);
        if (terms.length === 0) {
            searchResults.innerHTML = '<p class="no-results">Введите более 2 символов для поиска</p>';
            return;
        }
        
        const results = searchData.filter(post => {
            const content = (post.title + ' ' + post.excerpt + ' ' + post.content).toLowerCase();
            return terms.every(term => content.includes(term));
        });
        
        displayResults(results, terms);
    }
    
    function displayResults(results, terms) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <p class="no-results">
                    <i class="fas fa-search"></i><br>
                    По запросу "${searchInput.value}" ничего не найдено
                </p>`;
            return;
        }
        
        let html = `
            <div class="search-stats">
                <p>Найдено записей: ${results.length}</p>
            </div>
        `;
        
        results.forEach(post => {
            // Подсветка совпадений в заголовке
            let titleHighlighted = post.title;
            let excerptHighlighted = post.excerpt;
            
            terms.forEach(term => {
                const regex = new RegExp(`(${term})`, 'gi');
                titleHighlighted = titleHighlighted.replace(regex, '<span class="highlight">$1</span>');
                excerptHighlighted = excerptHighlighted.replace(regex, '<span class="highlight">$1</span>');
            });
            
            html += `
                <div class="search-result">
                    <h3><a href="${post.url}">${titleHighlighted}</a></h3>
                    <div class="search-meta">
                        <time datetime="${post.date}">${post.date}</time>
                    </div>
                    <div class="search-snippet">
                        ${excerptHighlighted}
                    </div>
                </div>
            `;
        });
        
        searchResults.innerHTML = html;
    }
    
    // Обработчики событий
    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    // Автопоиск при вводе (с задержкой)
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(searchInput.value);
        }, 300);
    });
});
