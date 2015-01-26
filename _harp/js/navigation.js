(function(){

  var sidebar;
  var toggle;
  var nav;

  document.addEventListener('DOMContentLoaded', function(event) {

    sidebar = document.getElementById('sidebar');
    toggle = sidebar.querySelectorAll('i')[0];

    // build the sidebar nav
    nav = sidebar.querySelectorAll('ul')[0];
    var h2s = document.querySelectorAll('main > section > h2');
    [].forEach.call(h2s, function(el) {
      var index = Array.prototype.indexOf.call(el.parentNode.children, el);
      if(index === 0){
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.textContent = el.textContent;
        a.setAttribute('href','#'+el.parentNode.getAttribute('id'));
        li.appendChild(a);
        nav.appendChild(li);
      }
    });

    /*
    var list = document.querySelectorAll('main > section > h2.docs');
    [].forEach.call(list, function(el) {
      var link = el.parentNode;
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.textContent = el.textContent;
      a.setAttribute('href','#'+link.getAttribute('id'));
      li.appendChild(a);
      nav.appendChild(li);
    });
    */

    // sidebar toggle
    toggle.addEventListener('click',function(e){
      if(sidebar.getAttribute('data-state') === 'enabled'){
        sidebar.removeAttribute('data-state');
        e.stopPropagation();
      }
    });

    // sidebar functionality
    sidebar.addEventListener('click',function(e){
      if(this.getAttribute('data-state') !== 'enabled'){
        this.setAttribute('data-state','enabled');
      }
    });

  });

})();