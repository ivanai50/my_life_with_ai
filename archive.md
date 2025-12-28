---
layout: page
title: Архив постов
permalink: /archive/
---

<div class="archive">
    <h2>Календарь постов</h2>
    
    <!-- По годам и месяцам -->
    {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    
    {% for year in posts_by_year %}
        <div class="year-section">
            <h3>{{ year.name }}</h3>
            
            {% assign posts_by_month = year.items | group_by_exp: "post", "post.date | date: '%m'" %}
            
            <div class="calendar-grid">
                {% for month in posts_by_month %}
                    <div class="month-block">
                        <h4>{{ month.items.first.date | date: "%B" }}</h4>
                        <div class="days-grid">
                            {% for post in month.items %}
                                <a href="{{ post.url | relative_url }}" 
                                   class="day-link" 
                                   title="{{ post.date | date: '%d.%m.%Y' }}: {{ post.title }}">
                                    {{ post.date | date: "%d" }}
                                </a>
                            {% endfor %}
                        </div>
                    </div>
                {% endfor %}
            </div>
        </div>
    {% endfor %}
</div>
