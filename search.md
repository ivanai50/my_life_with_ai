---
layout: page
title: Поиск по блогу
permalink: /search/
---

<div class="search-page">
    <input type="text" id="search-input" placeholder="Введите фразу для поиска...">
    <button id="search-button"><i class="fas fa-search"></i> Искать</button>
    
    <div id="search-results"></div>
    
    <!-- Для статического поиска создаем JSON файл -->
    <script src="{{ '/assets/js/search.js' | relative_url }}"></script>
</div>
