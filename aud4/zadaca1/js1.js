function vnesi() {

    var ime= document.getElementById('ime')
    var prezime= document.getElementById('prezime')
    var indeks= document.getElementById('indeks')
    var predmet= document.getElementById('predmet')
    var ocena= document.getElementById('ocena')

    var tableRef=document.getElementById('vneseno').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow(tableRef.rows.length);


    var newCell0=newRow.insertCell(0);
    var newCell1=newRow.insertCell(1);
    var newCell2=newRow.insertCell(2);
    var newCell3=newRow.insertCell(3);
    var newCell4=newRow.insertCell(4);


    newCell0.innerHTML=ime.value;
    newCell1.innerHTML=prezime.value;
    newCell2.innerHTML=indeks.value;
    newCell3.innerHTML=predmet.value;
    newCell4.innerHTML=ocena.value;


    ime.value="";
    prezime.value="";
    indeks.value="";
    predmet.value="";

}
function reset() {
    var dropdown = document.getElementById('ocena');
   for (var i=0, l=dropdown.length;i<l;i++)
    {
        dropdown[i].selected=dropdown[i].defaultSelected;
    }

}
