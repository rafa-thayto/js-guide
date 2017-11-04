window.addEventListener('load', () => {

    document.getElementById('calcular').addEventListener('click', () => {
        var name = document.getElementById('inputName').value;
        var age = Number(document.getElementById('inputAge').value);
        var office = document.getElementById('inputOffice').value;
        var salary = Number(document.getElementById('inputSalary').value);
    
        var readjust = 0.38 * salary;
        var gratification = 0.20 * salary;
        
        var gSalary = salary + readjust + gratification; 
        var nSalary = gSalary - (0.15 * salary);
    
        console.log(`Name: ${name}\n
        Age: ${age}\n
        Office: ${office}\n
        Salary: ${salary}\n\n
        Gross Salary: ${gSalary}\n
        Net Salary: ${nSalary}`);
    })

});
