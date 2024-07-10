
var tabLinks = document.getElementsByClassName('linkTabs');
var contentTabs = document.getElementsByClassName('contentTabs');

function openTab(tabname){
  for(tabLink of tabLinks){
    tabLink.classList.remove('activeLink');
  }

  for(contentTab of contentTabs){
    contentTab.classList.remove('activeTab');
  }
    event.currentTarget.classList.add('activeLink');
    document.getElementById(tabname).classList.add('activeTab')
};

