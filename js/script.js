
function openPlayer(url) {
  const modal = document.getElementById('playerModal');
  const iframe = document.getElementById('videoPlayer');
  iframe.src = url;
  modal.style.display = 'flex';
}

function closePlayer() {
  const modal = document.getElementById('playerModal');
  const iframe = document.getElementById('videoPlayer');
  iframe.src = '';
  modal.style.display = 'none';
}

function filterCategory(category) {
  const movies = document.querySelectorAll('.movie');
  movies.forEach(movie => {
    if (category === 'Todos' || movie.dataset.category === category) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
}


function searchMovies() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const movies = document.querySelectorAll('.movie');
  movies.forEach(movie => {
    const title = movie.textContent.toLowerCase();
    movie.style.display = title.includes(input) ? 'block' : 'none';
  });
}


// Bloquear F12, Ctrl+Shift+I, Ctrl+U, botão direito etc.
document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
