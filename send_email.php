<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "kontakt@compsecure.pl";
    $subject = "Nowa wiadomość z formularza kontaktowego";
    $body = "Imię: $name\nE-mail: $email\n\nWiadomość:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    $headers .= "MIME-Version: 1.0\r\n";

    // Zakodowanie tematu wiadomości w UTF-8
    $encoded_subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

    if (mail($to, $encoded_subject, $body, $headers)) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Błąd podczas wysyłania wiadomości.";
    }
}
?>
