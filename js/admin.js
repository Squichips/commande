import { db } from './firebase-config.js';
import { ref, onValue, update } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js";

const ordersList = document.getElementById('ordersList');
const ordersRef = ref(db, 'orders');

// Écoute les commandes en temps réel
onValue(ordersRef, (snapshot) => {
  ordersList.innerHTML = ''; // vide la liste à chaque update
  const orders = snapshot.val();

  if (!orders) {
    ordersList.textContent = 'Aucune commande pour le moment.';
    return;
  }

  Object.entries(orders).forEach(([key, order]) => {
    const li = document.createElement('li');
    li.textContent = `Invité: ${order.invité} - Boisson: ${order.boisson} - Statut: ${order.statut}`;

    if (order.statut === 'en attente') {
      const btn = document.createElement('button');
      btn.textContent = 'Accepter';
      btn.addEventListener('click', () => {
        // Met à jour le statut à "acceptée"
        update(ref(db, `orders/${key}`), { statut: 'acceptée' });
      });
      li.appendChild(btn);
    }

    ordersList.appendChild(li);
  });
});
