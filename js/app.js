import { db } from './firebase-config.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js";

// Récupère le paramètre invité dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const invite = urlParams.get('invité') || "Invité";

document.getElementById('welcome').textContent = `Bonjour ${invite}, passe ta commande !`;

const orderBtn = document.getElementById('orderBtn');
const statusEl = document.getElementById('status');

orderBtn.addEventListener('click', () => {
  const drink = document.getElementById('drink').value;

  // On pousse la commande dans Realtime Database sous "orders"
  const ordersRef = ref(db, 'orders');

  push(ordersRef, {
    invité: invite,
    boisson: drink,
    statut: "en attente",
    timestamp: Date.now()
  })
  .then(() => {
    statusEl.textContent = "Commande envoyée, merci !";
    orderBtn.disabled = true;
  })
  .catch((error) => {
    statusEl.textContent = "Erreur lors de la commande : " + error.message;
  });
});
