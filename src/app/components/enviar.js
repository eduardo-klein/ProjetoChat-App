import React, {useState} from 'react';
export default function Enviar(){
    const [nick, setNick] = useState('');
    
    function enviarNick(){
        //var [mostrarComponente] = useState(true);
        const jsonData = JSON.stringify({nick})
        fetch('https://chat-crng.onrender.com/entrar',
         { method: 'POST', 
            body: jsonData ,
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
        })
        .then(
            //mostrarComponente = false
        )
    }

     return(
        <section>
            <label>Digite o seu nome para o chat</label>
            <input type="text" 
                placeholder="Fulano" 
                value={nick}
                onChange={(e) => setNick(e.target.value)}></input>
            <button id="btnEnviar" onClick={enviarNick}>Enviar</button>
        </section>

    );
}
