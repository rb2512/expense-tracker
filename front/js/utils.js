export function calculerSolde(transactions) {
  return transactions.reduce((total, transaction) => {
    if(transaction.type === "revenu") {
        total += transaction.montant;
        return total;
    } 
    else {
        total -= transaction.montant;
        return total;
    }
  }, 0);
}