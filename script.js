document.getElementById('start-btn').addEventListener('click', () => {
    const name = prompt("Enter the birthday person's name:");
    const nameDisplay = document.getElementById('name-display');
    const animation = document.getElementById('animation');
    
    if (name) {
      nameDisplay.textContent = `🎈 Oa cuối cùng chúng mình đã bên nhao được năm tháng rùi ạ.Bọn mình đã trải qua bao kỉ niệm với nhao.
      Vui có,buồn có,thất vọng có nhưng sau tất cả chúng mình vẫn nắm tay nhau đi qua hết tất cả.Anh thấy hạnh phúc khi ở bên cạnh em,
      anh luôn mang đến sự phiền toái cho em,,rất may em đã thấy hiểu luôn ở bên anh trong mọi hoàn cảnh.Một chặng đằng dài còn ở phía trước
      của mình, anh mong rằng mình sẽ đồng hành nắm tay nhau vượt qua mọi khó khăn nhé!!!Iu vợ nhìu ạ<3   .
      Gửi ${name} iu dấu! 🎈`;
    } else {
      nameDisplay.textContent = `🎈 Wishing you a fantastic day! 🎈`;
    }
    
    animation.classList.remove('hidden');
    
    let frames = document.querySelectorAll('.frame');
    let index = 0;
  
    setInterval(() => {
      frames.forEach((frame, i) => {
        frame.style.display = i === index ? 'block' : 'none';
      });
      index = (index + 1) % frames.length;
    }, 500);
  });
  