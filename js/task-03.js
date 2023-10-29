const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulFind = document.querySelector('ul');
images.forEach(image => {
  const createdLi = document.createElement('li');
  const {url,alt} = image;
  console.log(image.url)
  createdLi.insertAdjacentHTML('beforeend', `<img src="${url}" alt="${alt}"  style="width: 200px; height: 150px;"></img>`);
  ulFind.append(createdLi)
  createdLi.style.width = '200px';
  createdLi.style.height = '150px'; 
  createdLi.style.margin = "10px";
});