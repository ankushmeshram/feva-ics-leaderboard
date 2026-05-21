async function loadCSV() {
    const response = await fetch('data/leaderboard.csv');
    const csvText = await response.text();

    const rows = csvText.split('\n').map(r => r.split(','));

    const tbody = document.querySelector('#leaderboard tbody');

    // Skip header rows from Excel export
    for (let i = 2; i < rows.length; i++) {

        const row = rows[i];

        if (row.length < 10) continue;

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${row[0]}</td>
            <td>${row[1]}</td>
            <td>${row[2]}</td>
            <td>${row[6]}</td>
            <td>${row[24]}</td>
            <td>${row[32]}</td>
            <td>${row[48]}</td>
            <td>${row[49]}</td>
        `;

        tbody.appendChild(tr);
    }

    new DataTable('#leaderboard');
}

loadCSV();