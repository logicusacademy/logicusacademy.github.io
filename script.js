document.addEventListener('DOMContentLoaded', function() {
    // Fungsionalitas Dropdown Explore
    const exploreDropdown = document.querySelector('.main-nav .dropdown');
    const dropdownContent = document.querySelector('.main-nav .dropdown-content');

    if (exploreDropdown && dropdownContent) {
        // Tambahkan event listener untuk toggle display
        // Bisa juga hanya CSS :hover, tapi JS lebih fleksibel untuk fungsionalitas klik
        exploreDropdown.addEventListener('click', function(event) {
            // Mencegah navigasi default jika link Explore adalah '#'
            if (event.target.tagName === 'A' && event.target.getAttribute('href') === '#') {
                event.preventDefault();
            }
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        // Tutup dropdown jika klik di luar
        document.addEventListener('click', function(event) {
            if (!exploreDropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    }

    // Fungsionalitas Search Bar Sederhana (opsional, bisa lebih kompleks)
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert('Mencari: ' + searchTerm);
                // Di sini Anda akan mengarahkan ke halaman hasil pencarian
                // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
            } else {
                alert('Silakan masukkan kata kunci pencarian.');
            }
        });

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchButton.click(); // Trigger klik tombol pencarian saat Enter ditekan
            }
        });
    }

    // Contoh Fungsionalitas Scroll Header (Menambahkan shadow saat scroll)
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Jika scroll lebih dari 50px
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Anda bisa menambahkan fungsionalitas lain di sini:
    // - Validasi form Login/Sign Up
    // - Carousel untuk featured programs (menggunakan library atau vanilla JS)
    // - Load More button untuk hasil pencarian
    // - Interaksi untuk halaman detail kursus (toggle syllabus, dll)
});
