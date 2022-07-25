//copy menu for mobile
function copyMenu(){
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();



//show mobile menu
const menuButton = document.querySelector('.trigger');
      closeButton = document.querySelector('.t-close');
      addclass = document.querySelector('.site');
      //abro menu RESPONSIVE
      menuButton.addEventListener('click',function(){
        addclass.classList.toggle('showmenu')
      });
     //cierro menu RESPONSIVE
      closeButton.addEventListener('click',function(){
          addclass.classList.remove('showmenu')
      });

//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item)=> item != this ? item.closest('.has-child').classList.remove('expand') :null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

//cart
let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pay $${total}`
    alert("Has been added to cart")
}

function pay() {
    window.alert(products.join(", \n"));
}

function remove(product, price) {
    console.log(product, price);
    products.push(product);
    total = total - price;
    document.getElementById("checkout").innerHTML = `Pay $${total}`
    alert("Has been removed from the cart")
}
