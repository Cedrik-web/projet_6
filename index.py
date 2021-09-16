#!/usr/bin/python

import cgitb
import requests

cgitb.enable()

print'''
    <!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>JustStreamIt</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <!-- header -->
    <header>
        <!-- div du header avec la barre de navigation -->
        <div class="header">
            <h1>JustStreamIt</h1>
            <nav>
                <button class="nav">Accueil</button>
                <button class="nav">Catégories</button>
            </nav>
        </div>
        <div class="ecart">

        </div>
    </header>
    <main>
        <!-- div du meilleur film -->
        <div class="best_movie">
            <video class="video" controls src=""></video>     
            <div class="info_movie">
                <h2><form action="http://localhost:8000/api/v1/titles/9008642" method="GET"></form></h2>
                <button class="play">Play</button>
            </div>   
        </div>
        <!-- div texte 1 pour les films les mieux notés -->
        <div class="presentation">
            <h3>Films les mieux notés</h3>
        </div>
        <!-- div avec un boxing pour la gestion des image de la categories nommée plus haut-->
        <div class="boxing_movies">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
         <!-- div texte 2 pour la catégories 1 -->
         <div class="presentation">
            <h3>Catégories {}</h3>
        </div>
        <!-- div avec un boxing pour la gestion des image de la categories nommée plus haut-->
        <div class="boxing_movies">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
        <!-- div texte 3 pour la catégories 2 -->
        <div class="presentation">
            <h3>Catégories {}</h3>
        </div>
        <!-- div avec un boxing pour la gestion des image de la categories nommée plus haut-->
        <div class="boxing_movies">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
        <!-- div texte 4 pour la catégories 3 -->
        <div class="presentation">
            <h3>Catégories {}</h3>
        </div>
        <!-- div avec un boxing pour la gestion des image de la categories nommée plus haut-->
        <div class="boxing_movies">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
    </main>
    <footer>
        <div class="footer">

        </div>
    </footer>
</body>
</html>
'''
