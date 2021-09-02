<?php 
    if (isset($_POST['submit'])) {
        $prenom = $_POST['prenom'];
        $nom = $_POST['nom'];
        $email = $_POST['email'];
        $projet = $_POST['projet'];

        $proprietaire = "AgenceLeCrayonDor@gmail.com";
        $objet = "Nouveau client potentiel";
        $txt = "Le client potentiel s'appelle $prenom $nom . \n Son email est : $email \n Sa requette est la suivante: '$projet'";

        mail($proprietaire, $objet, $txt);
    }

?>