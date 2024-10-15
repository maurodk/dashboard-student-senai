// Heurística 1: Visibilidade do Status do Sistema
document.getElementById("gerar-relatorio").addEventListener("click", function() {
    const select = document.getElementById("relatorio-select");
    const selectedValue = select.value;

    const feedbackElement = document.getElementById("feedback");

    if (selectedValue) {
        feedbackElement.textContent = `Relatório de ${selectedValue} gerado com sucesso!`;
        feedbackElement.style.color = "green"; 
    } else {
        feedbackElement.textContent = "Por favor, selecione um relatório.";
        feedbackElement.style.color = "red"; 
    }

    feedbackElement.style.display = "block";
});


// Heurística 3: Controle e Liberdade do Usuário
function cancelar() {
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
}

// Heurística 5: Prevenção de Erros
document.getElementById("config-form").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Heurística 7: Flexibilidade e Eficiência de Uso
document.getElementById("tema").addEventListener("change", function() {
    document.body.classList.toggle("dark-theme");
});
