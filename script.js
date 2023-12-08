function showDescription(index) {
    // Masquer toutes les descriptions
    var descriptions = document.getElementsByClassName('projects-section__description');
    for (var i = 0; i < descriptions.length; i++) {
    descriptions[i].style.display = 'none';
    }
    
    // Afficher la description correspondante
    document.getElementById('desc' + index).style.display = 'block';
    }
    
    