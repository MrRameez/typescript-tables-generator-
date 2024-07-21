const formElement = document.querySelector<HTMLFormElement>("#tableForm"); // Form ko select karne ke liye
const inputElement = document.querySelector<HTMLInputElement>("#inputId"); // Input field ko select karne ke liye
const tableElement = document.querySelector<HTMLDivElement>(".time-table"); // Table container ko select karne ke liye

// Jab form submit hota hai
formElement?.addEventListener("submit", (event) => {
    event.preventDefault(); // Default behavior ko rokne ke liye

    const tableof = inputElement?.value || ""; // Table number ko retrieve karne ke liye, ensure tableof is a string

    if (tableof.trim() === "") { // Agar input khaali hai
        alert("Please enter a number."); // User ko alert dene ke liye
        return; // Function ko yahan hi exit karne ke liye
    }

    tableElement!.innerHTML = ""; // Purane table ko clear karne ke liye

    for (let i = 1; i <= 10; i++) { // 1 se 10 tak loop chalane ke liye
        const message = `${tableof} x ${i} = ${parseInt(tableof) * i}`; // Table calculation karne ke liye
        tableElement!.innerHTML += `${message} <br>`; // Table ka result display karne ke liye
    }

    inputElement!.value = ""; // Input field ko clear karne ke liye
});
