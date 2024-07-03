composant PopUpDialog

Cette partie de code définit un composant Vue.js qui fournit un service de boîte de dialogue personnalisée pour l'application.

Le composant utilise la fonction ref de Vue.js pour créer des références réactives aux variables dialog et message, qui sont utilisées pour contrôler l'affichage de la boîte de dialogue et le message à afficher.

La fonction provide est utilisée pour fournir ces références et les fonctions associées à tous les composants enfants de l'application. Cela permet aux composants enfants d'utiliser facilement la boîte de dialogue personnalisée en injectant simplement le service popUpDialog dans leur propre fonction setup.

Les fonctions closeDialog, goToLogin et openDialog sont définies pour contrôler l'affichage et les actions de la boîte de dialogue. La fonction closeDialog ferme simplement la boîte de dialogue en définissant la valeur de dialog sur false. La fonction goToLogin redirige l'utilisateur vers la page de connexion en utilisant le routeur Vue.js, puis ferme la boîte de dialogue. La fonction openDialog définit le message à afficher dans la boîte de dialogue et ouvre la boîte de dialogue en définissant la valeur de dialog sur true.

Enfin, le composant n'a pas de modèle associé, car il fournit simplement un service à utiliser par d'autres composants de l'application. Les styles spécifiques peuvent être ajoutés si nécessaire dans la section <style>.