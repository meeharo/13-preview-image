var uploadImg = document.querySelector('#myPicture')
var content = document.querySelector('.content')
var error = document.querySelector('.error')

uploadImg.addEventListener('change', () => {
    let file = uploadImg.files[0]
    
    if (!file.name.endsWith('.jpg')) {
        error.innerText = 'Hình ảnh phải định dạng theo jpeg'
        return
    } else {
        error.innerText = ''
    }

    if (!file.size / (1024 * 1024) > 5) {
        error.innerText = 'Chỉ được upload ảnh dưới 5MB'
        return
    } else {
        error.innerText = ''
    }
    
    var img = document.createElement('img')
    img.src = URL.createObjectURL(file)
    content.appendChild(img)
})