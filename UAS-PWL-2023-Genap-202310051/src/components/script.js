// Fungsi untuk menampilkan gambar di galeri
function displayImage(imageUrl) {
    const gallery = document.getElementById('image-gallery');
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    gallery.appendChild(imgElement);
  }
  
  // Tangkap form unggah gambar saat dikirim
  const uploadForm = document.getElementById('upload-form');
  uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageInput = document.getElementById('image-input');
    const file = imageInput.files[0];
    const reader = new FileReader();
    
    // Baca file gambar sebagai URL data
    reader.addEventListener('load', function() {
      const imageUrl = reader.result;
      displayImage(imageUrl);
      
      // Lakukan logika penyimpanan ke backend di sini
      // Misalnya, kirimkan gambar ke server menggunakan AJAX atau Fetch API
      // Lalu, simpan informasi gambar di database
    });
    
    if (file) {
      reader.readAsDataURL(file);
    }
    
    imageInput.value = '';
  });
  