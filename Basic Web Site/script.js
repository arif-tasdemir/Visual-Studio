 document.getElementById('animateBtn').addEventListener('click', function() {
            const box = document.getElementById('box');
            let position = 0;
            const interval = setInterval(frame, 5);
            
            function frame() {
                if (position === 300) {
                    clearInterval(interval);
                } else {
                    position++;
                    box.style.top = position + 'px';
                    box.style.left = position + 'px';
                }
            }
        });