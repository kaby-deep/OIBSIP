let result;
        const myfun = () => {
            let temp = document.getElementById('temp').value;
            console.log(temp);
            let tempsel = document.getElementById('select_temp');
            let n = tempsel.options.selectedIndex;
            let selectionis = tempsel.options[n].value;
            if (selectionis == 'Celcius') {
                result = ((temp * (9/5)) + 32)
                document.getElementById('myresult').innerHTML = `  ${result.toFixed(3)} Fahrenheit`
            }
            else {
                result = ((temp - 32) / (9/5));
                document.getElementById('myresult').innerHTML = ` ${result.toFixed(3)} Celcius`
            }
        }