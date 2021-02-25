var links = [ "home","about","contact","hobby","writers","movies","games","jokes","miscalenous","joulupukki" ];
function lnks(value) {
    $(`#${value}`).click(function(){
        $(".main-left").load(`./pages/${value}.html`);
    });
}
$(document).ready(function(){
    $(".main-left").load("./pages/home.html");
    links.forEach(lnks);
});
