// const formElement = document.querySelector<HTMLFormElement>("#tableform");
// const inputElement = document.querySelector<HTMLInputElement>("#inputId");
// const tableElement = document.querySelector<HTMLDivElement>(".time-table");

// formElement?.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const tableof = inputElement?.value || ""; // Ensure tableof is a string

//     tableElement!.innerHTML = "";

//     for (let i = 1; i <= 10; i++) {
//         const message = `${tableof} x ${i} = ${parseInt(tableof) * i}`;
//         tableElement!.innerHTML += `${message} <br>`;
//     }
// });


const formElement = document.querySelector<HTMLFormElement>("#tableform");
const inputElement = document.querySelector<HTMLInputElement>("#inputId");
const tableElement = document.querySelector<HTMLDivElement>(".time-table");

formElement?.addEventListener("submit", (event) => {
    event.preventDefault();

    const tableof = inputElement?.value || ""; // Ensure tableof is a string

    tableElement!.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const message = `${tableof} x ${i} = ${parseInt(tableof) * i}`;
        tableElement!.innerHTML += `${message} <br>`;
    }

    inputElement!.value = ""; // Clear the input field after generating the table
});
