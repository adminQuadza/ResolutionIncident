# Application de gestion d’utilisateurs (Users)


## description:

Cette application est composée de 2 modules :

- Le module back.
- Le module font.

### Le module back:
**folder** : user-management
C’est un module développé avec nodejs/NestJS
Une api REST est disponible.
La description de cette API est accessible sur l’url http://<<adresse de la machine>>:3000/api au format OpenAPI.

Ce module permet l’administration (CRUD) des users via des méthodes http.
Il n’y a pas de persistance sur disque mais les utilisateurs sont disponibles en mémoire (le redémarrage de l’application purge tous les user en mémoire).

### Le module front:
**folder** : cliv/my-user-app
Ce module (très simple) est implémenté avec le Framework VueJS.
Il permet uniquement la création d’un utilisateur.


## Problème:
Cette application n’est pas fonctionnelle car la création des utilisateurs n’est pas réalisée en totalité.
Avec swagger la création est opérationelle mais pas avec le client vuejs. Dans le cas du client vuejs uniquement l’id de l’utilisateur créé est retourné.

## Résolution:
Vous devez rendre cette application fonctionnelle en décrivant dans un fichier de type markdown la démarche de résolution et la résolution du problème.

