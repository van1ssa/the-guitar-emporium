jQuery(".dropdown-tree-a").click(function (e) {                     
    e.preventDefault();

jQuery(".dropdown-tree").removeClass("open-tree active"); 
/** FIRST REMOVE CLASSES FROM ALL ELEMENTS **/
jQuery(this).parents('.dropdown-tree').addClass("open-tree active"); 
/** IN NEXT STEP FIND PARENT item with class '.dropdown-tree' and then add classes 'open-tree active'. USe Css to display child items **/
});