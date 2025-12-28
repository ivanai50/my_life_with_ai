---
layout: page
title: Поиск по блогу
permalink: /search/
---

<div class="search-container">
    <div class="search-box">
        <i class="fas fa-search search-icon"></i>
        <input type="text" id="search-input" placeholder="Введите фразу для поиска...">
        <button id="search-button">Искать</button>
    </div>
    
    <div id="search-results">
        <!-- Результаты поиска будут здесь -->
        <p class="no-results">Введите запрос для поиска</p>
    </div>
</div>

<script>
// Создаем JSON для поиска
const searchData = [
    {% for post in site.posts %}
    {
        title: {{ post.title | jsonify }},
        url: {{ post.url | jsonify }},
        date: "{{ post.date | date: "%d.%m.%Y" }}",
        excerpt: {{ post.excerpt | strip_html | truncatewords: 50 | jsonify }},
        content: {{ post.content | strip_html | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
];
</script>
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
