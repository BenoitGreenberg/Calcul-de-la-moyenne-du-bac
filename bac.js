function check() {


function markOnlyOver10(mark) {
var t = mark-10; 
if (t<0) t = 0;
return t;
}




if ($("#Ensei_sp").val()=='SVT' && $("#matiere_au_choix").val()!='SVT')
{
alert('Il n\'est pas possible de choisir SVT en enseignement de spécialité alors que vous n\'avez pas choisis SVT dans la matière au choix.');
$("#Ensei_sp").val('Mathematique');
}


if ($("#matiere_au_choix").val()=='SVT') {
$("#coeff_matiere_au_choix").html('6');
}


if ($("#Ensei_sp").val()=='SVT') {
$("#coeff_matiere_au_choix").html('8');
$("#coeff_Mathematique").html('7');
$("#coeff_Physique_Chimie").html('6');
}

if ($("#Ensei_sp").val()=='Physique-chimie') {
$("#coeff_matiere_au_choix").html('6');
$("#coeff_Mathematique").html('7');
$("#coeff_Physique_Chimie").html('8');
}

if ($("#Ensei_sp").val()=='Mathematique') {
$("#coeff_matiere_au_choix").html('6');
$("#coeff_Mathematique").html('9');
$("#coeff_Physique_Chimie").html('6');
}

if ($("#matiere_au_choix").val()=='Sciences_ingenieur') {
$("#coeff_matiere_au_choix").html('9');
}


if ($("#note_Mathematique").val()) $("#point_Mathematique").html($("#note_Mathematique").val()*$("#coeff_Mathematique").html())
if ($("#note_Physique_Chimie").val()) $("#point_Physique_Chimie").html($("#note_Physique_Chimie").val()*$("#coeff_Physique_Chimie").html())
if ($("#note_Histoire_Geographie").val()) $("#point_Histoire_Geographie").html($("#note_Histoire_Geographie").val()*$("#coeff_Histoire_Geographie").html())
if ($("#note_Francais_ecrit").val()) $("#point_Francais_ecrit").html($("#note_Francais_ecrit").val()*$("#coeff_Francais_ecrit").html())
if ($("#note_Francais_oral").val()) $("#point_Francais_oral").html($("#note_Francais_oral").val()*$("#coeff_Francais_oral").html())
if ($("#note_Philosophie").val()) $("#point_Philosophie").html($("#note_Philosophie").val()*$("#coeff_Philosophie").html())
if ($("#note_EPS").val()) $("#point_EPS").html($("#note_EPS").val()*$("#coeff_EPS").html())
if ($("#note_TPE").val()) $("#point_TPE").html(markOnlyOver10($("#note_TPE").val())*$("#coeff_TPE").html())
if ($("#note_matiere_au_choix").val()) $("#point_matiere_au_choix").html($("#note_matiere_au_choix").val()*$("#coeff_matiere_au_choix").html())
if ($("#note_LV1").val()) $("#point_LV1").html($("#note_LV1").val()*$("#coeff_LV1").html())
if ($("#note_LV2").val()) $("#point_LV2").html($("#note_LV2").val()*$("#coeff_LV2").html())
if ($("#note_opt_facultative_1").val()) $("#point_opt_facultative_1").html(markOnlyOver10($("#note_opt_facultative_1").val())*$("#coeff_opt_facultative_1").html())
if ($("#note_opt_facultative_2").val()) $("#point_opt_facultative_2").html(markOnlyOver10($("#note_opt_facultative_2").val())*$("#coeff_opt_facultative_2").html())


// point_total
point_total = 0;

point_total += parseInt($("#point_Mathematique").html());
point_total += parseInt($("#point_Physique_Chimie").html());
point_total += parseInt($("#point_Histoire_Geographie").html());
point_total += parseInt($("#point_Francais_ecrit").html());
point_total += parseInt($("#point_Francais_oral").html());
point_total += parseInt($("#point_Philosophie").html());
point_total += parseInt($("#point_EPS").html());
point_total += parseInt($("#point_TPE").html());
point_total += parseInt($("#point_matiere_au_choix").html());
point_total += parseInt($("#point_LV1").html());
point_total += parseInt($("#point_LV2").html());
point_total += parseInt($("#point_opt_facultative_1").html());
point_total += parseInt($("#point_opt_facultative_2").html());


$("#point_total").html(point_total);


// coeff_total
coeff_total = 0;

coeff_total += parseInt($("#coeff_Mathematique").html());
coeff_total += parseInt($("#coeff_Physique_Chimie").html());
coeff_total += parseInt($("#coeff_Histoire_Geographie").html());
coeff_total += parseInt($("#coeff_Francais_ecrit").html());
coeff_total += parseInt($("#coeff_Francais_oral").html());
coeff_total += parseInt($("#coeff_Philosophie").html());
coeff_total += parseInt($("#coeff_EPS").html());
coeff_total += parseInt($("#coeff_matiere_au_choix").html());
coeff_total += parseInt($("#coeff_LV1").html());
coeff_total += parseInt($("#coeff_LV2").html());


$("#coeff_total").html(coeff_total);

var bac_result = Math.round((point_total/coeff_total)*100)/100;

if (bac_result>=10) {
var mention;
if (bac_result<12) mention = "passable";
if (bac_result>=12 && bac_result<14) mention = "assez bien";
if (bac_result>=14 && bac_result<16) mention = "bien";
if (bac_result>16) mention = "très bien";

$("#result").html("Vous obtenez votre bac avec une moyenne de " + bac_result + " et une mention " + mention + ".");
}

if (bac_result>=8 && bac_result<10) {
$("#result").html("Vous allez au rattrapage avec une moyenne de " + bac_result + " .");
}

if (bac_result<8) {
$("#result").html("Vous avez échoué à l'épreuve du BAC avec une moyenne de " + bac_result + " .");
}

}