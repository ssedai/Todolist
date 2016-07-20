



function updateItemStatus() {

    var cbId = this.id.replace("cb_","");
    var itemText = document.getElementById("item_" + cbId);

    if (this.checked) {
        itemText.className = "checked";

    }

    else

    {
        itemText.className = "";
    }

};



// JavaScript source code
function addNewItem(list, itemText)
{
    var date = new Date();
    var id = ""+ date.getHours()+date.getMinutes() + date.getSeconds() + date.getMilliseconds();
    var listItem = document.createElement('li');
    listItem.id = "li_" + id;
    listItem.ondblclick = removeItem;

    var checkBox = document.createElement("input")
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + id;
    checkBox.onclick = updateItemStatus;
    var span = document.createElement("span");
    span.id = "item_" + id;
    span.innerText = itemText;
    span.onclick = renameItem;
   

    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    list.appendChild(listItem);

}

function renameItem() {

    var newText = prompt("What should the item be renamed as");
    if (!newText || newText == "" || newText == " ") {
        return false;
    }
    
        this.innerText = newText;



}

function removeItem() {


    this.style.display = "none";


}

var initemText = document.getElementById("inItemText");
initemText.focus();

initemText.onkeyup = function (event) {

    if (event.which == 13) {
        var itemText = initemText.value;

        if (!itemText || itemText == "" || itemText == " ") {
            return false;
        }

        addNewItem(document.getElementById("todoList"), itemText);
        document.getElementById("inItemText").blur;
        document.getElementById("inItemText").value = "";
    };

}
