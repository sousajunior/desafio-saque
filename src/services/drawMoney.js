const availableBanknotes = [100, 50, 10, 5, 1]

function getClosestBankNote(value) {
  return availableBanknotes.find(bankNote => bankNote <= value)
}

export function drawMoney({ value }) {
  const bankNotes = []

  while (value > 0) {
    const closestBanknote = getClosestBankNote(value)

    if (value - closestBanknote >= 0) {
      value -= closestBanknote
      bankNotes.push(closestBanknote)
    }
  }

  return bankNotes
}
