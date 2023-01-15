    let contar = 0;
    document.getElementById('contando').innerText = contar;

    function increment()
        {
            contar = contar + 1;
            document.getElementById('contando').innerText = contar;
        }

    function decrement()
        {
            contar = 0;
            document.getElementById('contando').innerText = contar;
        }