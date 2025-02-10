document.getElementById("btnClick").addEventListener("click", function() {
    alert("Você clicou no botão da versão desktop!");
});

document.getElementById("mobileBtn").addEventListener("click", function() {
    alert("Você clicou no botão da versão mobile!");
});

function addRow() {
    const table = document.getElementById("teamTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>
            <select class="menu-suspenso">
                <option value="Cel PM">Cel PM</option>
                <option value="TenCel PM">TenCel PM</option>
                <option value="Maj PM">Maj PM</option>
                <option value="Cap PM">Cap PM</option>
                <option value="1º Ten PM">1º Ten PM</option>
                <option value="2º Ten PM">2º Ten PM</option>
                <option value="Asp Of PM">Asp Of PM</option>
                <option value="Al Of PM">Al Of PM</option>
                <option value="Al Ch PM">Al Ch PM</option>
                <option value="Subten PM">Subten PM</option>
                <option value="1º Sgt PM">1º Sgt PM</option>
                <option value="2º Sgt PM">2º Sgt PM</option>
                <option value="3º Sgt PM">3º Sgt PM</option>
                <option value="Cb PM">Cb PM</option>
                <option value="Sd PM">Sd PM</option>
            </select>
        </td>
        <td><input type="text" class="re-input" placeholder="Digite RE"></td>
        <td><input type="text" class="qra-input" placeholder="Digite QRA"></td>
    `;
}
