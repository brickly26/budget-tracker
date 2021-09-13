let db;

const request = window.indexedDB.open("BudgetDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;

  const BudgetStore = db.createObjectStore("BudgetStore", {
    autoIncrement: true
  });

  BudgetStore.createIndex("budgets", "transactions");
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode)
};

function saveRecord(record) {

  const transaction = db.transaction(["BudgetStore"], "readwrite");
  const budgetStore = transaction.objectStore("BudgetStore");

  budgetStore.add(record);
}

function checkDatabase() {

  const transaction = db.transaction(['BudgetStore'], "readwrite");
  const budgetStore = transaction.objectStore("BudgetStore");
  const getAll = budgetStore.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        header: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        }
      })
        .then((response) => response.json())
        .then(() => {
          db = request.result;
          const transaction = db.transaction(["BudgetStore"], "readwrite");
          const budgetStore = transaction.objectStore("BudgetStore");
          budgetStore.clear();
        });
    }
  };
}

window.addEventListener("online", checkDatabase);