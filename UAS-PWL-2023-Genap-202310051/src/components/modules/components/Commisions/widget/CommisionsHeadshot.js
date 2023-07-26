// Buat fungsi untuk membuat widget order gambar
function createOrderImageWidget() {
    // Buat elemen-elemen HTML yang diperlukan
    const container = document.createElement('div');
    container.classList.add('container');
  
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('left-column');
  
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('right-column');
  
    const ruleHeading = document.createElement('h2');
    ruleHeading.textContent = 'Aturan Order Gambar';
  
    const ruleText = document.createElement('p');
    ruleText.textContent = 'Teks aturan disini...';
  
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = 'gambar.jpg';
    image.alt = 'Gambar';
  
    const formHeading = document.createElement('h3');
    formHeading.textContent = 'Order Gambar';
  
    const form = document.createElement('form');
    form.action = 'proses_order.php';
    form.method = 'post';
  
    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = 'deskripsi';
    descriptionLabel.textContent = 'Deskripsi Gambar:';
  
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.id = 'deskripsi';
    descriptionInput.name = 'deskripsi';
    descriptionInput.required = true;
  
    const orderButton = document.createElement('input');
    orderButton.classList.add('order-button');
    orderButton.type = 'submit';
    orderButton.value = 'Order';
  
    // Tambahkan elemen-elemen ke dalam struktur DOM
    form.append(descriptionLabel, descriptionInput, orderButton);
    rightColumn.append(image, form);
    leftColumn.append(ruleHeading, ruleText);
    container.append(leftColumn, rightColumn);
    document.body.appendChild(container);
  }
  
  // Panggil fungsi untuk membuat widget order gambar
  createOrderImageWidget();
  