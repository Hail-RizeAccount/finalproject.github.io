document.addEventListener("DOMContentLoaded", function() {
    const Button = document.getElementById('Button');
    const form = document.getElementById('form');

    Button.addEventListener('click', function() {
        form.style.display = 'block';
    });

    const input = document.getElementById('input');
    input.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone_number = document.getElementById('phone_number').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phone_number);


    });
});

document.addEventListener("DOMContentLoaded", function() {
    const Button2 = document.getElementById('Button2');
    const form2 = document.getElementById('form2');

    Button2.addEventListener('click', function() {
        form2.style.display = 'block';
    });

    const input2 = document.getElementById('input2');
    input2.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name2 = document.getElementById('name').value;
        const email2 = document.getElementById('email').value;
        const phone_number2 = document.getElementById('phone_number').value;

        console.log('Name:', name2);
        console.log('Email:', email2);
        console.log('Phone Number:', phone_number2);


    });
});

document.addEventListener("DOMContentLoaded", function() {
    const Button3 = document.getElementById('Button3');
    const form3 = document.getElementById('form3');

    Button3.addEventListener('click', function() {
        form3.style.display = 'block';
    });

    const input3 = document.getElementById('input3');
    input3.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name3 = document.getElementById('name').value;
        const email3 = document.getElementById('email').value;
        const phone_number3 = document.getElementById('phone_number').value;

        console.log('Name:', name3);
        console.log('Email:', email3);
        console.log('Phone Number:', phone_number3);


    });
});

function mOver1(obj) {
  obj.innerHTML = "Some upcoming events include the Great Futures Celebration and the Annual Golf Tournament.";
}

function mOut1(obj) {
  obj.innerHTML = "Events for the Boys & Girls Club of Allentown";
}

function mOver2(obj) {
  obj.innerHTML = " Some upcoming events include the Hope & Healing Art Show, the Sip and Stitch event, and the Allentown Film Festival.";
}

function mOut2(obj) {
  obj.innerHTML = "Events for the Allentown Art Museum";
}

function mOver3(obj) {
  obj.innerHTML = "Some upcoming events include the Spring into the Arts Teen Event and the Earth Day Children’s Event.";
}

function mOut3(obj) {
  obj.innerHTML = "Events for the Camelot for Children";
}
