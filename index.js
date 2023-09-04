const entities = [
    {
      text: 'Rostov-on-Don, Admiral',
      img: "../27082023/JPG/pic1.jpg"
    },
    {
      text: 'Sochi Thieves',
      img: "../27082023/JPG/pic2.jpg"
    },
    {
      text: 'Rostov-on-Don Patriotic',
      img: "../27082023/JPG/pic3.jpg"
    }
  ]
  
  const title_navigation = document.querySelector('.text')
  const img = document.querySelector('.image')
  
  const setEntity = (index) => {
    title_navigation.innerText = entities[index].text
    img.style.backgroundImage = `url({entities[index].img})`
  }
  
  const arrow = document.querySelector('.arrow')
  const arrowl = document.querySelector('.arrowl')
  let currentIndex = 0
  
  prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
  })
  next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
  })


  