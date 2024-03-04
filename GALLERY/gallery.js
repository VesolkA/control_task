
document.querySelector('.gallery__thumbs').onclick = (e) => {
    e.preventDefault();

    const target = e.target;
    let link = target.closest('a');

    const previewUP = document.querySelector('.gallery__preview');
    previewUP.style.display = 'block'; 

    const img = document.createElement('img');  
    img.setAttribute('src', link.href); 

    const altText = link.querySelector('img').alt;
    const imgTextContainer = previewUP.querySelector('#imgtext');
    imgTextContainer.textContent = altText; 


    const prImg = previewUP.querySelector('.gallery__previmg');
    if (prImg.children.length > 0) {
        [...prImg.children].forEach(item => item.remove());
    }

    prImg.append(img);

}


