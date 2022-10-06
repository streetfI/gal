(function(b,a){a.addEventListener("submit",b=>{b.preventDefault();const d=b.target,e=new FormData(d);let c={};for(let[a,b]of e)c[a]=b;try{const b=fetch("/api/subscribe",{method:"POST",body:JSON.stringify(c)}).then(b=>{a.querySelector("#sub-form-wrapper").innerHTML=`
                <h2 class="font-bold text-3xl uppercase mb-2 text-center text-gold">You're In!</h2>
                <p class="font-light mb-4 text-lg text-white text-center">Thank You for signing up!</p>
            `})}catch(a){console.log("Submit Error: ",a)}})})(window,document)