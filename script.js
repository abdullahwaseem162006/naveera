document.querySelector('.flower-button').addEventListener('click', createFlowerFountain);

function createFlowerFountain() {
    const flowers = ['🌸', '💮', '🏵️', '🌺', '🌻', '🌼', '🌷'];
    const container = document.querySelector('.flower-container');
    
    // Create 30 flowers
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        
        // Random starting position
        flower.style.left = Math.random() * 100 + '%';
        
        // Random animation properties
        flower.style.animation = `flowerFall ${2 + Math.random() * 2}s linear forwards`;
        flower.style.transform = `translateX(${(Math.random() - 0.5) * 100}vw)`;
        
        container.appendChild(flower);
        
        // Remove flower element after animation
        setTimeout(() => flower.remove(), 3000);
    }
}

