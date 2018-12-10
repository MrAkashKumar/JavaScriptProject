    
document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e){
    //console.log(5)
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText);
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Age: ${customer.age}</li>
                    <li>Company: ${customer.company}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML=output;
        }
    }

    xhr.send();

}

document.getElementById('button2').addEventListener('click', loadMultipleCustomer);

function loadMultipleCustomer(e){
    //console.log(22)
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer2.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const multipleconstomer = JSON.parse(this.responseText);
            let output = '';

            multipleconstomer.forEach(function(customer){

                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Age: ${customer.age}</li>
                    <li>Company: ${customer.company}</li>
                </ul>
                `;
            });

            document.getElementById('customer2').innerHTML = output;
        }
    }
    xhr.send();
}