// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
//const date = document.getElementById("date");
//date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
   /*linksContainer.classList.toggle("show-links");*/
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************

const navbar = document.querySelector(".nav-bar");
const topLink = document.querySelector(".top-link");



		const content =document.querySelector('.unknown');
		const imgOne= document.querySelector('.one');
		const imgTwo= document.querySelector('.two');

		content.addEventListener('mouseover',function(){
		     
			console.log('hello')
			 imgOne.style.animationName="moves";
			 imgTwo.style.animationName="move";
    });
    
    content.addEventListener('mouseout',function(){
		     
			console.log('hello')
			 imgOne.style.animationName="oma";
			 imgTwo.style.animationName="oma2";
    })
    

    // ajax class hare start

    const law = [
      {
         tittl : 'insurancelaw',
         text:
          ' u heihfuha pefia nviurgauefhcjkawesxrdctfvygbhnjmkxdcfgvbhnjm  huiogefouacyngcorrupti quo quia. Perspiciatis quis vitae eius unde odio dolore ratione? Debitis ad rem impedit, cumque voluptates laborum soluta consequatur velit tempora voluptatem blanditiis nihil, atque quidem dignissimos, quo nam excepturi eos officia incidunt perspiciatis? Pariatur laudantium veniam maxime voluptatem quam! Repudiandae perspiciatis corrupti quibusdam! Eaque nam similique recusandae fugit tenetur voluptatum voluptas illo suscipit eveniet blanditiis amet porro corporis ipsum quis officia quia iusto pariatur nesciunt mollitia debitis explicabo, animi, exercitationem fuga? Obcaecati repellendus vitae modi sequi ab iusto reprehendernulla repellat ipsam odio impedit praesentium veritatis illum, libero laboriosam quas totam repellendus sit harum hic! ',
        img :'./img/4-300x223.jpg'
      },
      {
        tittl : 'businesslaw',
        text:
         ' Rubel ayeuf hdfasjdnfjksadnv guwaef 54 0\
         8corrupti quo quia. Perspiciatis quis vitae eius unde odio dolore ratione? Debitis ad rem impedit, cumque voluptates laborum soluta consequatur velit tempora voluptatem blanditiis nihil, atque quidem dignissimos, quo nam excepturi eos officia incidunt perspiciatis? Pariatur laudantium veniam maxime voluptatem quam! Repudiandae perspiciatis corrupti quibusdam! Eaque nam similique recusandae fugit tenetur voluptatum voluptas illo suscipit eveniet blanditiis amet porro corporis ipsum quis officia quia iusto pariatur nesciunt mollitia debitis explicabo, animi, exercitationem fuga? Obcaecati repellendus vitae modi sequi ab iusto reprehendernulla repellat ipsam odio impedit praesentium veritatis illum, libero laboriosam quas totam repellendus sit harum hic! ',
         img:'./img/5-300x223.jpg'

     },
      {
        tittl : 'financelaw' ,
        text:' 9ruc9ufmjfiohq h qupghpam excepturi eos officia incidunt perspiciatis? Pariatur laudantium veniam maxime voluptatem quam! Repudiandae perspiciatis corrupti quibusdam! Eaque nam similique recusandae fugit tenetur voluptatum voluptas illo suscipit eveniet blanditiis amet porro corporis ipsum quis officia quia iusto pariatur nesciunt mollitia debitis explicabo, animi, exercitationem fuga? Obcaecati repellendus vitae modi sequi ab iusto reprehendernulla repellat ipsam odio impedit praesentium veritatis illum, libero laboriosam quas totam repel',
        img:'./img/5-300x223.jpg'
      },
      {
        tittl : 'industriallaw',
        text:
         'corrupti quo quia. Perspiciatis quis vitae eius unde odio dolore ratione? Debitis ad rem impedit, cumque voluptates laborum soluta consequatur velit tempora voluptatem blanditiis nihil, atque quidem dignissimos, quo nam excepturi eos officia incidunt perspiciatis? Pariatur laudantium veniam maxime voluptatem quam! Repudiau hrhw ruh qpuertp qhgcpnvksmlkvnndae perspiciatis corrupti quibusdam! Eaque nam similique recusandae fugit tenetur voluptatum voluptas illo suscipit eveniet blanditiis amet porro corporis ipsum quis officia quia iusto pariatur nesciunt mollitia debitis explicabo, animi, exercitationem fuga? Obcaecati repellendus vitae modi sequi ab iusto reprehendernulla repellat ipsam odio impedit praesentium veritatis illum, libero laboriosam quas totam repellendus sit harum hic! ',
         img:'./img/11.jpg'

     },
     {
      tittl : 'politicallaw',
      text:
       'corrupti quo quia. Perspiciatis quis vitae eius unde odio dolore ratione? Debitis ad rem impedit, cumque voluptates laborum soluta consequatur velit tempora voluptatem blanditiis nihil, atque quidem dignissimos, quo nam excepturi eos officia incidunt perspiciatis? Pariatur laudantium veniam maxime voluptatem quam! Repudiandae perspiciatis corrupti quibusdam! Eaque nam similique recusandae fugit tenetur voluptatum voluptas  hpew herwut qghwpieg qpurgillo suscipit eveniet blanditiis amet porro corporis ipsum quis officia quia iusto pariatur nesciunt mollitia debitis explicabo, animi, exercitationem fuga? Obcaecati repellendus vitae modi sequi ab iusto reprehendernulla repellat ipsam odio impedit praesentium veritatis illum, libero laboriosam quas totam repellendus sit harum hic! ',
       img:'./img/8-300x223.jpg'

   },
   {
    tittl : 'criminallaw',

    text:' quo nam excepturi eos officia incidunt perspiciatis? Pariatur laudantium veniam maxime voluptatem quam! Repudiandae perspiciatis corrupti quibusdam! Eaque nam similique recusandae fugit tenetur voluptatum voluptas  hpew herwut qghwpieg qpurgillo suscipit eveniet blanditiis amet porro corporis ipsum quis officia quia iusto pariatur nesciunt mollitia debitis explicabo, animi, exercitationem fuga? Obcaecati repellendus vitae modi sequi ab iusto reprehendernulla repellat ipsam odio impedit praesentium veritatis illum, libero laboriosam quas totam repellendus sit harum hic!uptates laborum soluta consequatur velit tempora voluptatem blanditiis nihil, atque quidem dignissimos, quo nam excepturi eos officia incidunt perspiciatis? Pariatur laudantium veniam maxime voluptatem quam! Repudiandae perspiciatis corrupti quibusdam! Eaque nam similique recusandae fugit tenetur voluptatum voluptas illo sus ',
    img:'./img/aa.jpg'

 },
  ];


    const btn = document.querySelectorAll('.btn');

  btn.forEach(function(btns) {

      btns.addEventListener('click', function(e){
          const targetbtn = e.currentTarget.className.slice(4);
          console.log(targetbtn)

  const lawdescription= law.filter(function(lawItem){
    if(lawItem.tittl===targetbtn){
      return lawItem;
    }
  })

    const show = document.querySelector('.description');
const client = document.querySelector('.client');


       lawdescription.forEach(function(item){
        client.src=item.img;   
    show.innerHTML=item.text;
       })

      })
  })

 
/*
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
/*
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights
*/